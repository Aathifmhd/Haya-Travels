import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3408356/pexels-photo-3408356.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[140vh] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-left w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          A Peaceful Path to the Holy Lands
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Discover Peace in Every Step of Your Umrah & Hajj Journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-base group shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Our Packages
            <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
          </a>
          <a
            href="#contact"
            className="bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-50 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white hover:border-emerald-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">✈️</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Round Trip</h3>
              <p className="text-gray-600 text-sm">Complete travel solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎫</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">One Way</h3>
              <p className="text-gray-600 text-sm">Flexible booking options</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Multi City</h3>
              <p className="text-gray-600 text-sm">Explore multiple destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
