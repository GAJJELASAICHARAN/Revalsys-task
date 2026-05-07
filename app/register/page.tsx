import type { Metadata } from 'next';
import RegisterPageClient from './register-client';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create your TechHub account to save your cart, wishlist, and orders across devices.',
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
