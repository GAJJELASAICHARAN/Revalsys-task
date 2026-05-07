'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Zap } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import { toast } from '@/hooks/use-toast';

function LoginForm() {
  const { login, loginAsGuest } = useAuth();
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace(redirect);
  }, [isAuthenticated, router, redirect]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);
    if (!result.success) {
      const message = result.error || 'Login failed';
      setError(message);
      toast({
        variant: 'destructive',
        title: 'Sign in failed',
        description: message,
      });
      return;
    }
    toast({
      variant: 'success',
      title: 'Signed in successfully',
      description: 'Welcome back!',
    });
  };

  const handleGuest = () => {
    loginAsGuest();
    router.push(redirect);
  };

  return (
    <div className="w-full max-w-sm">
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
              autoComplete="email"
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
                autoComplete="current-password"
                className="w-full px-3 py-2 pr-10 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565959]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200] rounded-sm h-9 text-sm"
          >
            {isLoading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        <p className="text-xs text-[#565959] mt-4">
          Don&apos;t have an account?{' '}
          <Link
            href={`/register${redirect !== '/' ? `?redirect=${encodeURIComponent(redirect)}` : ''}`}
            className="text-[#0066c0] hover:text-[#c45500] hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* OR divider */}
        <div className="relative my-5">
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
    </div>
  );
}

export default function LoginPageClient() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <header className="bg-[#131921] py-3 px-4 flex justify-center">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-white font-bold text-2xl">Tech</span>
          <span className="text-[#FF9900] font-bold text-2xl">Hub</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={<div className="w-full max-w-sm h-72 bg-white rounded-lg animate-pulse" />}>
          <LoginForm />
        </Suspense>
      </main>

      <footer className="bg-[#131921] py-4 text-center text-xs space-x-4">
        <span className="text-[#aaa] hover:underline cursor-pointer">Conditions of Use</span>
        <span className="text-[#aaa] hover:underline cursor-pointer">Privacy Notice</span>
        <span className="text-[#aaa] hover:underline cursor-pointer">Help</span>
        <p className="mt-2 text-[#767676]">© 2025, TechHub, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

