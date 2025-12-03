export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">Furniro</h2>
            <p className="mt-4 max-w-xs text-gray-500">
              400 University Drive Suite 200 Coral Gables, FL 33134
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <p className="font-medium text-gray-500">Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-500">Help</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/payment"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Payment Options
                  </a>
                </li>
                <li>
                  <a
                    href="/returns"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-500">Newsletter</p>
              <form className="mt-6 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full rounded-md border-gray-200 p-2 text-sm shadow-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-gray-800 px-4 text-sm font-semibold text-white hover:bg-gray-700"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-gray-100 pt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Furniro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
