'use client';

import { useState } from 'react';
import ProductCard from '@/components/product-card';
import { getProductsByPerformance, getTrendingProducts } from '@/lib/ai-utils';
import { Sparkles, TrendingUp, Award, Heart } from 'lucide-react';

type RecommendationType = 'trending' | 'best-rated' | 'best-value';

export default function AIRecommendations() {
  const [activeType, setActiveType] = useState<RecommendationType>('trending');

  const recommendations = {
    trending: getTrendingProducts(),
    'best-rated': getProductsByPerformance('best-rated'),
    'best-value': getProductsByPerformance('best-value'),
  };

  const icons = {
    trending: <TrendingUp className="w-5 h-5" />,
    'best-rated': <Award className="w-5 h-5" />,
    'best-value': <Heart className="w-5 h-5" />,
  };

  const labels = {
    trending: 'Trending Now',
    'best-rated': 'Best Rated',
    'best-value': 'Best Value',
  };

  return (
    <section className="py-8 px-4 border-b border-[#e7e7e7]">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
            <span className="text-xs font-semibold text-[#FF9900]">AI-Powered</span>
          </div>
          <h2 className="text-xl font-bold text-[#0f1111]">Smart Recommendations</h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(Object.keys(labels) as RecommendationType[]).map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-sm border transition-colors ${
                activeType === type
                  ? 'bg-[#232F3E] text-white border-[#232F3E]'
                  : 'bg-white border-[#ddd] text-[#0f1111] hover:border-[#FF9900]'
              }`}
            >
              {icons[type]}
              {labels[type]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations[activeType].map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
