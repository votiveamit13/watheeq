import React from 'react';

export default function TermsAndConditions() {
  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-gray-900 select-none">
            MyCompany
          </div>
          <ul className="flex space-x-8 text-gray-700">
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Container */}
      <main className="bg-white min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Please read these terms and conditions carefully before using our service.
            </p>
            <button
              type="button"
              className="mt-10 inline-block bg-black text-white font-semibold rounded-md px-8 py-3 text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Accept Terms
            </button>
          </section>

          {/* Terms Content Card */}
          <section className="bg-white rounded-xl shadow-md p-10 text-gray-600 space-y-6 max-w-4xl mx-auto">
            <article>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed">
                Welcome to MyCompany. By accessing our website, you agree to these terms and conditions.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. Intellectual Property Rights
              </h2>
              <p className="text-base leading-relaxed">
                All content included on this site, such as text, graphics, logos, and images, is the property of MyCompany or its content suppliers.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. User Obligations
              </h2>
              <p className="text-base leading-relaxed">
                You agree to use the website only for lawful purposes and not to engage in any behavior that is harmful or unlawful.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed">
                MyCompany shall not be liable for any damages arising from the use or inability to use this website.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Changes to these Terms
              </h2>
              <p className="text-base leading-relaxed">
                We reserve the right to update or change our terms at any time, and it is your responsibility to review them periodically.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

