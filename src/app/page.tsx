import Image from "next/image";
import Hero from "../components/Hero";
import { products, types } from "../lib/constant";
import AddToCartButton from "../components/cart/AddToCartButton";

const features = [
  {
    title: "Handcrafted",
    desc: "Artisanal pieces made by experienced carpenters using sustainable wood.",
  },
  {
    title: "Customizable",
    desc: "Choose finishes, fabrics, and sizes to create a piece that fits your space.",
  },
  {
    title: "Free shipping",
    desc: "Fast, insured delivery for all domestic orders over $299.",
  },
];

export default function Home() {
  // show top 4 products by price (highest priced)
  const topProducts = [...products]
    .map((p) => ({
      ...p,
      _priceNumber: Number(p.price.replace(/[^0-9.]/g, "")),
    }))
    .sort((a, b) => b._priceNumber - a._priceNumber)
    .slice(0, 8);
  return (
    <>
      {/* Hero section with background image */}
      <div
        className="relative min-h-screen text-black"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className="mx-auto max-w-5xl px-6 pt-24">
          <Hero features={features} />
        </main>
      </div>

      {/* Rest of content with light gradient background */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 text-black">
        <main className="mx-auto max-w-5xl px-6 py-16">
          <section className="mt-12">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Browse Types
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {types.map((r) => (
                <a
                  key={r.id}
                  href={`/type/${r.id}`}
                  className="flex flex-col items-start gap-2 rounded-lg border border-slate-100 bg-white p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-24 w-full overflow-hidden rounded-md mb-3 bg-slate-100">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black">{r.name}</h4>
                  </div>
                </a>
              ))}
            </div>

            <h2 className="text-3xl font-semibold text-black mb-8">
              Browse Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-black text-lg">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                      {product.price}
                    </p>
                    {/* use client AddToCartButton to interact with cart context */}
                    <AddToCartButton product={product} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-slate-200 pt-10 text-center text-sm text-black">
            <p>
              © {new Date().getFullYear()} Furniro. Designed with care in small
              batches.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
