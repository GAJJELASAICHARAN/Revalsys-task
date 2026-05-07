import type { Metadata } from 'next';
import CartPageClient from './cart-client';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'Review items in your TechHub cart, update quantities, and proceed to checkout securely with fast shipping and easy returns.',
};

export default function CartPage() {
  return <CartPageClient />;
}
