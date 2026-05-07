'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider, useCart } from '@/lib/cart-context';
import { getProductById, products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProductRecommendations from '@/components/product-recommendations';

function ProductDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-card/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground">
                Products
              </Link>
              <span>/</span>
              <Link href={`/products?category=${product.category}`} className="hover:text-foreground capitalize">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Image */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl bg-muted h-96 sm:h-[500px] border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-lg bg-muted h-20 border border-border cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Category */}
              <div className="inline-flex">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full capitalize">
                  {product.category}
                </span>
              </div>

              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <p className="text-4xl font-bold text-foreground">
                  ${product.price.toLocaleString()}
                </p>
                {product.inStock ? (
                  <p className="text-sm text-green-600 font-medium">In Stock</p>
                ) : (
                  <p className="text-sm text-destructive font-medium">Out of Stock</p>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="border-t border-b border-border py-6">
                <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary/10 rounded-lg transition-colors"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary/10 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isAdded}
                  className="flex-1"
                >
                  {isAdded ? (
                    'Added to Cart ✓'
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="px-6"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-destructive text-destructive' : ''
                    }`}
                  />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-secondary/5 border border-border">
                <div className="text-center space-y-2">
                  <Truck className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-medium text-foreground">Free Shipping</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-medium text-foreground">Secure Payment</p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-medium text-foreground">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <ProductRecommendations products={relatedProducts} title="Related Products" />
          )}
        </div>
      </div>
    </>
  );
}

export default function ProductDetailPage() {
  return (
    <CartProvider>
      <Header />
      <ProductDetailContent />
      <Footer />
    </CartProvider>
  );
}
