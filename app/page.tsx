import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import FeaturedProducts from '@/components/featured-products';
import Categories from '@/components/categories';
import AIRecommendations from '@/components/ai-recommendations';
import Footer from '@/components/footer';
import { CartProvider } from '@/lib/cart-context';

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
        <HeroSection />
        <FeaturedProducts />
        <AIRecommendations />
        <Categories />
      </main>
      <Footer />
    </CartProvider>
  );
}
