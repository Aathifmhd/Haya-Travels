import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+94772586401" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <Phone size={14} />
              <span>+94 77 258 6401</span>
            </a>
            <a href="mailto:info@hayatravels.com" className="flex items-center gap-2 hover:text-emerald-200 transition hidden sm:flex">
              <Mail size={14} />
              <span>info@hayatravels.com</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-emerald-700">
            Haya Travels
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-700 transition font-medium">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-emerald-700 transition font-medium">Destinations</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-700 transition font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-emerald-700 transition font-medium">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition font-medium">Testimonials</a>
            <a href="#contact" className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition font-medium">
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-emerald-700 transition font-medium">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-emerald-700 transition font-medium">Destinations</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-700 transition font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-emerald-700 transition font-medium">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition font-medium">Testimonials</a>
            <a href="#contact" className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition font-medium text-center">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
