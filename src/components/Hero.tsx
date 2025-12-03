import Image from "next/image";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  features?: { title: string; desc: string }[];
};

export default function Hero({
  title = "Furniro — Beautiful, sustainable furniture",
  subtitle = "Design-forward pieces crafted from responsible materials. Shop small-batch collections and customize finishes.",
  ctaText = "Shop Collections",
  ctaHref = "/collections",
  features,
}: HeroProps) {
  return (
    <section className="w-full bg-transparent py-10">
      <div className="mx-auto max-w-5xl px-6 text-center sm:text-left">
        <div className="flex flex-col items-center gap-16 sm:flex-row sm:items-center">
          <div className="relative hidden h-96 w-56 shrink-0 rounded-xl bg-linear-to-br from-slate-50 to-white p-4 shadow-md sm:block">
            <Image
              src="/Rectangle 24.png"
              alt="Wood chair"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 224px, 224px"
            />
          </div>

          <div className="max-w-2xl relative z-20">
            <div
              className="absolute -inset-4 z-0 rounded-2xl bg-white/80 backdrop-blur-sm"
              aria-hidden
            />

            <h1 className="relative z-20 text-4xl font-semibold leading-tight text-black">
              {title}
            </h1>
            <p className="relative z-20 mt-4 text-lg text-black">{subtitle}</p>
            <div className="relative z-20 mt-6 flex justify-center gap-4 sm:justify-start">
              <a
                href={ctaHref}
                className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                {ctaText}
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-black bg-slate-50 hover:bg-slate-50"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
        {/* Features inside hero */}
        {features && (
          <div className="mt-24 grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/90 rounded-lg p-4 shadow-sm border border-slate-100"
              >
                <h4 className="font-medium text-black">{f.title}</h4>
                <p className="mt-1 text-sm text-slate-700">{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
