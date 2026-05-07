'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useConvexAuth, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { ShoppingCart, Search, Menu, X, ChevronDown, MapPin, Heart } from 'lucide-react';

const categories = [
  { label: 'All Electronics', href: '/products' },
  { label: 'Laptops', href: '/products?category=laptops' },
  { label: 'Smartphones', href: '/products?category=smartphones' },
  { label: 'Tablets', href: '/products?category=tablets' },
  { label: 'Wearables', href: '/products?category=wearables' },
  { label: 'Accessories', href: '/products?category=accessories' },
  { label: "Today's Deals", href: '/deals' },
];

export default function Header() {
  const { totalItems } = useCart();
  const { user, logout, isGuest } = useAuth();
  const { isAuthenticated } = useConvexAuth();
  const wishlistItems = useQuery(api.wishlist.getItems, isAuthenticated ? {} : 'skip');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const firstName = user && !user.isGuest ? user.name.split(' ')[0] : null;
  const wishCount = wishlistItems?.length ?? 0;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main nav */}
      <div className="bg-[#131921]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center gap-2 h-[60px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-0.5 border border-transparent hover:border-white rounded px-2 py-1 transition-colors">
              <span className="text-white font-bold text-xl">Tech</span>
              <span className="text-[#FF9900] font-bold text-xl">Hub</span>
            </Link>

            {/* Deliver to */}
            <div className="hidden lg:flex flex-col items-start border border-transparent hover:border-white rounded px-2 py-1 transition-colors flex-shrink-0 cursor-pointer">
              <span className="text-[#ccc] text-[10px] leading-none">Deliver to</span>
              <div className="flex items-center gap-0.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-bold">United States</span>
              </div>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 flex min-w-0">
              <div className="flex w-full rounded overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search TechHub"
                  className="flex-1 h-10 px-3 text-sm text-[#0f1111] bg-white focus:outline-none min-w-0"
                />
                <button type="submit" className="h-10 w-10 sm:w-12 bg-[#FF9900] hover:bg-[#e88c00] flex items-center justify-center flex-shrink-0 transition-colors">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#131921]" />
                </button>
              </div>
            </form>

            {/* Account dropdown */}
            <div
              className="relative hidden sm:block flex-shrink-0"
              ref={userMenuRef}
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <Link
                href={user && !isGuest ? '/account' : '/login'}
                className="flex flex-col items-start border border-transparent hover:border-white rounded px-2 py-1 transition-colors"
              >
                <span className="text-[#ccc] text-[10px] leading-none">
                  {firstName ? `Hello, ${firstName}` : isGuest ? 'Hello, Guest' : 'Hello, sign in'}
                </span>
                <div className="flex items-center gap-0.5">
                  <span className="text-white text-xs font-bold">Account & Lists</span>
                  <ChevronDown className="w-3 h-3 text-white" />
                </div>
              </Link>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-0 w-56 bg-white border border-[#ddd] shadow-xl rounded z-50">
                  <div className="p-4 border-b border-[#e7e7e7]">
                    {user ? (
                      <p className="text-sm font-semibold text-[#0f1111]">
                        {isGuest ? 'Shopping as Guest' : `Hi, ${user.name}`}
                      </p>
                    ) : (
                      <>
                        <Link href="/login">
                          <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] text-sm font-semibold border border-[#FCD200] rounded py-1.5 px-3">
                            Sign in
                          </button>
                        </Link>
                        <p className="text-xs text-[#565959] mt-2 text-center">
                          New customer?{' '}
                          <Link href="/register" className="text-[#0066c0] hover:underline">Start here</Link>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="py-2">
                    <p className="px-4 py-1 text-xs font-bold text-[#0f1111] uppercase">Your Account</p>
                    {isAuthenticated && (
                      <Link href="/account/orders" className="block px-4 py-1.5 text-sm text-[#0f1111] hover:bg-[#f0f2f2]">
                        Your Orders
                      </Link>
                    )}
                    {isAuthenticated && (
                      <Link href="/account/wishlist" className="block px-4 py-1.5 text-sm text-[#0f1111] hover:bg-[#f0f2f2]">
                        Your Wishlist {wishCount > 0 && <span className="ml-1 text-xs text-[#FF9900] font-bold">({wishCount})</span>}
                      </Link>
                    )}
                    <Link href="/contact" className="block px-4 py-1.5 text-sm text-[#0f1111] hover:bg-[#f0f2f2]">
                      Contact Support
                    </Link>
                    {user && (
                      <button
                        onClick={() => { logout(); setShowUserMenu(false); }}
                        className="block w-full text-left px-4 py-1.5 text-sm text-[#cc0c39] hover:bg-[#f0f2f2]"
                      >
                        Sign Out
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Returns & Orders */}
            <Link href={isAuthenticated ? '/account' : '/login'} className="hidden md:flex flex-col items-start border border-transparent hover:border-white rounded px-2 py-1 transition-colors flex-shrink-0">
              <span className="text-[#ccc] text-[10px] leading-none">Returns</span>
              <span className="text-white text-xs font-bold">& Orders</span>
            </Link>

            {/* Wishlist icon (logged-in only) */}
            {isAuthenticated && (
              <Link href="/account/wishlist" className="hidden md:flex items-end gap-1 border border-transparent hover:border-white rounded px-2 py-1 transition-colors flex-shrink-0 relative">
                <Heart className="w-6 h-6 text-white" />
                {wishCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF9900] text-[#131921] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishCount}
                  </span>
                )}
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart" className="flex items-end gap-1 border border-transparent hover:border-white rounded px-2 py-1 transition-colors flex-shrink-0">
              <div className="relative">
                <ShoppingCart className="w-7 h-7 text-white" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-1 bg-[#FF9900] text-[#131921] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </div>
              <span className="text-white text-xs font-bold hidden sm:inline">Cart</span>
            </Link>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 border border-transparent hover:border-white rounded transition-colors">
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category bar */}
      <div className="bg-[#232F3E] hidden md:block">
        <div className="container mx-auto px-3 sm:px-4 flex items-center gap-1 h-10 overflow-x-auto">
          {categories.map(cat => (
            <Link key={cat.href} href={cat.href} className="flex-shrink-0 text-white text-xs px-3 py-1.5 rounded border border-transparent hover:border-white transition-colors whitespace-nowrap">
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#232F3E] border-t border-[#3a4553]">
          <div className="p-3">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search TechHub"
                className="flex-1 h-9 px-3 text-sm text-[#0f1111] bg-white rounded-l focus:outline-none"
              />
              <button type="submit" className="h-9 w-10 bg-[#FF9900] flex items-center justify-center rounded-r">
                <Search className="w-4 h-4 text-[#131921]" />
              </button>
            </form>
          </div>

          <div className="px-3 pb-2">
            {user ? (
              <div className="text-white text-sm py-2 px-3 border-b border-[#3a4553]">
                {isGuest ? 'Shopping as Guest' : `Hello, ${user.name}`}
              </div>
            ) : (
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <div className="text-white text-sm py-2 px-3 border-b border-[#3a4553] font-semibold">
                  Sign in / Create account
                </div>
              </Link>
            )}
          </div>

          {categories.map(cat => (
            <Link key={cat.href} href={cat.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-white text-sm border-b border-[#3a4553] hover:bg-[#3a4553] transition-colors">
              {cat.label}
            </Link>
          ))}

          {isAuthenticated && (
            <Link href="/account" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-white text-sm border-b border-[#3a4553] hover:bg-[#3a4553] transition-colors">
              Your Account & Orders
            </Link>
          )}

          {user && (
            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2.5 text-[#FF9900] text-sm border-b border-[#3a4553] hover:bg-[#3a4553] transition-colors">
              Sign Out
            </button>
          )}
        </div>
      )}
    </header>
  );
}
