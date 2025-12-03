import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 bg-linear-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            About Furniro
          </h1>
          <p className="text-slate-600">
            Crafting quality furniture since 2020
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
            <p className="text-slate-600 mb-4">
              Founded in 2020, Furniro began with a simple mission: to make
              beautiful, high-quality furniture accessible to everyone. We
              believe that your home should reflect your personality and style,
              without breaking the bank.
            </p>
            <p className="text-slate-600 mb-4">
              What started as a small workshop has grown into a beloved
              furniture brand, serving thousands of happy customers across the
              country. Every piece we create is designed with care, crafted with
              precision, and built to last.
            </p>
            <p className="text-slate-600">
              Today, we continue to innovate and expand our collection, always
              staying true to our core values of quality, affordability, and
              timeless design.
            </p>
          </div>
          <div className="relative h-96 bg-slate-200 rounded-lg overflow-hidden">
            <Image
              src="/Rectangle 24.png"
              alt="Our workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Quality First
              </h3>
              <p className="text-slate-600">
                We use only the finest materials and craftmanship to ensure
                every piece meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Sustainable
              </h3>
              <p className="text-slate-600">
                We're committed to eco-friendly practices, from sourcing to
                production, minimizing our environmental impact.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Customer Love
              </h3>
              <p className="text-slate-600">
                Your satisfaction is our priority. We offer exceptional service
                and support every step of the way.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO" },
              { name: "Michael Chen", role: "Head of Design" },
              { name: "Emily Rodriguez", role: "Operations Manager" },
              { name: "David Kim", role: "Customer Relations" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-48 bg-slate-200 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/Rectangle 24.png"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-slate-900">{member.name}</h3>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-slate-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">10K+</div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
