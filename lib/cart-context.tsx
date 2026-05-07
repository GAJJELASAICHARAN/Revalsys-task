'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useConvexAuth, useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export interface CartItem {
  id: string;        // Convex _id when authenticated, productId when guest
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_KEY = 'techhub-cart';

function loadLocalCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalCart(items: CartItem[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading: authLoading } = useConvexAuth();

  // --- Convex cart (authenticated users) ---
  const convexItems = useQuery(
    api.cart.getItems,
    isAuthenticated ? {} : 'skip'
  );
  const convexAdd = useMutation(api.cart.addItem);
  const convexUpdateQty = useMutation(api.cart.updateQuantity);
  const convexRemove = useMutation(api.cart.removeItem);
  const convexClear = useMutation(api.cart.clearCart);
  const convexSync = useMutation(api.cart.syncFromLocal);

  // --- Local cart (guests) ---
  const [localItems, setLocalItems] = useState<CartItem[]>([]);
  const [localLoaded, setLocalLoaded] = useState(false);

  // Load localStorage once on mount
  useEffect(() => {
    setLocalItems(loadLocalCart());
    setLocalLoaded(true);
  }, []);

  // When user logs in, sync local cart → Convex then clear localStorage
  const syncedRef = React.useRef(false);
  useEffect(() => {
    if (!isAuthenticated || authLoading || !localLoaded || syncedRef.current) return;
    const local = loadLocalCart();
    if (local.length > 0) {
      syncedRef.current = true;
      convexSync({
        items: local.map(({ productId, name, price, quantity, image }) => ({
          productId, name, price, quantity, image,
        })),
      }).then(() => {
        localStorage.removeItem(LOCAL_KEY);
        setLocalItems([]);
      });
    } else {
      syncedRef.current = true;
    }
  }, [isAuthenticated, authLoading, localLoaded, convexSync]);

  // Reset sync flag on logout
  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      syncedRef.current = false;
    }
  }, [isAuthenticated, authLoading]);

  // Build a unified items array with stable `id` field
  const items: CartItem[] = isAuthenticated
    ? (convexItems ?? []).map((ci: any) => ({
        id: ci._id,
        productId: ci.productId,
        name: ci.name,
        price: ci.price,
        quantity: ci.quantity,
        image: ci.image,
      }))
    : localItems;

  const isLoading = authLoading || (isAuthenticated && convexItems === undefined);

  // ---- Mutations ----

  const addItem = (newItem: Omit<CartItem, 'id'>) => {
    if (isAuthenticated) {
      convexAdd({
        productId: newItem.productId,
        name: newItem.name,
        price: newItem.price,
        quantity: newItem.quantity,
        image: newItem.image,
      });
    } else {
      setLocalItems(prev => {
        const existing = prev.find(i => i.productId === newItem.productId);
        const updated = existing
          ? prev.map(i =>
              i.productId === newItem.productId
                ? { ...i, quantity: i.quantity + newItem.quantity }
                : i
            )
          : [...prev, { ...newItem, id: newItem.productId }];
        saveLocalCart(updated);
        return updated;
      });
    }
  };

  const removeItem = (id: string) => {
    if (isAuthenticated) {
      convexRemove({ itemId: id as any });
    } else {
      setLocalItems(prev => {
        const updated = prev.filter(i => i.id !== id);
        saveLocalCart(updated);
        return updated;
      });
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (isAuthenticated) {
      convexUpdateQty({ itemId: id as any, quantity });
    } else {
      setLocalItems(prev => {
        const updated =
          quantity <= 0
            ? prev.filter(i => i.id !== id)
            : prev.map(i => (i.id === id ? { ...i, quantity } : i));
        saveLocalCart(updated);
        return updated;
      });
    }
  };

  const clearCart = () => {
    if (isAuthenticated) {
      convexClear({});
    } else {
      setLocalItems([]);
      localStorage.removeItem(LOCAL_KEY);
    }
  };

  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalPrice, totalItems, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
