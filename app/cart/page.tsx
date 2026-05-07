'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider, useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

function CartContent() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Discover our amazing products and add them to your cart.
            </p>
            <Link href="/products">
              <Button size="lg">
                Start Shopping
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            You have {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-4 flex gap-4 sm:gap-6"
              >
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <Link href={`/products/${item.id}`} className="hover:text-primary transition-colors">
                      <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    </Link>
                    <p className="text-lg font-bold text-primary">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls and Remove */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-secondary/10 rounded-lg transition-colors"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-secondary/10 rounded-lg transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-20">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
                <div className="space-y-3">
                  {/* Subtotal */}
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>

                  {/* Tax */}
                  <div className="flex justify-between text-foreground">
                    <span>Estimated Tax</span>
                    <span>${(totalPrice * 0.08).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-2" />

                  {/* Total */}
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">
                      ${(totalPrice * 1.08).toLocaleString('en-US', { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              {/* Continue Shopping */}
              <Link href="/products">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-destructive hover:text-destructive/80 transition-colors font-medium"
              >
                Clear Cart
              </button>

              {/* Trust Info */}
              <div className="pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
                <p>✓ Secure checkout with SSL encryption</p>
                <p>✓ 30-day money-back guarantee</p>
                <p>✓ Free shipping on orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <Header />
      <CartContent />
      <Footer />
    </CartProvider>
  );
}
