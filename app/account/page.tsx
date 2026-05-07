'use client';

import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package, ShoppingBag, User, Heart, LogOut, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { getProductById, type Product } from '@/lib/products';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function AccountPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const orders = useQuery(api.orders.getUserOrders);
  const wishlistItems = useQuery(api.wishlist.getItems);
  const wishlistProducts = (wishlistItems ?? [])
    .map((item: any) => getProductById(item.productId))
    .filter((p): p is Product => Boolean(p));

  const [activeHash, setActiveHash] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    if (!isLoading && !user) router.replace('/login?redirect=/account');
  }, [user, isLoading, router]);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const mode = useMemo(() => {
    if (activeHash === '#wishlist') return 'wishlist';
    if (activeHash === '#orders') return 'orders';
    if (activeHash === '#profile') return 'profile';
    return 'all';
  }, [activeHash]);

  if (isLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading account…</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        {/* Banner */}
        <div className="bg-[#131921] px-4 py-8">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-white">Your Account</h1>
            <p className="text-[#ccc] text-sm mt-1">Hello, {user.name}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Package, label: 'Your Orders', sub: `${orders?.length ?? 0} orders`, href: '/account/orders' },
              { icon: Heart, label: 'Your Wishlist', sub: `${wishlistItems?.length ?? 0} items`, href: '/account/wishlist' },
              { icon: User, label: 'Account Details', sub: user.email || 'Manage profile', href: '/account/profile' },
              { icon: ShoppingBag, label: 'Continue Shopping', sub: 'Browse products', href: '/products' },
            ].map(({ icon: Icon, label, sub, href }) => (
              <Link key={label} href={href}>
                <div className="bg-white border border-[#ddd] rounded p-4 hover:border-[#FF9900] hover:shadow-sm transition-all text-center cursor-pointer">
                  <Icon className="w-8 h-8 text-[#FF9900] mx-auto mb-2" />
                  <p className="font-semibold text-sm text-[#0f1111]">{label}</p>
                  <p className="text-xs text-[#565959] mt-0.5">{sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {(mode === 'all' || mode === 'orders') && (
            <>
              {/* Orders */}
              <section id="orders" className="mb-10">
                <h2 className="text-xl font-bold text-[#0f1111] mb-4">Your Orders</h2>
                {orders === undefined ? (
                  <div className="bg-white border border-[#ddd] rounded p-8 text-center text-[#565959] animate-pulse">
                    Loading orders…
                  </div>
                ) : orders.length === 0 ? (
                  <div className="bg-white border border-[#ddd] rounded p-8 text-center">
                    <ShoppingBag className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
                    <p className="font-semibold text-[#0f1111] mb-1">No orders yet</p>
                    <p className="text-sm text-[#565959] mb-4">
                      When you place an order, it will appear here.
                    </p>
                    <Link href="/products" className="text-sm text-[#0066c0] hover:underline">
                      Start shopping →
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order: any) => (
                      <div key={order._id} className="bg-white border border-[#ddd] rounded overflow-hidden">
                        {/* Order header */}
                        <div className="bg-[#f0f2f2] border-b border-[#ddd] px-5 py-3 flex flex-wrap gap-4 justify-between items-center">
                          <div className="flex flex-wrap gap-6 text-xs text-[#565959]">
                            <div>
                              <span className="font-bold uppercase">Order placed</span>
                              <p className="text-[#0f1111] font-medium">
                                {new Date(order._creationTime).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                            <div>
                              <span className="font-bold uppercase">Total</span>
                              <p className="text-[#0f1111] font-medium">₹{order.total.toFixed(2)}</p>
                            </div>
                            <div>
                              <span className="font-bold uppercase">Status</span>
                              <p>
                                <span
                                  className={`inline-block px-2 py-0.5 rounded text-xs font-semibold capitalize ${STATUS_COLORS[order.status] ?? ''}`}
                                >
                                  {order.status}
                                </span>
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-[#565959]">
                            Order #{' '}
                            <span className="text-[#0066c0]">{order._id.slice(-8).toUpperCase()}</span>
                          </p>
                        </div>

                        {/* Order items */}
                        <div className="divide-y divide-[#e7e7e7]">
                          {order.items.map((item: any, idx: number) => (
                            <div key={idx} className="px-5 py-4 flex gap-4 items-center">
                              <div className="relative w-16 h-16 bg-[#f7f7f7] rounded flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-contain p-1"
                                  crossOrigin="anonymous"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <Link href={`/products/${item.productId}`}>
                                  <p className="text-sm font-medium text-[#0f1111] hover:text-[#c45500] line-clamp-1">
                                    {item.name}
                                  </p>
                                </Link>
                                <p className="text-xs text-[#565959]">
                                  Qty: {item.quantity} · ₹{item.price.toLocaleString()} each
                                </p>
                              </div>
                              <p className="text-sm font-semibold text-[#0f1111] flex-shrink-0">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Order footer */}
                        <div className="px-5 py-3 border-t border-[#ddd] flex justify-between items-center text-sm text-[#565959]">
                          <span>Subtotal ₹{order.subtotal.toFixed(2)} · Tax ₹{order.tax.toFixed(2)}</span>
                          <span className="font-bold text-[#0f1111]">Total ₹{order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

          {/* Wishlist */}
          {(mode === 'all' || mode === 'wishlist') && (
            <section id="wishlist" className="mb-10">
              <h2 className="text-xl font-bold text-[#0f1111] mb-4">Your Wishlist</h2>
              {wishlistItems === undefined ? (
                <div className="bg-white border border-[#ddd] rounded p-8 text-center text-[#565959] animate-pulse">
                  Loading wishlist…
                </div>
              ) : wishlistProducts.length === 0 ? (
                <div className="bg-white border border-[#ddd] rounded p-8 text-center">
                  <Heart className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
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
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Profile */}
          {(mode === 'all' || mode === 'profile') && (
            <section id="profile" className="mb-10">
              <h2 className="text-xl font-bold text-[#0f1111] mb-4">Account Details</h2>
              <div className="bg-white border border-[#ddd] rounded p-6 space-y-4 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FF9900]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#FF9900]">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1111]">{user.name}</p>
                    <p className="text-sm text-[#565959]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => logout().then(() => router.push('/'))}
                  className="flex items-center gap-2 text-sm text-[#cc0c39] hover:underline"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
