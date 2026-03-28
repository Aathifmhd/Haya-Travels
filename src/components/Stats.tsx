export default function Stats() {
  const stats = [
    { number: '24', label: 'Years Experience' },
    { number: '97%', label: 'Retention Rate' },
    { number: '6K', label: 'Tours Completed' },
    { number: '19K', label: 'Happy Travellers' },
  ];

  return (
    <section className="py-20 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-emerald-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
