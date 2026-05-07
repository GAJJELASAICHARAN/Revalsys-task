import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from './contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TechHub support. We\'re available 24/7 via chat, email, or phone. Reach out for orders, returns, or any product questions.',
};

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone Support',
    lines: ['1-800-TECHHUB (1-800-832-4482)', 'Mon – Fri, 8 AM – 10 PM EST'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['support@techhub.com', 'Replies within 24 hours'],
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    lines: ['410 Terry Ave N', 'Seattle, WA 98109, USA'],
  },
  {
    icon: Clock,
    title: 'Live Chat',
    lines: ['Available 24 / 7', 'Average wait time: < 1 min'],
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        {/* Page banner */}
        <div className="bg-[#131921] py-8 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-[#ccc] text-sm sm:text-base max-w-xl mx-auto">
              We&apos;re here to help. Reach out through any channel and our team will get back to you fast.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="bg-white border border-[#ddd] rounded p-5 flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-[#FF9900]/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#FF9900]" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[#0f1111] mb-1">{title}</h2>
                    {lines.map(l => (
                      <p key={l} className="text-sm text-[#565959]">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#ddd] rounded p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[#0f1111] mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* FAQ strip */}
          <div className="mt-10 bg-white border border-[#ddd] rounded p-6">
            <h2 className="text-lg font-semibold text-[#0f1111] mb-4">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { q: 'Where is my order?', a: 'Track your order in My Account → Orders.' },
                { q: 'How do I return an item?', a: 'Start a return from My Account within 30 days.' },
                { q: 'What payment methods do you accept?', a: 'Visa, Mastercard, Amex, PayPal, and more.' },
                { q: 'Is free shipping available?', a: 'Yes — free on all orders over ₹4,000.' },
                { q: 'Can I change my order?', a: 'Contact us within 1 hour of placing the order.' },
                { q: 'How secure is my payment?', a: 'All transactions use 256-bit SSL encryption.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-[#e7e7e7] rounded p-4">
                  <p className="font-semibold text-sm text-[#0f1111] mb-1">{q}</p>
                  <p className="text-sm text-[#565959]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
