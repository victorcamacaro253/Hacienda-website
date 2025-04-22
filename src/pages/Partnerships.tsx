import { ArrowRight } from 'lucide-react'; // Optional: For icons

const PartnersPage = () => {
  const partnerships = [
    {
      name: 'EcoFriendly Farms',
      logo: 'https://i.postimg.cc/wMtPT5ht/quang-nguyen-vinh-IXGXo9-Zdn2-U-unsplash.jpg',
      description:
        'EcoFriendly Farms collaborates with us to promote sustainable agricultural practices and reduce environmental impact.',
      link: 'https://www.ecofriendlyfarms.com',
    },
    {
      name: 'Green Earth Initiative',
      logo: '/path/to/greenearth.png',
      description:
        'The Green Earth Initiative supports our conservation efforts and helps us implement eco-friendly solutions.',
      link: 'https://www.greenearthinitiative.org',
    },
    {
      name: 'Local Farmers Co-op',
      logo: '/path/to/localfarmers.png',
      description:
        'We partner with the Local Farmers Co-op to ensure fair trade practices and support small-scale farmers in the region.',
      link: 'https://www.localfarmerscoop.org',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/qBLXz6mq/Getty-farm-handshake-1800x1012-Simon-Skafar.webp')" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Nuestras asociaciones</h1>
          <p className="text-lg sm:text-xl max-w-2xl text-center mb-8">
            Juntos, estamos construyendo un futuro sostenible a través de la colaboración y la innovación.
          </p>
        </div>
      </section>

      {/* Enhanced Partners Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f1683a] relative inline-block mb-10">
            Our Valued Partners
            <span className="block w-16 h-1 bg-[#f1683a] absolute left-1/2 -bottom-2 transform -translate-x-1/2"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="group bg-gray-100 rounded-lg shadow-md p-6 transition-all duration-300 hover:bg-[#fddbbb] hover:shadow-2xl relative overflow-hidden"
              >
                {/* Decorative Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#fddbbb]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Partner Logo */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain rounded-full border-4 border-[#f1683a] transition-colors duration-300 group-hover:border-green-700"
                    loading="lazy"
                  />
                </div>

                {/* Partner Details */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-green-700">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{partner.description}</p>

                {/* Learn More Button */}
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#f1683a] font-semibold hover:text-green-700 transition-colors duration-300"
                  aria-label={`Learn more about ${partner.name}`}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f1683a] mb-10">Collaborative Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Agriculture Program</h3>
              <p className="text-gray-600">
                In collaboration with EcoFriendly Farms, we have launched a program to train local farmers in sustainable farming techniques.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Biodiversity Conservation</h3>
              <p className="text-gray-600">
                Partnering with the Green Earth Initiative, we are working to protect endangered species and restore natural habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#f1683a] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Join Our Network</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Are you interested in partnering with us? Let’s work together to create a sustainable future.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#f1683a] px-6 py-3 rounded-full font-semibold hover:bg-[#fddbbb] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;