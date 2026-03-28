import { Package, FileCheck, Bus } from 'lucide-react';
import FloatingBubblesBackground from './FloatingBubblesBackground';

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 bg-white">
      <FloatingBubblesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Commitment to service
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Our services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need for a seamless, comfortable, and spiritually enriching pilgrimage—handled
            with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50/80 hover:shadow-lg hover:border-emerald-100 transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-emerald-50">
              <Package className="text-emerald-700" size={32} strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized packages</h3>
            <p className="text-gray-600 leading-relaxed">
              Customized Hajj &amp; Umrah packages tailored to your needs, preferences, and spiritual goals.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50/80 hover:shadow-lg hover:border-emerald-100 transition">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-amber-50">
              <FileCheck className="text-amber-800" size={32} strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visa assistance</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert guidance and timely processing for your visa requirements—stress-free preparation from
              day one.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50/80 hover:shadow-lg hover:border-emerald-100 transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-emerald-50">
              <Bus className="text-emerald-700" size={32} strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodation &amp; transport</h3>
            <p className="text-gray-600 leading-relaxed">
              Comfortable lodging near the Haram and reliable transportation for a peaceful pilgrimage
              journey.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-amber-200/90 text-sm font-semibold uppercase tracking-wide mb-2">
                Your journey of faith
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Your trusted partner for Hajj &amp; Umrah
              </h2>
              <p className="text-emerald-50/95 leading-relaxed mb-5">
                We specialize in organizing Hajj and Umrah packages that blend spiritual devotion with
                modern comfort—from visa processing and flights to guided rituals and premium stays near the
                Haramain.
              </p>
              <p className="text-emerald-50/95 leading-relaxed mb-8">
                Whether it is your first pilgrimage or a return to the holy lands, our team ensures a safe,
                smooth, and enriching experience from departure to return.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full bg-white text-emerald-800 px-6 py-3 font-semibold hover:bg-amber-50 transition text-center"
                >
                  Umrah packages
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full bg-emerald-950/50 text-white border border-white/25 px-6 py-3 font-semibold hover:bg-emerald-950/70 transition text-center"
                >
                  Hajj 2026
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10">
              <img
                src="https://images.pexels.com/photos/6180209/pexels-photo-6180209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilgrims near the Holy Mosque"
                className="w-full h-full min-h-[240px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
