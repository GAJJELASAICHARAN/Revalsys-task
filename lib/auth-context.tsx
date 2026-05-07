'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  loginAsGuest: () => void;
  logout: () => void;
  isLoading: boolean;
}

const MOCK_USERS = [
  { id: '1', name: 'John Doe', email: 'demo@techhub.com', password: 'demo123' },
  { id: '2', name: 'Jane Smith', email: 'jane@techhub.com', password: 'jane123' },
];

const AUTH_STORAGE_KEY = 'techhub-auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const found = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      return { success: false, error: 'Invalid email or password' };
    }
    const authUser: AuthUser = { id: found.id, name: found.name, email: found.email, isGuest: false };
    setUser(authUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));
    return { success: true };
  };

  const loginAsGuest = () => {
    const guestUser: AuthUser = {
      id: 'guest',
      name: 'Guest',
      email: '',
      isGuest: true,
    };
    setUser(guestUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(guestUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, loginAsGuest, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
