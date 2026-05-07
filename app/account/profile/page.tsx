'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) router.replace('/login?redirect=/account/profile');
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading profile…</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-[#0f1111] mb-4">Account Details</h1>
          <div className="bg-white border border-[#ddd] rounded p-6 space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FF9900]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#FF9900]">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0f1111]">{user.name}</p>
                <p className="text-sm text-[#565959]">{user.email || '—'}</p>
              </div>
            </div>

            <button
              onClick={() => logout().then(() => router.push('/'))}
              className="flex items-center gap-2 text-sm text-[#cc0c39] hover:underline"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>

            <div className="text-xs text-[#565959] pt-2">
              Tip: Manage your saved items in <Link href="/account/wishlist" className="text-[#0066c0] hover:underline">Wishlist</Link>.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

