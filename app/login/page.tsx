'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, ShoppingBag, Zap } from 'lucide-react';

function LoginForm() {
  const { user, login, loginAsGuest } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace(redirect);
    }
  }, [user, router, redirect]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 400));
    const result = login(email, password);
    setIsLoading(false);
    if (!result.success) {
      setError(result.error || 'Login failed');
    }
  };

  const handleGuest = () => {
    loginAsGuest();
    router.push(redirect);
  };

  return (
    <div className="w-full max-w-sm">
      {/* Login Card */}
      <div className="bg-white border border-[#ddd] rounded-lg p-8 shadow-sm">
        <h1 className="text-[28px] font-normal text-[#0f1111] mb-6">Sign in</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#0f1111] mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="demo@techhub.com"
              className="w-full px-3 py-2 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-[#0f1111] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="demo123"
                className="w-full px-3 py-2 pr-10 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565959]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-normal border border-[#FCD200] rounded-sm h-9 text-sm"
          >
            {isLoading ? 'Signing in...' : 'Continue'}
          </Button>
        </form>

        <p className="text-xs text-[#565959] mt-4">
          By continuing, you agree to TechHub&apos;s{' '}
          <span className="text-[#0066c0] cursor-pointer hover:underline">Conditions of Use</span>{' '}
          and{' '}
          <span className="text-[#0066c0] cursor-pointer hover:underline">Privacy Notice</span>.
        </p>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e7e7e7]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-[#767676]">or</span>
          </div>
        </div>

        <button
          onClick={handleGuest}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-[#d5d9d9] rounded-sm text-sm text-[#0f1111] bg-[#f0f2f2] hover:bg-[#e7e9ec] transition-colors"
        >
          <Zap className="w-4 h-4 text-[#FF9900]" />
          Continue as Guest
        </button>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#ddd]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#f3f3f3] px-3 text-xs text-[#767676]">New to TechHub?</span>
        </div>
      </div>

      <button className="w-full py-2 px-4 border border-[#d5d9d9] rounded-sm text-sm text-[#0f1111] bg-[#f0f2f2] hover:bg-[#e7e9ec] transition-colors flex items-center justify-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        Create your TechHub account
      </button>

      {/* Demo hint */}
      <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
        <p className="font-semibold mb-1">Demo credentials:</p>
        <p>Email: demo@techhub.com</p>
        <p>Password: demo123</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      {/* Top bar */}
      <header className="bg-[#131921] py-3 px-4 flex justify-center">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-white font-bold text-2xl">Tech</span>
          <span className="text-[#FF9900] font-bold text-2xl">Hub</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={<div className="w-full max-w-sm h-64 bg-white rounded-lg animate-pulse" />}>
          <LoginForm />
        </Suspense>
      </main>

      <footer className="bg-[#131921] py-4 text-center text-xs text-[#ddd] space-x-4">
        <span className="hover:underline cursor-pointer text-[#aaa]">Conditions of Use</span>
        <span className="hover:underline cursor-pointer text-[#aaa]">Privacy Notice</span>
        <span className="hover:underline cursor-pointer text-[#aaa]">Help</span>
        <p className="mt-2 text-[#767676]">© 2025, TechHub, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}
