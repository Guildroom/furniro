export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 bg-linear-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Contact Us</h1>
          <p className="text-slate-600">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-600 mb-8">
              Have a question about our products or services? Our team is here
              to help. Fill out the form and we'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-600">
                    123 Furniture Street
                    <br />
                    Design District, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri: 9AM - 6PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">
                    support@furniro.com
                    <br />
                    sales@furniro.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Visit Our Showroom
          </h2>
          <div className="w-full h-96 bg-slate-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🗺️</span>
                <p>Map integration placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
