"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ... existing code ...

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navigation */}
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
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">
            We're here to help with all your electronics repair needs
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  const name = document.getElementById("name").value;
                  const email = document.getElementById("email").value;
                  const phone = document.getElementById("phone").value;
                  const service = document.getElementById("service").value;
                  const message = document.getElementById("message").value;

                  // Format the message for WhatsApp
                  const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;

                  // Encode the message for URL
                  const encodedMessage = encodeURIComponent(whatsappMessage);

                  // Open WhatsApp with the pre-filled message
                  window.open(
                    `https://wa.me/919820114937?text=${encodedMessage}`,
                    "_blank"
                  );
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-700"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-700"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-700"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-700"
                  >
                    <option value="">Select a service</option>
                    <option value="speaker">Speaker Repair</option>
                    <option value="hometheater">Home Theater Systems</option>
                    <option value="tv">LCD & LED TV Repair</option>
                    <option value="dth">DTH Antenna Services</option>
                    <option value="remote">Remote Control Repair</option>
                    <option value="boxtv">Box TV Repair</option>
                    <option value="components">Electronic Components</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-700"
                    placeholder="Describe your issue or inquiry"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-red-800 text-white py-3 px-6 rounded-md hover:bg-red-900 transition duration-300 font-semibold w-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Message on WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-700">
                      Shop,No.11 Sant Dyaneshwar Nagar Tiranga Wel Fear Commutie
                      Bandra East
                    </p>
                    <p className="text-gray-700">Mumbai, Maharashtra</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-700">+91 9820114937 </p>
                    <p className="text-gray-700">
                      +91 9820114937 (Alternative)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-700">sunilgupta4437@gmail.com</p>
                    <p className="text-gray-700">sunilgupta4437@gmail.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Tuesday - Sunday: 11:00 AM - 11:00 PM
                    </p>
                    <p className="text-gray-700">Monday: closed(only calls)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-red-800 mb-6">
                  Emergency Repairs
                </h2>
                <p className="text-gray-700 mb-4">
                  For urgent repair needs outside of business hours, please call
                  our emergency service line:
                </p>
                <a
                  href="tel:+919820114937"
                  className="bg-red-800 text-white py-3 px-6 rounded-md hover:bg-red-900 transition duration-300 font-semibold inline-block"
                >
                  Emergency: +91 9820114937
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  *Additional charges may apply for emergency services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <a
              href="https://g.co/kgs/vxHVSbY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8282354042485!2d72.85!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAwLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://g.co/kgs/vxHVSbY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-red-900 font-medium inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              View on Google Maps
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
                <p className="mb-2">Mumbai, Maharashtra</p>
                <p className="mb-2">Phone: +91 9820114937 </p>
                <p>Email: sunilgupta4437@gmail.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
