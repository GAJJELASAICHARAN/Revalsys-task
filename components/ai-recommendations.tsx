'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Smart Recommendations
            </h2>
            <p className="text-muted-foreground">
              Discover products tailored to your interests
            </p>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {(Object.keys(labels) as RecommendationType[]).map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeType === type
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
            >
              {icons[type]}
              {labels[type]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {recommendations[activeType].map(product => (
            <div key={product.id} className="lg:col-span-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
