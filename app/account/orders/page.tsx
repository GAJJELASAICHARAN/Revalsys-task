'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  returned: 'bg-gray-200 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function OrdersPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const [view, setView] = useState<'all' | 'returned'>('all');
  const allOrders = useQuery(api.orders.getUserOrders);
  const returnedOrders = useQuery(api.orders.getUserReturnedOrders);
  const returnOrder = useMutation(api.orders.returnOrder);

  const orders = useMemo(() => {
    if (view === 'returned') return returnedOrders;
    return allOrders;
  }, [view, allOrders, returnedOrders]);

  useEffect(() => {
    if (!isLoading && !user) router.replace('/login?redirect=/account/orders');
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading orders…</div>
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
          <h1 className="text-2xl font-bold text-[#0f1111] mb-4">Your Orders</h1>
          {user.isGuest ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
              <p className="font-semibold text-[#0f1111] mb-1">Sign in to view your orders</p>
              <p className="text-sm text-[#565959] mb-4">
                Orders are saved to your account.
              </p>
              <Link
                href={`/login?redirect=/account/orders`}
                className="text-sm text-[#0066c0] hover:underline"
              >
                Go to login →
              </Link>
            </div>
          ) : orders === undefined ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center text-[#565959] animate-pulse">
              Loading orders…
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white border border-[#ddd] rounded p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-[#aaa] mx-auto mb-3" />
              <p className="font-semibold text-[#0f1111] mb-1">
                {view === 'returned' ? 'No returned orders' : 'No orders yet'}
              </p>
              <p className="text-sm text-[#565959] mb-4">
                {view === 'returned'
                  ? 'Returned orders will appear here.'
                  : 'When you place an order, it will appear here.'}
              </p>
              {view === 'returned' ? (
                <button
                  onClick={() => setView('all')}
                  className="text-sm text-[#0066c0] hover:underline"
                >
                  View all orders →
                </button>
              ) : (
                <Link href="/products" className="text-sm text-[#0066c0] hover:underline">
                  Start shopping →
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setView('all')}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    view === 'all'
                      ? 'bg-[#232f3e] text-white border-[#232f3e]'
                      : 'bg-white text-[#0f1111] border-[#ddd]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setView('returned')}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    view === 'returned'
                      ? 'bg-[#232f3e] text-white border-[#232f3e]'
                      : 'bg-white text-[#0f1111] border-[#ddd]'
                  }`}
                >
                  Returned
                </button>
              </div>

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
                      {order.status === 'returned' && order.returnedAt ? (
                        <div>
                          <span className="font-bold uppercase">Returned</span>
                          <p className="text-[#0f1111] font-medium">
                            {new Date(order.returnedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-3">
                      {order.status === 'shipped' || order.status === 'delivered' ? (
                        <button
                          onClick={async () => {
                            await returnOrder({ orderId: order._id });
                            setView('returned');
                          }}
                          className="text-xs px-3 py-1.5 rounded bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] border border-[#fcd200]"
                        >
                          Return
                        </button>
                      ) : null}
                      <p className="text-xs text-[#565959]">
                        Order #{" "}
                        <span className="text-[#0066c0]">
                          {order._id.slice(-8).toUpperCase()}
                        </span>
                      </p>
                    </div>
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
                    <span>
                      Subtotal ₹{order.subtotal.toFixed(2)} · Tax ₹{order.tax.toFixed(2)}
                    </span>
                    <span className="font-bold text-[#0f1111]">Total ₹{order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

