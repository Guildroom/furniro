"use client";

import React, { useState } from "react";
import { useCart } from "./CartProvider";
import Image from "next/image";

export default function CartButton() {
  const { items, totalCount, removeItem, clear } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-slate-900 text-white px-4 py-3 shadow-lg hover:shadow-2xl"
        aria-label="Open cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium">Cart</span>
        <span className="inline-flex items-center justify-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold">
          {totalCount}
        </span>
      </button>

      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 rounded-lg bg-white shadow-xl border border-slate-100 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Your Cart</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 text-sm"
            >
              Close
            </button>
          </div>

          <div className="space-y-3 max-h-60 overflow-auto">
            {items.length === 0 && (
              <p className="text-sm text-slate-500">Your cart is empty.</p>
            )}
            {items.map((it) => (
              <div key={it.id} className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 bg-slate-100 rounded-md overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{it.name}</div>
                  <div className="text-xs text-slate-500">
                    {it.price} × {it.quantity}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(it.id)}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => clear()}
                className="text-sm text-slate-600 hover:underline"
              >
                Clear
              </button>
              <button className="bg-slate-900 text-white rounded-md px-3 py-2 text-sm">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
