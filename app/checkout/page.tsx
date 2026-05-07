'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const placeOrder = useMutation(api.orders.placeOrder);

  const [form, setForm] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  });
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Redirect guests to login
  useEffect(() => {
    if (!authLoading && (!user || user.isGuest)) {
      router.replace('/login?redirect=/checkout');
    }
  }, [user, authLoading, router]);

  // Pre-fill name from user
  useEffect(() => {
    if (user && !user.isGuest) {
      setForm(f => ({ ...f, name: f.name || user.name }));
    }
  }, [user]);

  const tax = totalPrice * 0.08;
  const total = totalPrice + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    setError('');
    try {
      const id = await placeOrder({
        items: items.map(({ productId, name, price, quantity, image }) => ({
          productId, name, price, quantity, image,
        })),
        shippingAddress: form,
      });
      clearCart();
      setOrderId(id as string);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    'w-full px-3 py-2 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30 text-[#0f1111]';

  // Success state
  if (orderId) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4">
          <div className="bg-white border border-[#ddd] rounded p-10 max-w-md w-full text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold text-[#0f1111]">Order placed!</h1>
            <p className="text-[#565959]">
              Your order <strong>#{orderId.slice(-8).toUpperCase()}</strong> has been received and is being processed.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/account">
                <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] border border-[#FCD200]">
                  View Your Orders
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full border-[#ddd]">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (authLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading…</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <div className="bg-[#131921] px-4 py-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-white">Checkout</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout form */}
            <div className="lg:col-span-2 space-y-5">
              {/* Shipping address */}
              <div className="bg-white border border-[#ddd] rounded p-6">
                <h2 className="text-lg font-bold text-[#0f1111] mb-5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF9900] text-white text-xs font-bold mr-2">1</span>
                  Shipping address
                </h2>
                <form id="checkout-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#0f1111] mb-1">Full name</label>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={field} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0f1111] mb-1">Street address</label>
                      <input required value={form.street} onChange={e => setForm(f => ({ ...f, street: e.target.value }))} className={field} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-bold text-[#0f1111] mb-1">City</label>
                        <input required value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className={field} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0f1111] mb-1">State</label>
                        <input required value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} className={field} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-bold text-[#0f1111] mb-1">ZIP code</label>
                        <input required value={form.zip} onChange={e => setForm(f => ({ ...f, zip: e.target.value }))} className={field} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0f1111] mb-1">Country</label>
                        <input required value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))} className={field} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Payment (mock) */}
              <div className="bg-white border border-[#ddd] rounded p-6">
                <h2 className="text-lg font-bold text-[#0f1111] mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF9900] text-white text-xs font-bold mr-2">2</span>
                  Payment method
                </h2>
                <div className="flex items-center gap-3 p-3 border border-[#ddd] rounded bg-[#f7f7f7]">
                  <Shield className="w-5 h-5 text-[#565959]" />
                  <div>
                    <p className="text-sm font-medium text-[#0f1111]">Demo mode — no real payment</p>
                    <p className="text-xs text-[#565959]">Order will be placed and visible in Your Orders.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#ddd] rounded p-5 sticky top-20 space-y-4">
                <Button
                  type="submit"
                  form="checkout-form"
                  disabled={submitting || items.length === 0}
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200] rounded-sm"
                >
                  {submitting ? 'Placing order…' : 'Place your order'}
                </Button>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                    {error}
                  </p>
                )}

                <p className="text-xs text-[#565959]">
                  By placing your order, you agree to TechHub&apos;s{' '}
                  <span className="text-[#0066c0]">privacy notice</span> and{' '}
                  <span className="text-[#0066c0]">conditions of use</span>.
                </p>

                <div className="border-t border-[#e7e7e7] pt-4 space-y-2 text-sm">
                  <h3 className="font-bold text-[#0f1111]">Order Summary</h3>
                  <div className="flex justify-between text-[#565959]">
                    <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#565959]">
                    <span>Shipping</span>
                    <span className="text-[#007600]">FREE</span>
                  </div>
                  <div className="flex justify-between text-[#565959]">
                    <span>Estimated tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#cc0c39] text-lg border-t border-[#e7e7e7] pt-2">
                    <span>Order total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Items preview */}
                <div className="border-t border-[#e7e7e7] pt-4 space-y-3">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-2 items-center">
                      <div className="relative w-12 h-12 bg-[#f7f7f7] rounded flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#0f1111] line-clamp-1">{item.name}</p>
                        <p className="text-xs text-[#565959]">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-xs font-semibold flex-shrink-0">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#e7e7e7] pt-3 flex items-center gap-2 text-xs text-[#565959]">
                  <Truck className="w-3.5 h-3.5" />
                  Free shipping on this order
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
