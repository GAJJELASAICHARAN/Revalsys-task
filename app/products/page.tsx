import type { Metadata } from 'next';
import ProductsPageClient from './products-client';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse TechHub electronics by category, price, and rating. Search and filter laptops, smartphones, tablets, wearables and accessories.',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
