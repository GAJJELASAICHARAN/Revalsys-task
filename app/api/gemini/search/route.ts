import { NextResponse } from 'next/server';

type GeminiSearchResponse = {
  expandedQuery: string;
  keywords: string[];
  detectedCategory?: 'laptops' | 'smartphones' | 'tablets' | 'accessories' | 'wearables';
};

function safeJsonParse<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim();

  if (!q) {
    return NextResponse.json({ expandedQuery: '', keywords: [] } satisfies GeminiSearchResponse);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Graceful fallback if key isn’t configured.
    return NextResponse.json({ expandedQuery: q, keywords: q.split(/\s+/) } satisfies GeminiSearchResponse);
  }

  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent' +
    `?key=${encodeURIComponent(apiKey)}`;

  const systemInstruction =
    'You help a product search system map user queries to e-commerce intent. ' +
    'Return ONLY valid JSON. No markdown. No extra text.';

  const prompt = [
    systemInstruction,
    '',
    'Given this user query:',
    JSON.stringify(q),
    '',
    'Return JSON with:',
    '- expandedQuery: a short rewritten query with common synonyms added (example: "mobiles" -> "mobile phone smartphone")',
    '- keywords: array of lowercase keywords/synonyms (unique, max 12)',
    '- detectedCategory: one of ["laptops","smartphones","tablets","accessories","wearables"] if clearly implied, otherwise omit',
  ].join('\n');

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 256,
      },
    }),
  });

  if (!resp.ok) {
    return NextResponse.json({ expandedQuery: q, keywords: q.split(/\s+/) } satisfies GeminiSearchResponse);
  }

  const data = (await resp.json()) as any;
  const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  const parsed = text ? safeJsonParse<GeminiSearchResponse>(text) : null;

  if (!parsed || typeof parsed.expandedQuery !== 'string' || !Array.isArray(parsed.keywords)) {
    return NextResponse.json({ expandedQuery: q, keywords: q.split(/\s+/) } satisfies GeminiSearchResponse);
  }

  return NextResponse.json({
    expandedQuery: parsed.expandedQuery.trim() || q,
    keywords: [...new Set(parsed.keywords.map((k: any) => String(k).toLowerCase().trim()).filter(Boolean))].slice(0, 12),
    detectedCategory: parsed.detectedCategory,
  } satisfies GeminiSearchResponse);
}

