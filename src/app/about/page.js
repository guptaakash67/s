"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ... existing code ...

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navigation - Mobile Responsive */}
      <header className="bg-red-800 text-white shadow-md ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Sunil Electronics</div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-yellow-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-yellow-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href="/"
                    className="block hover:text-yellow-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block hover:text-yellow-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block hover:text-yellow-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block hover:text-yellow-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl mt-4">
            Your trusted electronics repair partner since 1995
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Sunil Electronics was founded in 1995 by Mr. Sunil Gupta, a
                passionate electronics engineer with a vision to provide
                reliable and affordable repair services to the local community.
              </p>

              <p className="mb-4">
                Starting with a small shop specializing in radio and television
                repairs, we have grown over the decades to become a
                comprehensive electronics repair center, adapting to changing
                technologies while maintaining our traditional values of quality
                workmanship and customer satisfaction.
              </p>

              <p className="mb-4">
                Today, under the leadership of the second generation of the
                Gupta family, we continue to serve our community with the same
                dedication and expertise that has made us a trusted name in
                electronics repair for over 30 years.
              </p>

              <p>
                Our team of skilled technicians combines years of experience
                with continuous training to stay current with the latest
                technologies, allowing us to repair both modern devices and
                vintage electronics with equal expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sunil Gupta</h3>
                <p className="text-red-800 font-medium mb-4">
                  Founder & Senior Technician
                </p>
                <p className="text-gray-700">
                  With over 35 years of experience in electronics repair, Sunil
                  specializes in vintage electronics and complex circuit
                  repairs.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Priya Gupta</h3>
                <p className="text-red-800 font-medium mb-4">
                  Managing Director
                </p>
                <p className="text-gray-700">
                  Specializing in LCD/LED TV repairs and home theater systems,
                  Priya has been with Sunil Electronics for over 8 years.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Akash Gupta</h3>
                <p className="text-red-800 font-medium mb-4">Lead Technician</p>
                <p className="text-gray-700">
                  Sunil's son Akash joined the business in 2010 after completing
                  his degree in Electronics Engineering, bringing modern
                  expertise to the family business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Our Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-gray-700 mb-6">
                At Sunil Electronics, we believe in repairing rather than
                replacing whenever possible. This approach not only saves our
                customers money but also reduces electronic waste, contributing
                to a more sustainable future.
              </p>

              <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
              <p className="text-gray-700">
                We stand behind our work with a 90-day warranty on all repairs.
                If any issue arises with our repair work within this period,
                we'll fix it at no additional cost to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Our Process</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Diagnosis</h4>
                    <p className="text-gray-700">
                      We thoroughly examine your device to identify the root
                      cause of the issue.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Transparent Quote</h4>
                    <p className="text-gray-700">
                      We provide a clear estimate of repair costs before
                      proceeding with any work.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Quality Repair</h4>
                    <p className="text-gray-700">
                      Our skilled technicians perform the repair using quality
                      parts and tools.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Testing</h4>
                    <p className="text-gray-700">
                      We thoroughly test the repaired device to ensure
                      everything works perfectly.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold">After-Service Support</h4>
                    <p className="text-gray-700">
                      We provide guidance on maintenance and are available for
                      any follow-up questions.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(5)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I've been coming to Sunil Electronics for over 15 years.
                They've fixed everything from my old radio to my new smart TV.
                Honest, reliable, and fairly priced."
              </p>
              <p className="font-semibold">- Rajesh Sharma</p>
              <p className="text-sm text-gray-600">Loyal customer since 2005</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(5)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "When my expensive home theater system stopped working, I
                thought I'd have to replace it. Sunil Electronics fixed it for a
                fraction of the replacement cost. Excellent service!"
              </p>
              <p className="font-semibold">- Priya Patel</p>
              <p className="text-sm text-gray-600">Customer since 2018</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(4)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "They repaired my vintage radio that other shops refused to
                touch. The attention to detail and knowledge of older
                electronics is impressive. Highly recommended!"
              </p>
              <p className="font-semibold">- Mohan Singh</p>
              <p className="text-sm text-gray-600">Customer since 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Your Electronics Fixed?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our shop today or contact us to schedule a repair. We're here
            to help bring your electronics back to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-800 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-300 font-semibold"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sunil Electronics</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for all electronics repair needs since
                1995.
              </p>
              <p className="text-gray-300">
                © {new Date().getFullYear()} Sunil Electronics. All rights
                reserved.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services#speakers"
                    className="text-gray-300 hover:text-white"
                  >
                    Speaker Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#tv"
                    className="text-gray-300 hover:text-white"
                  >
                    TV Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#tv"
                    className="text-gray-300 hover:text-white"
                  >
                    LCD & LED tv Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#hometheater"
                    className="text-gray-300 hover:text-white"
                  >
                    Home Theater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#dth"
                    className="text-gray-300 hover:text-white"
                  >
                    DTH Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#remote"
                    className="text-gray-300 hover:text-white"
                  >
                    Remote Controls
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="not-italic text-gray-300">
                <p className="mb-2">
                  Shop,No.11 Sant Dyaneshwar Nagar Tiranga Wel Fear Commutie
                  Bandra East{" "}
                </p>
                <p className="mb-2">Mumbai-51, Maharashtra</p>
                <p className="mb-2">Phone: +91 9820114937</p>
                <p>Email: sunilgupta4437@gmail.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
