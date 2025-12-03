import Image from "next/image";
import { products, sampleProductsByType } from "../../../lib/constant";
import AddToCartButton from "../../../components/cart/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  let product = products.find((p) => p.id === productId);

  if (!product) {
    for (const category of Object.values(sampleProductsByType)) {
      const found = category.find((p) => p.id === productId);
      if (found) {
        product = found;
        break;
      }
    }
  }

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative h-96 md:h-[600px] bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-24 bg-white rounded-md overflow-hidden border border-slate-200 cursor-pointer hover:border-slate-400 transition-colors"
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-semibold text-slate-900">
                {product.price}
              </span>
              <span className="text-sm text-slate-600 bg-amber-100 px-3 py-1 rounded-full">
                {product.sold} sold
              </span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600">(124 reviews)</span>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Description
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This beautiful {product.name.toLowerCase()} combines timeless
                design with modern functionality. Crafted from premium materials
                with attention to every detail, it's built to last for years
                while maintaining its elegant appearance. Perfect for any
                contemporary or traditional space.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Features
              </h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Durable construction for long-lasting use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Easy to clean and maintain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>1-year warranty included</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Specifications
              </h2>
              <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-200">
                <div className="flex py-3 px-4">
                  <span className="w-1/3 text-sm font-medium text-slate-900">
                    Material
                  </span>
                  <span className="text-sm text-slate-600">Solid Wood</span>
                </div>
                <div className="flex py-3 px-4">
                  <span className="w-1/3 text-sm font-medium text-slate-900">
                    Dimensions
                  </span>
                  <span className="text-sm text-slate-600">
                    24" W x 36" H x 20" D
                  </span>
                </div>
                <div className="flex py-3 px-4">
                  <span className="w-1/3 text-sm font-medium text-slate-900">
                    Weight
                  </span>
                  <span className="text-sm text-slate-600">45 lbs</span>
                </div>
                <div className="flex py-3 px-4">
                  <span className="w-1/3 text-sm font-medium text-slate-900">
                    Color
                  </span>
                  <span className="text-sm text-slate-600">Natural Oak</span>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-50 py-4 -mx-6 px-6 border-t border-slate-200">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Link
                    href={`/product/${p.id}`}
                    className="font-medium text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {p.name}
                  </Link>
                  <p className="text-slate-600 text-sm mt-2">{p.price}</p>
                  <AddToCartButton product={p} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
