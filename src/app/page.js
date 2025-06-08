"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ... existing code ...

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-700 to-red-900 text-white">
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

      {/* Rest of your page content remains the same */}

      {/* Hero Banner */}
      <div className="container mx-auto px-4 text-center py-4">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to Sunil Electronics
        </h1>
        <p className="text-xl text-white mb-8">
          Your Trusted Electronics Repair Shop Since 1995
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/919820114937"
            className="bg-yellow-400 text-red-900 py-3 px-8 font-bold rounded-md hover:bg-yellow-500 transition duration-300 inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919820114937"
            className="bg-green-600 text-white py-3 px-8 font-bold rounded-md hover:bg-green-700 transition duration-300 inline-flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>

      {/* Services Overview */}
      {/* Services Overview - Modern Design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">
              Our Repair Services
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Professional repair services for all your electronic devices with
              guaranteed satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072M12 9.5l-3 3 3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  Speaker Repair
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional repair services for all types of speakers and
                  audio systems. We fix sound issues, replace damaged parts, and
                  restore audio quality.
                </p>
                <Link
                  href="/services#speakers"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  Home Theater Systems
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete diagnostics and repair for home theater systems. We
                  handle amplifiers, receivers, and multi-channel audio setups.
                </p>
                <Link
                  href="/services#hometheater"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  LCD & LED TV Repair
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert repair services for all LCD and LED television models.
                  We fix screen issues, power problems, and component failures.
                </p>
                <Link
                  href="/services#tv"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  DTH Antenna Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Installation, alignment and repair of DTH antennas. We ensure
                  optimal signal reception and troubleshoot connection issues.
                </p>
                <Link
                  href="/services#dth"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  Remote Control Repair
                </h3>
                <p className="text-gray-600 mb-6">
                  Fix and replacement services for all types of remote controls.
                  We repair button issues, signal problems, and battery
                  connections.
                </p>
                <Link
                  href="/services#remote"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-red-700 to-red-900"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  Box TV Repair
                </h3>
                <p className="text-gray-600 mb-6">
                  Specialized repair services for traditional box TVs. We handle
                  CRT televisions, picture tubes, and vintage electronics.
                </p>
                <Link
                  href="/services#boxtv"
                  className="inline-flex items-center text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-red-800 text-white py-3 px-8 rounded-md hover:bg-red-900 transition duration-300 inline-block font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-800">
                About Sunil Electronics
              </h2>
              <p className="text-gray-700 mb-4">
                With over 30 years of experience, Sunil Electronics has been the
                trusted name in electronic repairs in the region. Our skilled
                technicians are trained to handle all types of electronic
                equipment.
              </p>
              <p className="text-gray-700 mb-6">
                We take pride in our work and guarantee customer satisfaction
                with every repair. Our traditional values of quality workmanship
                and honest service have made us the preferred choice for
                generations of customers.
              </p>
              <Link
                href="/about"
                className="text-red-800 font-semibold hover:underline"
              >
                Read Our Full Story →
              </Link>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-800">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    30+ years of experience in electronics repair
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Skilled technicians with specialized training
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Genuine replacement parts for all repairs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    90-day warranty on all repair services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Honest pricing with no hidden charges
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Fast turnaround time on most repairs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-800">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(5)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "They fixed my old television that other shops refused to
                repair. Excellent service and very reasonable price. Highly
                recommended!"
              </p>
              <p className="font-semibold">- Rajesh Kumar</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(5)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "My home theater system was not working properly. They diagnosed
                and fixed the issue in just one day. Great service!"
              </p>
              <p className="font-semibold">- Priya Sharma</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">{"★".repeat(4)}</div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Honest and reliable service. They repaired my LED TV at a
                fraction of what the branded service center quoted. Will
                definitely use their services again."
              </p>
              <p className="font-semibold">- Mohan Patel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Electronics Repair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our shop or call us today for a free diagnosis and estimate.
            We're here to help with all your electronics repair needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-800 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919820114937"
              className="border-2 border-white text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-300 font-semibold"
            >
              Call: +91 9820114937
            </a>
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
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services#speakers"
                    className="text-gray-300 hover:text-white" >
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
                    LCD & LED TV Repair
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
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  FB
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  TW
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
