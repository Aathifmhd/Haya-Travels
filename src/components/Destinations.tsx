import FloatingBubblesBackground from './FloatingBubblesBackground';

export default function Destinations() {
  const destinations = [
    {
      name: 'Maldives',
      listings: '22 Packages',
      image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'India',
      listings: '12 Packages',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Dubai',
      listings: '18 Packages',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Saudi Arabia',
      listings: '25 Packages',
      image: 'https://images.pexels.com/photos/6180209/pexels-photo-6180209.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Malaysia',
      listings: '21 Packages',
      image: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Indonesia',
      listings: '15 Packages',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="destinations" className="relative overflow-hidden py-20 bg-gray-50">
      <FloatingBubblesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Chosen for you
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Popular destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Select inspiring places that align with your journey—blessed routes and worry-free planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-200">{destination.listings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
