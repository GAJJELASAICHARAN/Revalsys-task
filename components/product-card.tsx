'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useConvexAuth, useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-[#FF9900] text-white',
  Deal: 'bg-red-600 text-white',
  New: 'bg-[#007600] text-white',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [localWish, setLocalWish] = useState(false); // guest fallback

  const { isAuthenticated } = useConvexAuth();
  const isWishlisted = useQuery(
    api.wishlist.isWishlisted,
    isAuthenticated ? { productId: product.id } : 'skip'
  );
  const toggleWishlist = useMutation(api.wishlist.toggle);

  const wishlisted = isAuthenticated ? !!isWishlisted : localWish;

  const handleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      await toggleWishlist({ productId: product.id });
    } else {
      setLocalWish(w => !w);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white border border-[#ddd] hover:border-[#FF9900] hover:shadow-md transition-all duration-200 rounded h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#f7f7f7] h-52 sm:h-48 lg:h-52 rounded-t flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            crossOrigin="anonymous"
          />

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="text-[#cc0c39] font-semibold text-sm">Out of Stock</span>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded ${badgeColors[product.badge] ?? 'bg-gray-600 text-white'}`}>
              {product.badge}
            </span>
          )}

          {/* Discount */}
          {discount && (
            <span className="absolute top-2 right-2 text-[10px] font-bold bg-[#cc0c39] text-white px-1.5 py-0.5 rounded">
              -{discount}%
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute bottom-2 right-2 p-1.5 bg-white/90 hover:bg-white rounded-full shadow transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart
              className={`w-4 h-4 ${wishlisted ? 'fill-[#cc0c39] text-[#cc0c39]' : 'text-[#565959]'}`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-3 flex flex-col">
          <h3 className="text-sm text-[#0f1111] line-clamp-2 mb-1 leading-snug group-hover:text-[#c45500] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[#FF9900] text-[#FF9900]'
                      : 'fill-[#ddd] text-[#ddd]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#0066c0]">{product.reviews.toLocaleString()}</span>
          </div>

          {/* Price */}
          <div className="mt-auto space-y-0.5">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg font-semibold text-[#cc0c39]">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#565959] line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.inStock && (
              <p className="text-xs text-[#007600]">FREE delivery available</p>
            )}
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdded}
            className={`mt-3 w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded border transition-colors ${
              isAdded
                ? 'bg-[#e6f0e6] border-[#007600] text-[#007600]'
                : product.inStock
                ? 'bg-[#FFD814] hover:bg-[#F7CA00] border-[#FCD200] text-[#0f1111]'
                : 'bg-[#f7f7f7] border-[#ddd] text-[#aaa] cursor-not-allowed'
            }`}
          >
            {isAdded ? '✓ Added' : <><ShoppingCart className="w-3.5 h-3.5" />Add to Cart</>}
          </button>
        </div>
      </div>
    </Link>
  );
}
