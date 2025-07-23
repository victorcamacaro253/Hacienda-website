import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgFamilyTour from '../../assets/images/tour1.jpg';     // Replace with actual tour images
import imgCoffeeTour from '../../assets/images/tour2.jpeg';
import imgSunsetTour from '../../assets/images/tour3.jpg';
import imglandscape from '../../assets/images/hacienda.jpg';
import imgHeroTour from '../../assets/images/tour.png';
import useInView from '../hooks/useView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ToursPage = () => {
  const [expandedTour, setExpandedTour] = useState<string | null>(null);
  const [timelineRef, isSectionInView] = useInView();

  const tours = [
    {
      id: 'family-tour',
      title: 'Tour Familiar',
      duration: '2 horas',
      price: '$45 por persona',
      highlights: ['Alimentar animales', 'Paseo en tractor', 'Degustación de productos'],
      description:
        'Perfecto para familias. Los niños aprenderán sobre animales, agricultura y la vida en el campo de forma divertida.',
      includes: ['Guía bilingüe', 'Snack orgánico', 'Acceso al área de juegos'],
      image: imgFamilyTour,
    },
    {
      id: 'coffee-tour',
      title: 'Del Grano a la Taza',
      duration: '3 horas',
      price: '$65 por persona',
      highlights: ['Cosecha de café', 'Tostado artesanal', 'Degustación premium'],
      description:
        'Un recorrido sensorial por nuestro café de especialidad. Ideal para amantes del café.',
      includes: ['Kit de recolección', 'Certificado de catación', 'Botella de café de regalo'],
      image: imgCoffeeTour,
    },
    {
      id: 'sunset-tour',
      title: 'Tour al Atardecer',
      duration: '2.5 horas',
      price: '$75 por pareja',
      highlights: ['Paseo en carro tirado por caballos', 'Cena campestre', 'Música en vivo'],
      description:
        'Una experiencia romántica con vista al atardecer sobre las montañas. Ideal para parejas.',
      includes: ['Cóctel de bienvenida', 'Cena gourmet', 'Fotografía profesional'],
      image: imgSunsetTour,
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedTour(expandedTour === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      {/* Hero Section with Auto-Sliding Swiper */}
<section className="relative h-screen w-full overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Swiper Carousel */}
  <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    className="w-full h-full"
  >
    {[
      imgHeroTour,
      imgFamilyTour,
      imgCoffeeTour,
      imgSunsetTour,
      imglandscape, // Assuming this is a landscape image for the hero
     // from ContactPage
    ].map((image, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-full relative">
          <img
            src={image}
            alt={`Tour activity ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Hero Text Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Vive la Experiencia del Campo
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
      Descubre la vida en la hacienda con recorridos interactivos, actividades familiares y conexión con la naturaleza.
    </p>
    <a
      href="#tours"
      className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:scale-105 shadow-lg"
    >
      Ver Tours Disponibles
    </a>
  </div>
</section>

      {/* Tours Grid */}
      <section id="tours" ref={timelineRef} className={`py-20 px-4 ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Nuestros Tours</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Cada experiencia está diseñada para conectar a las personas con la tierra, la tradición y el ritmo natural de la vida en la finca.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{tour.price}</p>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {tour.includes.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Destacados:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                    <button
                      onClick={() => toggleExpand(tour.id)}
                      className="text-orange-500 hover:text-orange-600 font-medium text-sm transition"
                    >
                      {expandedTour === tour.id ? 'Ver menos' : 'Leer más'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedTour === tour.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-700 text-sm">
                        <strong>Perfecto para:</strong> {tour.id === 'family-tour' ? 'Familias con niños' : tour.id === 'coffee-tour' ? 'Amantes del café' : 'Parejas'}
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Recomendaciones:</strong> Usar calzado cómodo y protector solar.
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                    >
                      Reservar Ahora
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-orange-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">¿Por Qué Elegir Nuestros Tours?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🌾', label: 'Educación Agrícola', desc: 'Aprende sobre cultivos sostenibles y ganadería ética.' },
              { icon: '👨‍👩‍👧', label: 'Para Todas las Edades', desc: 'Actividades seguras y divertidas para niños y adultos.' },
              { icon: '🌍', label: 'Sostenibilidad', desc: 'Promovemos prácticas eco-amigables y respeto por la tierra.' },
              { icon: '📸', label: 'Fotografías Inolvidables', desc: 'Recuerdos auténticos en un entorno natural impresionante.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Vivir la Aventura?</h2>
          <p className="text-lg mb-8 opacity-90">
            Reserva tu tour hoy y experimenta la vida en la hacienda como nunca antes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition hover:scale-105 shadow-md"
            >
              Reservar Ahora
            </Link>
            <Link
              to="/history"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition hover:scale-105"
            >
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursPage;