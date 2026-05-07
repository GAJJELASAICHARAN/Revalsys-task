import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getProductById } from '@/lib/products';
import ProductDetailClient from './product-detail-client';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return {
    title: product.name,
    description: `${product.description}. ${discount ? `Save ${discount}% — now ₹${product.price.toLocaleString()}.` : `₹${product.price.toLocaleString()}.`} Free shipping. 30-day returns. Shop at TechHub.`,
    openGraph: {
      title: `${product.name} | TechHub`,
      description: product.description,
      images: [{ url: product.image, width: 400, height: 400, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </>
  );
}
