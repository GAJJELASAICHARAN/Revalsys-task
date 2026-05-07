'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <CartProvider>
      <Header />
      <main className="min-h-screen bg-background flex flex-col">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 px-4 border-b border-border">
          <div className="container mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              About TechHub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted destination for premium electronics with AI-powered shopping intelligence
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TechHub, we believe everyone deserves access to the latest technology at fair prices. Our mission is to make tech shopping effortless by combining curated product selection with intelligent AI recommendations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re committed to providing exceptional customer service, transparent pricing, and a seamless shopping experience whether you&apos;re a tech enthusiast or casual buyer.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-6xl font-bold text-primary">2M+</p>
                <p className="text-lg text-foreground">Happy Customers Worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 px-4 bg-secondary/5 border-y border-border">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose TechHub
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-primary" />,
                  title: 'Curated Selection',
                  description: 'Hand-picked products from trusted brands',
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary" />,
                  title: 'Quality Guaranteed',
                  description: '30-day money-back guarantee on all purchases',
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: 'Expert Support',
                  description: '24/7 customer support from tech enthusiasts',
                },
                {
                  icon: <Globe className="w-8 h-8 text-primary" />,
                  title: 'Fast Shipping',
                  description: 'Free worldwide shipping on orders over $50',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all space-y-3"
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 px-4">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Products' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '10M+', label: 'Annual Visitors' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <p className="text-5xl font-bold text-primary">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-4 border-t border-border">
          <div className="container mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to explore?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Discover our latest collection of premium electronics and find your perfect tech.
            </p>
            <Link href="/products">
              <Button size="lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </CartProvider>
  );
}
