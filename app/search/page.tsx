import type { Metadata } from 'next';
import SearchPageClient from './search-client';

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Search TechHub products with smart suggestions and filters. Find laptops, smartphones, tablets, wearables and accessories faster.',
};

export default function SearchPage() {
  return <SearchPageClient />;
}
