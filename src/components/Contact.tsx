import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to start your journey? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+94 77 258 6401</p>
                  <p className="text-gray-600">+94 77 214 5519</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@hayatravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">76/1 Matale Road, Akurana</p>
                  <p className="text-gray-600">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-emerald-700 text-white rounded-xl">
              <h4 className="font-bold text-xl mb-2">Operating Hours</h4>
              <p className="text-emerald-100">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-emerald-100">Sunday: By Appointment</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition flex items-center justify-center gap-2 font-medium"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
