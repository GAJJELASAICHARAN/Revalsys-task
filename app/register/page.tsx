'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuthActions } from '@convex-dev/auth/react';
import { useConvexAuth } from 'convex/react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

function RegisterForm() {
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace(redirect);
  }, [isAuthenticated, router, redirect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setIsLoading(true);
    try {
      await signIn('password', { email, password, name, flow: 'signUp' });
      toast({
        variant: 'success',
        title: 'Signed up successfully',
        description: 'Your account has been created.',
      });
    } catch (err: any) {
      const msg: string = err?.message ?? 'Registration failed';
      const message = msg.includes('already') ? 'An account with this email already exists' : msg;
      setError(message);
      toast({
        variant: 'destructive',
        title: 'Sign up failed',
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls =
    'w-full px-3 py-2 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/30';

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border border-[#ddd] rounded-lg p-8 shadow-sm">
        <h1 className="text-[28px] font-normal text-[#0f1111] mb-6">Create account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#0f1111] mb-1">Your name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="First and last name"
              autoComplete="name"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0f1111] mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0f1111] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="At least 6 characters"
                className={`${inputCls} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565959]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-[#565959] mt-1">Passwords must be at least 6 characters.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0f1111] mb-1">
              Re-enter password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
              autoComplete="new-password"
              className={inputCls}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] font-semibold border border-[#FCD200] rounded-sm h-9 text-sm"
          >
            {isLoading ? 'Signing up…' : 'Sign up'}
          </Button>
        </form>

        <div className="border-t border-[#e7e7e7] mt-5 pt-4 text-sm text-[#565959]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <header className="bg-[#131921] py-3 px-4 flex justify-center">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-white font-bold text-2xl">Tech</span>
          <span className="text-[#FF9900] font-bold text-2xl">Hub</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={<div className="w-full max-w-sm h-80 bg-white rounded-lg animate-pulse" />}>
          <RegisterForm />
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
