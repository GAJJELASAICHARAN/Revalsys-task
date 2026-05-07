import type { Metadata } from 'next';
import LoginPageClient from './login-client';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your TechHub account or continue as a guest to start shopping.',
};

export default function LoginPage() {
  return <LoginPageClient />;
}
