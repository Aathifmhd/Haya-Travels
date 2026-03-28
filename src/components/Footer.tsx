import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Haya Travels</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your trusted partner for unforgettable journeys. We specialize in Hajj, Umrah, and worldwide travel experiences.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-emerald-400 transition">Home</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition">Destinations</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-emerald-400 transition">Hajj Packages</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Umrah Packages</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition">International Tours</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Visa Processing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Flight Booking</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Hotel Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest travel deals and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-white"
              />
              <button className="bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>Copyright 2025 Haya Travels. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
