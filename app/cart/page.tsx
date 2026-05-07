'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, ShoppingBag, Shield, Truck, RotateCcw } from 'lucide-react';

function CartContent() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-5">
          <ShoppingBag className="w-16 h-16 text-[#aaa] mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-[#0f1111] mb-2">Your TechHub Cart is empty</h1>
            <p className="text-[#565959] mb-6">
              Your shopping cart lives here. Add items and they&apos;ll show up here.
            </p>
            <Link href="/products">
              <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200]">
                Shop today&apos;s deals
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-normal text-[#0f1111] mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white border border-[#ddd] rounded p-4 flex gap-4">
              {/* Image */}
              <Link href={`/products/${item.id}`} className="flex-shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-[#f7f7f7] rounded">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                    crossOrigin="anonymous"
                  />
                </div>
              </Link>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.id}`}>
                  <h3 className="font-medium text-[#0f1111] hover:text-[#c45500] line-clamp-2 mb-1">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#007600] mb-2">In Stock</p>
                <p className="text-xl font-semibold text-[#0f1111] mb-3">
                  ${item.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {/* Quantity */}
                  <div className="flex items-center border border-[#ddd] rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1.5 text-sm hover:bg-[#f0f2f2] transition-colors border-r border-[#ddd]"
                    >
                      −
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold text-[#0f1111]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1.5 text-sm hover:bg-[#f0f2f2] transition-colors border-l border-[#ddd]"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[#ddd]">|</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                  <button className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline">
                    Save for later
                  </button>
                </div>
              </div>

              {/* Line total */}
              <div className="hidden sm:block flex-shrink-0 text-right">
                <p className="font-bold text-[#0f1111]">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          {/* Subtotal at bottom of list */}
          <div className="text-right pr-4">
            <span className="text-lg text-[#0f1111]">
              Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items):{' '}
              <strong>${totalPrice.toLocaleString()}</strong>
            </span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-[#ddd] rounded p-5 sticky top-20 space-y-4">
            {/* Free delivery */}
            <div className="text-sm text-[#007600] font-semibold">
              ✓ Your order qualifies for FREE delivery.
            </div>

            <div className="border-t border-[#e7e7e7] pt-4">
              <p className="text-lg text-[#0f1111] mb-1">
                Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items):{' '}
                <strong>${totalPrice.toLocaleString()}</strong>
              </p>
              <p className="text-xs text-[#565959] mb-4">
                Estimated tax: ${(totalPrice * 0.08).toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </p>
              <Link href="/checkout" className="block">
                <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200] rounded-sm">
                  Proceed to checkout
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="border-t border-[#e7e7e7] pt-4 space-y-2 text-xs text-[#565959]">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#565959]" />
                Secure checkout with SSL
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#565959]" />
                Free shipping on orders over $50
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-[#565959]" />
                30-day return guarantee
              </div>
            </div>

            <button
              onClick={clearCart}
              className="w-full text-xs text-[#cc0c39] hover:underline"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <CartContent />
      </main>
      <Footer />
    </>
  );
}
