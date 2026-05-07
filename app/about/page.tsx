import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TechHub — our mission to make premium electronics accessible to everyone with AI-powered recommendations, fair prices, and exceptional customer service.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        {/* Hero */}
        <div className="bg-[#131921] py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About TechHub</h1>
            <p className="text-[#ccc] text-lg max-w-2xl mx-auto">
              Your trusted destination for premium electronics with AI-powered shopping intelligence
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-[#0f1111]">Our Mission</h2>
              <p className="text-[#565959] leading-relaxed">
                At TechHub, we believe everyone deserves access to the latest technology at fair prices. Our mission is to make tech shopping effortless by combining curated product selection with intelligent AI recommendations.
              </p>
              <p className="text-[#565959] leading-relaxed">
                We&apos;re committed to providing exceptional customer service, transparent pricing, and a seamless shopping experience whether you&apos;re a tech enthusiast or casual buyer.
              </p>
              <Link href="/contact">
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] border border-[#FCD200]">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#131921] to-[#232F3E] rounded-lg p-10 flex flex-col items-center justify-center gap-4 min-h-[260px]">
              <p className="text-5xl font-bold text-[#FF9900]">2M+</p>
              <p className="text-white text-lg text-center">Happy Customers Worldwide</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 px-4 bg-[#f3f3f3]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[#0f1111] text-center mb-10">Why Choose TechHub</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Award, title: 'Curated Selection', desc: 'Hand-picked products from trusted global brands' },
                { icon: CheckCircle, title: 'Quality Guaranteed', desc: '30-day money-back guarantee on all purchases' },
                { icon: Users, title: 'Expert Support', desc: '24/7 customer support from tech enthusiasts' },
                { icon: Globe, title: 'Fast Shipping', desc: 'Free worldwide shipping on orders over ₹4,000' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-[#ddd] rounded p-5 hover:border-[#FF9900] transition-colors">
                  <div className="p-2.5 rounded bg-[#FF9900]/10 w-fit mb-3">
                    <Icon className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <h3 className="font-semibold text-[#0f1111] mb-1">{title}</h3>
                  <p className="text-sm text-[#565959]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Products' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '10M+', label: 'Annual Visitors' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p className="text-5xl font-bold text-[#FF9900] mb-2">{number}</p>
                <p className="text-[#565959]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-[#131921]">
          <div className="container mx-auto text-center space-y-5">
            <h2 className="text-3xl font-bold text-white">Ready to explore?</h2>
            <p className="text-[#ccc] max-w-xl mx-auto">
              Discover our latest collection of premium electronics and find your perfect tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] border border-[#FCD200]">
                  Shop Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
