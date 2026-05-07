'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-primary/10">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-64 sm:h-56 lg:h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            crossOrigin="anonymous"
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur hover:bg-background rounded-lg transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isWishlisted ? 'fill-destructive text-destructive' : 'text-foreground'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-3 lg:p-4 flex flex-col">
          {/* Category Badge */}
          <div className="inline-flex w-fit">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-2 capitalize">
              {product.category}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Description - Hidden on mobile */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 hidden sm:block">
            {product.description}
          </p>

          {/* Price and Button */}
          <div className="mt-auto space-y-3">
            <p className="text-2xl font-bold text-foreground">
              ${product.price.toLocaleString()}
            </p>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdded}
              className="w-full"
              size="sm"
              variant={isAdded ? 'default' : 'default'}
            >
              {isAdded ? (
                'Added to Cart ✓'
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
