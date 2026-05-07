'use client';

import { Product, products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useConvexAuth, useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import ProductRecommendations from '@/components/product-recommendations';

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-[#FF9900] text-white',
  Deal: 'bg-red-600 text-white',
  New: 'bg-[#007600] text-white',
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [localWish, setLocalWish] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { isAuthenticated } = useConvexAuth();
  const isWishlistedConvex = useQuery(
    api.wishlist.isWishlisted,
    isAuthenticated ? { productId: product.id } : 'skip'
  );
  const toggleWishlist = useMutation(api.wishlist.toggle);

  const isWishlisted = isAuthenticated ? !!isWishlistedConvex : localWish;

  const handleWishlist = async () => {
    if (isAuthenticated) {
      await toggleWishlist({ productId: product.id });
    } else {
      setLocalWish(w => !w);
    }
  };

  const handleAddToCart = () => {
    addItem({ productId: product.id, name: product.name, price: product.price, quantity, image: product.image });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#ddd] px-4 py-2">
        <div className="container mx-auto flex items-center gap-1 text-xs text-[#565959] flex-wrap">
          <Link href="/" className="hover:text-[#c45500] hover:underline">TechHub</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#c45500] hover:underline capitalize">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0f1111] truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white border border-[#ddd] rounded p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="flex flex-col gap-3">
              <div className="relative overflow-hidden rounded bg-[#f7f7f7] h-80 sm:h-[420px] border border-[#e7e7e7]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  crossOrigin="anonymous"
                  priority
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded ${badgeColors[product.badge] ?? 'bg-gray-600 text-white'}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className="relative h-20 bg-[#f7f7f7] border border-[#e7e7e7] rounded cursor-pointer hover:border-[#FF9900] transition-colors overflow-hidden">
                    <Image src={product.image} alt={`${product.name} ${i + 1}`} fill className="object-contain p-2" crossOrigin="anonymous" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {/* Category */}
              <p className="text-xs text-[#565959] capitalize">
                <Link href={`/products?category=${product.category}`} className="text-[#0066c0] hover:underline">
                  {product.category}
                </Link>
              </p>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl font-medium text-[#0f1111] leading-snug">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#FF9900] text-[#FF9900]' : 'fill-[#ddd] text-[#ddd]'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#0066c0] hover:text-[#c45500] cursor-pointer">
                  {product.rating} ({product.reviews.toLocaleString()} ratings)
                </span>
              </div>

              <div className="border-t border-[#e7e7e7]" />

              {/* Price */}
              <div>
                {discount && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">-{discount}%</span>
                    <span className="text-xs text-[#565959]">Limited-time deal</span>
                  </div>
                )}
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl font-semibold text-[#cc0c39]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#565959]">
                      List: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </span>
                  )}
                </div>
                {product.inStock ? (
                  <p className="text-sm text-[#007600] font-semibold mt-1">In Stock</p>
                ) : (
                  <p className="text-sm text-[#cc0c39] font-semibold mt-1">Currently unavailable</p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#565959] leading-relaxed">{product.description}</p>

              {/* Specs */}
              <div className="border-t border-[#e7e7e7] pt-4">
                <h2 className="text-sm font-bold text-[#0f1111] mb-3">Technical Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex gap-2 text-sm">
                      <span className="text-[#565959] capitalize w-24 flex-shrink-0">{key}</span>
                      <span className="text-[#0f1111] font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#e7e7e7]" />

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-[#0f1111]">Qty:</label>
                <div className="flex items-center border border-[#ddd] rounded">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1.5 text-sm hover:bg-[#f0f2f2] border-r border-[#ddd] disabled:opacity-40" disabled={quantity <= 1}>−</button>
                  <span className="px-4 text-sm font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1.5 text-sm hover:bg-[#f0f2f2] border-l border-[#ddd]">+</button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isAdded}
                  className="flex-1 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200] rounded-sm"
                >
                  {isAdded ? '✓ Added to Cart' : <><ShoppingCart className="w-4 h-4 mr-2" />Add to Cart</>}
                </Button>
                <Button
                  size="lg"
                  disabled={!product.inStock}
                  className="flex-1 bg-[#FF9900] hover:bg-[#e88c00] text-white border border-[#e88c00] rounded-sm"
                >
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" onClick={handleWishlist} className="px-4 border-[#ddd]">
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#cc0c39] text-[#cc0c39]' : 'text-[#565959]'}`} />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded border border-[#e7e7e7] bg-[#f7f7f7]">
                <div className="text-center">
                  <Truck className="w-5 h-5 text-[#565959] mx-auto mb-1" />
                  <p className="text-[10px] text-[#565959]">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-[#565959] mx-auto mb-1" />
                  <p className="text-[10px] text-[#565959]">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 text-[#565959] mx-auto mb-1" />
                  <p className="text-[10px] text-[#565959]">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <ProductRecommendations products={relatedProducts} title="Customers also viewed" />
          </div>
        )}
      </div>
    </>
  );
}
