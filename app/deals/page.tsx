import type { Metadata } from 'next';
import DealsPageClient from './deals-client';

export const metadata: Metadata = {
  title: "Today's Deals",
  description:
    'Save on top TechHub electronics with limited-time deals on laptops, smartphones, tablets, wearables and accessories.',
};

export default function DealsPage() {
  return <DealsPageClient />;
}
