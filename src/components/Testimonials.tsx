import { Quote } from 'lucide-react';
import FloatingBubblesBackground from './FloatingBubblesBackground';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Thariq',
      text: 'We got great deals on flights and hotels thanks to their partnerships.',
    },
    {
      name: 'Hameed',
      text: 'They kept us updated and answered every question quickly.',
    },
    {
      name: 'Imran',
      text: 'The staff were super friendly and responsive throughout our booking.',
    },
    {
      name: 'Niyas',
      text: 'Our flight got delayed, and they helped us rearrange our hotel check-in with no stress.',
    },
    {
      name: 'Irfan',
      text: 'From the first call, the agency understood exactly what kind of experience we wanted. The itinerary was well-balanced between adventure and relaxation.',
    },
    {
      name: 'Rizwan',
      text: 'We had a small hiccup with our airport transfer, but their support line picked up immediately and had it sorted in 10 minutes. That kind of service makes all the difference.',
    },
  ];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 bg-white">
      <FloatingBubblesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Trusted by families &amp; professionals
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Voices of confidence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Real experiences from pilgrims and travellers who chose Haya Travels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition relative"
            >
              <Quote className="text-emerald-700 opacity-20 absolute top-4 right-4" size={48} />
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">Verified pilgrim</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
