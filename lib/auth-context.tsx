'use client';

import React, { createContext, useContext } from 'react';
import { useConvexAuth, useQuery } from 'convex/react';
import { useAuthActions } from '@convex-dev/auth/react';
import { api } from '@/convex/_generated/api';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  /** Sign in with email + password */
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  /** Sign out (works for both real users and clears guest flag) */
  logout: () => Promise<void>;
  /** Sets a local guest flag — no Convex account is created */
  loginAsGuest: () => void;
  isGuest: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const GUEST_KEY = 'techhub-guest';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading: convexLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const convexUser = useQuery(api.users.currentUser);

  // Guest mode is stored in localStorage only
  const [isGuest, setIsGuest] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(GUEST_KEY) === '1';
  });

  const isLoading = convexLoading || (isAuthenticated && convexUser === undefined);

  const user: AuthUser | null = (() => {
    if (isAuthenticated && convexUser) {
      return {
        id: convexUser._id,
        name: convexUser.name ?? 'User',
        email: convexUser.email ?? '',
        isGuest: false,
      };
    }
    if (isGuest) {
      return { id: 'guest', name: 'Guest', email: '', isGuest: true };
    }
    return null;
  })();

  const login = async (email: string, password: string) => {
    try {
      await signIn('password', { email, password, flow: 'signIn' });
      // Clear guest flag on successful login
      localStorage.removeItem(GUEST_KEY);
      setIsGuest(false);
      return { success: true };
    } catch (err: any) {
      const msg: string = err?.message ?? 'Invalid email or password';
      const lower = msg.toLowerCase();
      // Surface clean messages for common auth failures
      if (
        lower.includes('not found') ||
        lower.includes('no account') ||
        lower.includes('does not exist') ||
        lower.includes('user not found')
      ) {
        return { success: false, error: 'User is not registered' };
      }
      if (lower.includes('invalid') || lower.includes('wrong password')) {
        return { success: false, error: 'Invalid email or password' };
      }
      return { success: false, error: msg };
    }
  };

  const logout = async () => {
    localStorage.removeItem(GUEST_KEY);
    setIsGuest(false);
    if (isAuthenticated) {
      await signOut();
    }
  };

  const loginAsGuest = () => {
    localStorage.setItem(GUEST_KEY, '1');
    setIsGuest(true);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, loginAsGuest, isGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
