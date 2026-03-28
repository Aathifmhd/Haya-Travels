import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 48;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHero = !scrolled;

  const linkClass = onHero
    ? 'text-white/90 hover:text-amber-200 transition font-medium'
    : 'text-gray-700 hover:text-emerald-700 transition font-medium';

  const logoClass = onHero
    ? 'font-display text-2xl md:text-[1.65rem] font-semibold text-white tracking-tight drop-shadow-sm'
    : 'font-display text-2xl md:text-[1.65rem] font-semibold text-emerald-800 tracking-tight';

  const ctaClass = onHero
    ? 'bg-white text-emerald-800 px-6 py-2 rounded-full hover:bg-amber-50 transition font-medium shadow-md shadow-black/10'
    : 'bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition font-medium';

  const iconBtnClass = onHero ? 'text-white hover:text-amber-200' : 'text-gray-700 hover:text-emerald-700';

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out border-b ${
        scrolled
          ? 'border-gray-200/80 bg-white/95 backdrop-blur-sm shadow-sm'
          : 'border-white/10 bg-transparent shadow-none'
      }`}
    >
      <nav className={onHero ? 'text-white' : 'text-gray-800'}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className={logoClass}>
              Haya Travels
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className={linkClass}>
                Home
              </a>
              <a href="#destinations" className={linkClass}>
                Destinations
              </a>
              <a href="#services" className={linkClass}>
                Services
              </a>
              <a href="#gallery" className={linkClass}>
                Gallery
              </a>
              <a href="#testimonials" className={linkClass}>
                Testimonials
              </a>
              <a href="#contact" className={ctaClass}>
                Contact Us
              </a>
            </div>

            <button
              type="button"
              className={`md:hidden p-1 rounded-lg transition ${iconBtnClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div
              className={`md:hidden mt-4 pb-4 flex flex-col gap-4 rounded-xl p-4 -mx-1 ${
                onHero ? 'bg-black/45 backdrop-blur-md border border-white/15' : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <a href="#home" className={onHero ? 'text-white font-medium' : 'text-gray-800 font-medium'}>
                Home
              </a>
              <a href="#destinations" className={onHero ? 'text-white/90 font-medium' : 'text-gray-800 font-medium'}>
                Destinations
              </a>
              <a href="#services" className={onHero ? 'text-white/90 font-medium' : 'text-gray-800 font-medium'}>
                Services
              </a>
              <a href="#gallery" className={onHero ? 'text-white/90 font-medium' : 'text-gray-800 font-medium'}>
                Gallery
              </a>
              <a href="#testimonials" className={onHero ? 'text-white/90 font-medium' : 'text-gray-800 font-medium'}>
                Testimonials
              </a>
              <a href="#contact" className={ctaClass + ' text-center'}>
                Contact Us
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
