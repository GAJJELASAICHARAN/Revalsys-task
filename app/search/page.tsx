'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { CartProvider } from '@/lib/cart-context';
import { intelligentSearch, getFilterSuggestions } from '@/lib/ai-utils';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    return intelligentSearch(query);
  }, [query]);

  const suggestions = useMemo(() => {
    return getFilterSuggestions(query);
  }, [query]);

  if (!query) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <Sparkles className="w-16 h-16 text-primary mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              AI-Powered Search
            </h1>
            <p className="text-muted-foreground mb-6">
              Enter a natural language query to find exactly what you&apos;re looking for
            </p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">Try searching for:</p>
              <div className="space-y-2">
                <Link href="/search?q=gaming+laptop+under+2000" className="block text-sm text-primary hover:underline">
                  Gaming laptop under $2000
                </Link>
                <Link href="/search?q=best+budget+smartphone" className="block text-sm text-primary hover:underline">
                  Best budget smartphone
                </Link>
                <Link href="/search?q=premium+tablet+for+design" className="block text-sm text-primary hover:underline">
                  Premium tablet for design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Search Results for &quot;{query}&quot;
          </h1>

          {/* AI Suggestions */}
          {(suggestions.category || suggestions.priceRange) && (
            <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20 space-y-2">
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium text-foreground">AI Suggestions:</p>
                  <p className="text-sm text-muted-foreground">
                    {suggestions.category && (
                      <>
                        Searching in <span className="font-semibold">{suggestions.category}</span>
                        {suggestions.priceRange && ` with a budget of $${suggestions.priceRange.min} - $${suggestions.priceRange.max}`}
                      </>
                    )}
                    {!suggestions.category && suggestions.priceRange && (
                      <>Budget range: ${suggestions.priceRange.min} - ${suggestions.priceRange.max}</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <>
            <p className="text-muted-foreground mb-6">
              Found {results.length} product{results.length === 1 ? '' : 's'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg font-semibold text-foreground mb-4">
              No products found matching your search
            </p>
            <p className="text-muted-foreground mb-6 max-w-md">
              Try using different keywords or browse our categories for more options
            </p>
            <Link href="/products">
              <Button>
                Browse All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Searches</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Gaming laptop',
              'Budget smartphone',
              'Premium tablet',
              'Wireless earbuds',
              'Smartwatch',
              'Ultrabook',
            ].map(suggestion => (
              <Link
                key={suggestion}
                href={`/search?q=${encodeURIComponent(suggestion)}`}
                className="px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary text-center transition-colors"
              >
                {suggestion}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <CartProvider>
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <SearchContent />
      </Suspense>
      <Footer />
    </CartProvider>
  );
}
