'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { getProductById, type Product } from '@/lib/products';

export default function WishlistPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const wishlistItems = useQuery(api.wishlist.getItems);
  const wishlistProducts = (wishlistItems ?? [])
    .map((item: any) => getProductById(item.productId))
    .filter((p): p is Product => Boolean(p));

  useEffect(() => {
    if (!isLoading && !user) router.replace('/login?redirect=/account/wishlist');
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading wishlist…</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-[#0f1111] mb-4">Your Wishlist</h1>
          {user.isGuest ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center">
              <Heart className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
              <p className="font-semibold text-[#0f1111] mb-1">Sign in to see your saved wishlist</p>
              <p className="text-sm text-[#565959] mb-4">
                Guest wishlist is stored only for the current session.
              </p>
              <Link
                href={`/login?redirect=/account/wishlist`}
                className="text-sm text-[#0066c0] hover:underline"
              >
                Go to login →
              </Link>
            </div>
          ) : wishlistItems === undefined ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center text-[#565959] animate-pulse">
              Loading wishlist…
            </div>
          ) : wishlistProducts.length === 0 ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
              <p className="font-semibold text-[#0f1111] mb-1">No items in wishlist</p>
              <p className="text-sm text-[#565959] mb-4">
                Tap the heart on a product to save it for later.
              </p>
              <Link href="/products" className="text-sm text-[#0066c0] hover:underline">
                Browse products →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistProducts.map(product => (
                <ProductCard key={product.id} product={product} removeFromWishlistOnAdd />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

