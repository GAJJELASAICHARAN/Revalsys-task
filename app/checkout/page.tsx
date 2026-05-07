import type { Metadata } from 'next';
import CheckoutPageClient from './checkout-client';

export const metadata: Metadata = {
  title: 'Checkout',
  description:
    'Secure checkout at TechHub. Enter your shipping address and place your order in demo mode with fast shipping and easy returns.',
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
