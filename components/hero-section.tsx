import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Shopping</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover the Future of Tech
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Explore our curated collection of premium electronics with AI-powered recommendations tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/deals">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Deals
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">2M+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-[500px] lg:h-[550px]">
            {/* Gradient Background Shapes */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
              <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
            </div>

            {/* Hero Image - Placeholder with gradient */}
            <div className="relative h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl">📱💻</p>
                  <p className="text-sm text-primary-foreground mt-4 font-medium">Premium Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
