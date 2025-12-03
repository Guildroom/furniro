'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo - Left */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Furniro logo"
              width={50}
              height={10}
              priority
            />
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-black font-medium hover:text-slate-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black font-medium hover:text-slate-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-black font-medium hover:text-slate-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black font-medium hover:text-slate-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Search Icon - Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-black hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar - Opens when search icon clicked */}
        {isSearchOpen && (
          <div className="mt-4 pb-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-white text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  );
}
