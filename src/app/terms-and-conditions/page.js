import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-blue-50 via-[#EFF6FF] to-[#FFFFFF10] py-16 px-6 flex flex-col items-center justify-center relative pt-29">
        <div className="absolute inset-0 bg-jet-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 mt-28">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>

          <div className="text-center">
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 text-gray-500">
              At Yashik Yadav & Co., we value your trust and are committed to
              protecting your privacy.
            </p>
          </div>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed text-gray-500">
            Last Updated: 15-12-2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto px-4 md:px-8 lg:px-16 pb-12 text-lg">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions ("Terms") govern your use of the website
              and services provided by{" "}
              <span className="font-semibold text-gray-900">
                Yashik Yadav & Co.
              </span>{" "}
              ("Company," "we," "our," or "us"). By accessing our website or
              using our services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              1. Use of Website
            </h2>
            <p className="text-gray-700 mb-3">
              By accessing this website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the website only for lawful purposes</li>
              <li>
                Not engage in any activity that may harm, disrupt, or interfere
                with the website or its services
              </li>
              <li>
                Not attempt to gain unauthorized access to any part of the
                website, servers, or systems
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We reserve the right to restrict or terminate access to the
              website if these Terms are violated.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              2. Services
            </h2>
            <p className="text-gray-700 mb-3">
              Yashik Yadav & Co. provides digital marketing services including
              but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Digital advertising (Google, Meta, social platforms)</li>
              <li>Marketing automation</li>
              <li>Lead generation</li>
              <li>Website development and optimization</li>
              <li>Social media marketing and strategy</li>
            </ul>
            <p className="text-gray-700 mt-4">
              All services are provided based on agreed proposals, contracts, or
              scopes of work. Results may vary depending on market conditions,
              client input, platform policies, and external factors beyond our
              control.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-3">
              All content on this website, including but not limited to text,
              graphics, logos, designs, and materials, is the intellectual
              property of{" "}
              <span className="font-semibold">Yashik Yadav & Co.</span> unless
              otherwise stated.
            </p>
            <p className="text-gray-700 mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Copy, reproduce, distribute, or modify any content without prior
                written consent
              </li>
              <li>
                Use our branding, content, or materials for commercial purposes
                without authorization
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Client-provided materials remain the property of the respective
              clients.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              4. Payments & Refunds
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                All fees for services will be communicated in advance and are
                payable as per the agreed terms.
              </li>
              <li>
                Payments once made are{" "}
                <span className="font-semibold text-gray-900">
                  non-refundable
                </span>
                , unless explicitly stated in a written agreement.
              </li>
              <li>
                Delayed payments may result in service suspension or
                termination.
              </li>
              <li>
                Third-party costs (such as ad spend, software tools, or platform
                fees) are separate and borne by the client.
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-600/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                Questions About Our Terms?
              </h3>
              <p className="mb-4">
                If you have any questions or concerns regarding these Terms &
                Conditions, please contact us.
              </p>
              <Link href="/contact">
                <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
