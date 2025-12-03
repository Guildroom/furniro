"use client";

import React from "react";
import { useCart } from "./CartProvider";
import type { Product } from "../../lib/constant";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="mt-4 w-full bg-slate-900 text-white py-2 rounded-md font-medium hover:bg-slate-800 transition-colors"
    >
      Add to Cart
    </button>
  );
}
