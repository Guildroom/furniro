"use client";

import React from "react";
import { useCart } from "./CartProvider";
import type { Product } from "../../lib/constant";

export default function AddToCartButton({ product }: { product: Product }) {
  const { items, addItem, updateQuantity } = useCart();

  const cartItem = items.find((i) => i.id === product.id);
  const quantity = cartItem?.quantity || 0;

  if (quantity > 0) {
    return (
      <div className="mt-4 w-full flex items-center justify-center gap-3 border border-slate-300 text-slate-900 py-2 rounded-md font-medium">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded transition-colors text-xl"
        >
          −
        </button>
        <span className="min-w-8 text-center font-semibold">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded transition-colors text-xl"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => addItem(product)}
      className="mt-4 w-full bg-slate-900 text-white py-2 rounded-md font-medium hover:bg-slate-800 transition-colors"
    >
      Add to Cart
    </button>
  );
}
