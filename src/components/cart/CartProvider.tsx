"use client";

import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../../lib/constant";

type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clear = () => setItems([]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(quantity, 1) } : i
      )
    );
  };

  const totalCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clear, updateQuantity, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
