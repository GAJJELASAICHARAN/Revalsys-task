import { Product, products } from './products';

// AI-powered product recommendation engine
export function getAIRecommendations(
  viewedProductId: string,
  purchaseHistory: string[] = []
): Product[] {
  const viewedProduct = products.find(p => p.id === viewedProductId);
  if (!viewedProduct) return [];

  const recommendations: { product: Product; score: number }[] = [];

  products.forEach(p => {
    if (p.id === viewedProductId || purchaseHistory.includes(p.id)) return;

    let score = 0;

    // Same category - high priority
    if (p.category === viewedProduct.category) score += 30;

    // Similar price range (within 20%)
    const priceDiff = Math.abs(p.price - viewedProduct.price);
    if (priceDiff <= viewedProduct.price * 0.2) score += 20;

    // Higher rating
    if (p.rating >= viewedProduct.rating) score += 15;

    // In stock bonus
    if (p.inStock) score += 10;

    // Featured bonus
    if (p.isFeatured) score += 5;

    if (score > 0) {
      recommendations.push({ product: p, score });
    }
  });

  // Sort by score and return top 4
  return recommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(r => r.product);
}

// Natural language product search with scoring
export function intelligentSearch(query: string): Product[] {
  if (!query.trim()) return [];

  const lowercaseQuery = query.toLowerCase();
  const queryWords = lowercaseQuery.split(/\s+/);

  const results: { product: Product; score: number }[] = [];

  products.forEach(product => {
    let score = 0;
    const productText = `${product.name} ${product.description} ${product.category}`.toLowerCase();

    // Exact name match - highest priority
    if (product.name.toLowerCase() === lowercaseQuery) {
      score += 100;
    }

    // Name contains query
    if (product.name.toLowerCase().includes(lowercaseQuery)) {
      score += 50;
    }

    // Word matching
    queryWords.forEach(word => {
      if (product.name.toLowerCase().includes(word)) score += 15;
      if (product.description.toLowerCase().includes(word)) score += 10;
      if (product.category.toLowerCase().includes(word)) score += 8;
      if (Object.values(product.specs).some(v => v.toLowerCase().includes(word))) score += 5;
    });

    // Specs matching
    Object.values(product.specs).forEach(spec => {
      if (spec.toLowerCase().includes(lowercaseQuery)) score += 20;
    });

    // In stock bonus
    if (product.inStock) score += 3;

    if (score > 0) {
      results.push({ product, score });
    }
  });

  return results
    .sort((a, b) => b.score - a.score)
    .map(r => r.product);
}

// AI comparison suggestions based on specs
export function getComparisonSuggestions(productId: string): Product[] {
  const product = products.find(p => p.id === productId);
  if (!product) return [];

  const suggestions: { product: Product; similarity: number }[] = [];

  products.forEach(p => {
    if (p.id === productId || p.category !== product.category) return;

    let similarity = 0;
    let matchCount = 0;

    // Compare specs
    Object.keys(product.specs).forEach(key => {
      if (key in p.specs) {
        matchCount++;
        // Similar spec values get bonus
        if (
          product.specs[key].toLowerCase().includes(p.specs[key].toLowerCase()) ||
          p.specs[key].toLowerCase().includes(product.specs[key].toLowerCase())
        ) {
          similarity += 10;
        }
      }
    });

    similarity += matchCount * 5;

    if (similarity > 0) {
      suggestions.push({ product: p, similarity });
    }
  });

  return suggestions
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 3)
    .map(s => s.product);
}

// Trend analysis - popular products
export function getTrendingProducts(category?: string): Product[] {
  let filtered = category
    ? products.filter(p => p.category === category)
    : products;

  return filtered
    .sort((a, b) => {
      // Rating and reviews indicate popularity
      const aScore = a.rating * Math.log(a.reviews + 1);
      const bScore = b.rating * Math.log(b.reviews + 1);
      return bScore - aScore;
    })
    .slice(0, 4);
}

// Smart filtering suggestions based on user query
export function getFilterSuggestions(query: string): {
  category?: string;
  priceRange?: { min: number; max: number };
} {
  const suggestions: any = {};
  const lowercaseQuery = query.toLowerCase();

  // Category detection
  const categoryKeywords: Record<string, string> = {
    laptop: 'laptops',
    computer: 'laptops',
    phone: 'smartphones',
    mobile: 'smartphones',
    tablet: 'tablets',
    pad: 'tablets',
    watch: 'wearables',
    band: 'wearables',
    earbuds: 'accessories',
    headphones: 'accessories',
  };

  for (const [keyword, category] of Object.entries(categoryKeywords)) {
    if (lowercaseQuery.includes(keyword)) {
      suggestions.category = category;
      break;
    }
  }

  // Price range detection
  const pricePatterns = [
    { regex: /under\s*[$₹]?([\d,]+)/i, max: 1 },
    { regex: /under\s*([\d,]+)/i, max: 1 },
    { regex: /less\s*than\s*[$₹]?([\d,]+)/i, max: 1 },
    { regex: /[$₹]?([\d,]+)\s*[-–]\s*[$₹]?([\d,]+)/i, range: 1 },
  ];

  for (const pattern of pricePatterns) {
    const match = lowercaseQuery.match(pattern.regex);
    if (match) {
      if ('max' in pattern) {
        suggestions.priceRange = { min: 0, max: parseInt(match[1].replace(/,/g, '')) };
      } else if ('range' in pattern) {
        suggestions.priceRange = {
          min: parseInt(match[1].replace(/,/g, '')),
          max: parseInt(match[2].replace(/,/g, '')),
        };
      }
      break;
    }
  }

  return suggestions;
}

// Get products by performance metrics
export function getProductsByPerformance(type: 'best-rated' | 'most-reviewed' | 'best-value'): Product[] {
  const sorted = [...products].sort((a, b) => {
    switch (type) {
      case 'best-rated':
        return b.rating - a.rating;
      case 'most-reviewed':
        return b.reviews - a.reviews;
      case 'best-value':
        // Price-to-rating ratio
        const aValue = a.rating / (a.price / 100);
        const bValue = b.rating / (b.price / 100);
        return bValue - aValue;
      default:
        return 0;
    }
  });

  return sorted.slice(0, 6);
}
