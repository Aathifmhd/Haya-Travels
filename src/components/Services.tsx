import { Compass, Users, Shield, Globe } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Epic Adventures. Real Connections. Lifelong Memories.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to explore the world like never before? At Haya Travels, we don't just plan trips — we create unforgettable experiences. Whether you're chasing sunsets on tropical beaches or embarking on a spiritual journey to the holy lands, we're here to make your dream journey effortless and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Compass className="text-emerald-700" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Exclusive Trips</h3>
            <p className="text-gray-600">
              Our exclusive trips blend luxury, adventure, and authentic moments in a one-of-a-kind experience
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-700" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Guides</h3>
            <p className="text-gray-600">
              Our professional guides are experienced, passionate, and deeply knowledgeable
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-amber-700" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              Your safety is our priority with comprehensive insurance and 24/7 support
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-rose-700" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Network</h3>
            <p className="text-gray-600">
              Access to exclusive partnerships worldwide for the best experiences
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Trusted Partner for Hajj & Umrah Journeys
              </h2>
              <p className="text-emerald-50 leading-relaxed mb-6">
                At Haya Travels, we specialize in organizing Hajj and Umrah packages that blend spiritual devotion with modern-day comfort. From visa processing and flight bookings to guided rituals and premium accommodations near the Haramain, we take care of every detail — so you can focus on your ibadah without stress.
              </p>
              <p className="text-emerald-50 leading-relaxed mb-8">
                Whether it's your first pilgrimage or a return to the holy lands, our experienced team ensures a safe, smooth, and spiritually enriching experience from departure to return.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-medium text-center">
                  Umrah Packages
                </a>
                <a href="#contact" className="bg-emerald-800 text-white px-6 py-3 rounded-full hover:bg-emerald-900 transition font-medium text-center">
                  Hajj 2026
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6180209/pexels-photo-6180209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hajj and Umrah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
