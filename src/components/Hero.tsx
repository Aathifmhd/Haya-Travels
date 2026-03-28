import { ArrowRight, Award, Sparkles, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    'https://images.pexels.com/photos/35332395/pexels-photo-35332395.jpeg',
    'https://images.pexels.com/photos/27291499/pexels-photo-27291499.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/34246982/pexels-photo-34246982.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '5K+', label: 'Happy Pilgrims' },
    { icon: Sparkles, value: '10+', label: 'Expert Guides' },
  ];

  return (
    <section id="home" className="relative w-full">
      {/* Full-viewport wallpaper — header sits on top (fixed) */}
      <div className="relative h-screen min-h-[100dvh] w-full flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-linear"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-emerald-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

        <div className="relative z-10 flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-3xl text-left w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm text-amber-100/95 mb-6">
              <Sparkles className="h-4 w-4 text-amber-400 shrink-0" aria-hidden />
              <span>Trusted by 5,000+ pilgrims</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-5 leading-[1.1] tracking-tight text-white drop-shadow-sm">
              Embark on a Spiritual Journey of a Lifetime
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-normal border-l-4 border-amber-500/80 pl-5">
              Haya Travels offers seamless, soul-enriching Hajj and Umrah experiences tailored with devotion
              and precision—so you can focus on your ibadah with peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-500 hover:to-emerald-600 hover:scale-[1.02]"
              >
                Explore packages
                <ArrowRight className="h-[1.1rem] w-[1.1rem]" aria-hidden />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-emerald-800"
              >
                Our services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white text-gray-800 shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-gray-200">
            {statItems.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 justify-center md:justify-center md:px-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-2 ring-emerald-100">
                  <Icon className="h-7 w-7 text-emerald-700" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-semibold text-emerald-800 leading-none">
                    {value}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
