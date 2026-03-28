export default function Stats() {
  const stats = [
    { number: '20+', label: 'Years experience' },
    { number: '5K+', label: 'Happy pilgrims' },
    { number: '10+', label: 'Expert guides' },
    { number: '24/7', label: 'Dedicated support' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-amber-200/90 text-sm font-semibold uppercase tracking-wide mb-4">
          Why travellers choose us
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2">
              <div className="font-display text-4xl md:text-5xl font-semibold mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-emerald-100/95 text-base md:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
