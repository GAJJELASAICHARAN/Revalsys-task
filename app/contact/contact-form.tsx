'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const topics = [
  'Order & Shipping',
  'Returns & Refunds',
  'Product Question',
  'Technical Support',
  'Account & Password',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="w-14 h-14 text-green-500" />
        <h3 className="text-xl font-semibold text-[#0f1111]">Message sent!</h3>
        <p className="text-[#565959] max-w-sm">
          Thanks, <strong>{form.name}</strong>! We&apos;ve received your message and will reply to <strong>{form.email}</strong> within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: '', message: '' }); }}
          className="text-sm text-[#0066c0] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field = 'w-full px-3 py-2 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30 text-[#0f1111]';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-[#0f1111] mb-1">Full Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="John Doe"
            className={field}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#0f1111] mb-1">Email Address *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="john@example.com"
            className={field}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0f1111] mb-1">Topic *</label>
        <select
          required
          value={form.topic}
          onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
          className={field}
        >
          <option value="">Select a topic...</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0f1111] mb-1">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Describe your issue or question in detail..."
          className={`${field} resize-none`}
        />
      </div>

      <Button
        type="submit"
        className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-normal border border-[#FCD200] rounded-sm h-9 px-8"
      >
        Send Message
      </Button>
    </form>
  );
}
