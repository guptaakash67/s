"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ... existing code ...

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      id: "speakers",
      title: "Speaker Repair",
      description:
        "We repair all types of speakers including portable speakers, home audio speakers, and professional sound systems. Our services include:",
      features: [
        "Driver replacement",
        "Crossover repair",
        "Cabinet restoration",
        "Wire and connection repair",
        "Amplifier troubleshooting",
        "Sound quality optimization",
      ],
      price: "Starting from ₹500",
    },
    {
      id: "hometheater",
      title: "Home Theater Systems",
      description:
        "Complete diagnostics and repair for all brands of home theater systems. Our services include:",
      features: [
        "Receiver repair",
        "Speaker system troubleshooting",
        "Surround sound calibration",
        "Connection and wiring fixes",
        "Remote control programming",
        "System upgrades and optimization",
      ],
      price: "Starting from ₹800",
    },
    {
      id: "tv",
      title: "LCD & LED TV Repair",
      description:
        "Expert repair services for all LCD and LED television models. We handle:",
      features: [
        "Screen replacement",
        "Backlight repair",
        "Power supply issues",
        "Main board repair",
        "Audio problems",
        "Smart TV troubleshooting",
        "Software updates",
      ],
      price: "Starting from ₹1500",
    },
    {
      id: "dth",
      title: "DTH Antenna Services",
      description:
        "Installation, alignment and repair of DTH antennas for all major providers. Our services include:",
      features: [
        "New DTH installation",
        "Antenna alignment",
        "Signal troubleshooting",
        "LNB replacement",
        "Cable and connector repair",
        "Set-top box troubleshooting",
      ],
      price: "Starting from ₹400",
    },
    {
      id: "remote",
      title: "Remote Control Repair",
      description:
        "Fix and replacement services for all types of remote controls. We offer:",
      features: [
        "Button repair",
        "Circuit board fixing",
        "Battery contact cleaning",
        "Infrared emitter repair",
        "Programming and setup",
        "Replacement options",
      ],
      price: "Starting from ₹200",
    },
    {
      id: "boxtv",
      title: "Box TV Repair",
      description:
        "Specialized repair services for traditional CRT and box televisions. Our services include:",
      features: [
        "Picture tube repair",
        "Flyback transformer replacement",
        "Vertical and horizontal circuit repair",
        "Power supply troubleshooting",
        "Color calibration",
        "Audio circuit repair",
      ],
      price: "Starting from ₹700",
    },
    {
      id: "components",
      title: "Electronic Components",
      description:
        "Repair and replacement of various electronic components for different devices. We handle:",
      features: [
        "Capacitor replacement",
        "Resistor and diode testing",
        "Circuit board repair",
        "Transformer replacement",
        "Fuse and switch repair",
        "Voltage regulator fixing",
      ],
      price: "Starting from ₹300",
    },
  ];

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
          <h1 className="text-4xl font-bold">Our Repair Services</h1>
          <p className="text-xl mt-4">
            Professional repair services for all your electronic devices
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-red-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Services Offered:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Pricing:</h3>
                      <p className="text-gray-700 mb-4">{service.price}</p>
                      <p className="text-sm text-gray-600 mb-6">
                        Final price depends on the specific issue and parts
                        required.
                      </p>
                      <div className="flex space-x-4">
                        <Link
                          href="/contact"
                          className="bg-red-800 text-white py-2 px-6 rounded-md hover:bg-red-900 transition duration-300 inline-block font-semibold"
                        >
                          Book Repair
                        </Link>
                        <a
                          href="tel:+919820114937"
                          className="border border-red-800 text-red-800 py-2 px-6 rounded-md hover:bg-red-50 transition duration-300 inline-block font-semibold"
                        >
                          Call for Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
