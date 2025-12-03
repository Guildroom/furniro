"use client";

import Image from "next/image";
import Link from "next/link";
import { products, types } from "../../lib/constant";
import AddToCartButton from "../../components/cart/AddToCartButton";
import { useMemo, useState } from "react";

export default function ShopPage() {
  const title = "Shop";
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <main className="mx-auto px-6 pt-28 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left filter column (hidden on small screens) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
              <h4 className="text-sm font-medium text-black mb-3">Filters</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-slate-900"
                    />
                    <span>In stock</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-slate-900"
                    />
                    <span>On sale</span>
                  </label>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-700 mb-2">
                    Price
                  </div>
                  <select className="w-full border rounded-md py-2 px-3 text-sm">
                    <option>All</option>
                    <option>Under $250</option>
                    <option>$250 - $750</option>
                    <option>$750+</option>
                  </select>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-700 mb-2">
                    Furniture Type
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {types.map((type) => (
                      <label
                        key={type.id}
                        className="inline-flex items-center gap-2 text-sm text-slate-600"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-slate-900"
                        />
                        {type.name}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-700 mb-2">
                    Material
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-slate-900"
                      />
                      Oak
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-slate-900"
                      />
                      Walnut
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-slate-900"
                      />
                      Upholstery
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-slate-900"
                      />
                      Metal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Search bar centered above content */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="w-full">
              <div className="mx-auto w-full max-w-4xl">
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386-1.414 1.415-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="search"
                    placeholder="Search products, styles or materials..."
                    className="w-full rounded-full border border-slate-200 bg-white/90 py-3 pl-14 pr-12 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-black mb-2">{title}</h1>
          <p className="text-slate-600 mb-8">
            Browse our selection of products.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow lg:grid lg:grid-cols-2"
              >
                <div className="relative h-40 w-full bg-slate-100 lg:h-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-black text-lg">{p.name}</h3>
                    <p className="text-slate-600 text-sm mt-2">{p.price}</p>
                  </div>
                  <div>
                    <AddToCartButton product={p} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-slate-600 mt-8">No items found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
