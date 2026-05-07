import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import FeaturedProducts from '@/components/featured-products';
import Categories from '@/components/categories';
import AIRecommendations from '@/components/ai-recommendations';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'TechHub — Shop Electronics, Laptops, Phones & More',
  description: 'Shop premium electronics at TechHub. Discover laptops, smartphones, tablets, wearables and accessories with AI-powered recommendations, fast free shipping, and 30-day returns.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <HeroSection />
        <div className="bg-white">
          <FeaturedProducts />
          <AIRecommendations />
          <Categories />
        </div>
      </main>
      <Footer />
    </>
  );
}
