import Link from 'next/link';
import { Package, Smartphone, Zap, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-bold text-lg">TechHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium electronics with AI-powered shopping intelligence.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Package className="w-4 h-4" />
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=laptops" className="text-muted-foreground hover:text-foreground transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/products?category=smartphones" className="text-muted-foreground hover:text-foreground transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products?category=tablets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tablets
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=wearables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wearables
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p>&copy; 2024 TechHub. All rights reserved.</p>
            </div>
            <div className="flex items-center justify-start sm:justify-end gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center pt-4 text-xs text-muted-foreground flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="w-3 h-3 fill-destructive text-destructive" />
          <span>by TechHub</span>
        </div>
      </div>
    </footer>
  );
}
