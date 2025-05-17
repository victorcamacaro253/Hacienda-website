import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.webp';
import img12 from '../../assets/images/img12.webp';
import img13 from '../../assets/images/img13.webp';
import useInView from '../hooks/useView';
import Modal from '../components/Modal';
import { useState } from 'react';

const timelineData = [
  { 
    year: "1920", 
    event: "Farm Founded", 
    description: `En lo profundo de las colinas verdes que rodean el pintoresco pueblo de San José de las Rosas, se encuentra la Hacienda Villa Blanca. Desde hace más de un siglo, esta hacienda ha sido el corazón de la familia Ramírez. Fundada por Don Carlos Ramírez y su esposa María, la finca comenzó como un modesto terreno donde cultivaban maíz y frijoles para sustentar a su familia. Con el tiempo, la visión de Don Carlos transformó estas tierras en un próspero centro agrícola que abastecía a toda la región.`,
    longDescription: `La Hacienda Villa Blanca nació de un sueño y mucho trabajo duro. Don Carlos Ramírez, un inmigrante español con conocimientos agrícolas, se estableció en estas tierras fértiles junto a su joven familia. Los primeros años fueron difíciles, con cosechas modestas y condiciones climáticas desafiantes. Sin embargo, la dedicación de la familia y su conexión con la tierra eventualmente dieron frutos. Para 1925, la hacienda ya contaba con su primera cosecha comercial de café, marcando el comienzo de lo que sería una tradición familiar por generaciones.`,
    icon: "🌱",
    images: [img10, img11]
  },
  { 
    year: "1950", 
    event: "First Barn Built", 
    description: `La construcción del granero principal marcó un hito en la historia de la hacienda. Este icónico edificio, hecho de madera de roble local, se convirtió en el centro de operaciones de la finca. No solo almacenaba herramientas y cosechas, sino que también servía como lugar de reunión para los trabajadores y sus familias.`,
    longDescription: `El granero de 1950 fue una obra maestra de la carpintería tradicional. Construido completamente a mano por artesanos locales bajo la supervisión de Don Carlos Ramírez Jr., incorporó técnicas de construcción traídas de España pero adaptadas al clima tropical. Sus gruesas paredes de madera protegían las cosechas de la humedad, mientras que su diseño de ventilación natural mantenía una temperatura ideal. En los años siguientes, el granero sería testigo de innumerables celebraciones de cosecha, bodas de trabajadores, y hasta serviría como escuela improvisada para los niños de la comunidad durante los años difíciles.`,
    icon: "🏚️",
    images: [img12]
  },
  { 
    year: "1990", 
    event: "Modernization", 
    description: `La década de los 90 trajo una revolución tecnológica a la hacienda. Bajo el liderazgo de la tercera generación de los Ramírez, se implementaron sistemas de riego por goteo, tractores modernos y técnicas de cultivo sostenible. Esta modernización permitió triplicar la producción mientras se reducía el impacto ambiental.`,
    longDescription: `La modernización de 1990 no fue solo acerca de máquinas nuevas, sino de una nueva filosofía agrícola. La familia Ramírez, ahora dirigida por Carlos Ramírez III, un ingeniero agrónomo educado en Europa, implementó un enfoque holístico. Introdujeron rotación de cultivos para preservar el suelo, sistemas de compostaje para reducir desechos, y comenzaron la transición hacia la agricultura orgánica. Este período también vio la primera exportación de café de especialidad de la hacienda a mercados internacionales, colocando a Villa Blanca en el mapa global de productores de café de alta calidad.`,
    icon: "🚜",
    images: [img13]
  },
  { 
    year: "2020", 
    event: "Farm Tours & Ecotourism", 
    description: `En el centenario de la hacienda, abrimos nuestras puertas al público con recorridos educativos. Los visitantes pueden experimentar de primera mano la rica historia de la finca, aprender sobre procesos agrícolas sostenibles y disfrutar de la belleza natural que nos rodea.`,
    longDescription: `El programa de ecoturismo de 2020 fue el resultado de años de planificación. Más que simples recorridos, ofrecemos experiencias inmersivas: desde la recolección de café "de la mata a la taza", hasta talleres de agricultura sostenible para niños y adultos. La hacienda también estableció alianzas con universidades locales para programas de investigación agrícola. Este nuevo capítulo honra el legado de los fundadores mientras mira hacia el futuro, creando conexiones significativas entre la tierra, los alimentos y las personas que los disfrutan. Cada tour incluye una visita al museo familiar, donde artefactos y fotografías cuentan la historia completa de estos cien años de dedicación a la tierra.`,
    icon: "👨‍🌾",
    images: [img10, img11, img12, img13]
  }
];

const HistoryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [timelineRef, isTimelineInView] = useInView();
  const [galleryRef, isGalleryInView] = useInView();

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const toggleEventExpansion = (index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="font-sans text-gray-800 bg-[url('/src/assets/images/img8.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <img src={img10} alt="Farm History" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuestra Historia Familiar</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Un siglo de tradición agrícola, innovación y conexión con la tierra</p>
          <a 
            href="#timeline" 
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:scale-105 shadow-lg"
          >
            Explorar Nuestra Historia
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} id="timeline" className={`timeline-section px-4 py-20 bg-orange-50 ${isTimelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700  `}>
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-6">Nuestra Historia en el Tiempo</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Cada generación ha contribuido al legado de la Hacienda Villa Blanca. Conoce los hitos que han marcado nuestro camino.
          </p>

          
    {/* Mobile Timeline (stacked) */}
    <div className="md:hidden space-y-8 max-w-2xl mx-auto">
      {timelineData.map((item, index) => (
        <div key={index} className="relative pl-8">
          {/* Timeline dot and line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-400"></div>
          <div className="absolute left-0 top-0 -ml-3 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white">
            {item.icon}
          </div>
          
          {/* Content */}
          <div 
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-400"
            onClick={() => toggleEventExpansion(index)}
          >
            <span className="block text-orange-400 font-bold text-lg mb-1">{item.year}</span>
            <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
            <p className="text-gray-600 mb-3">{item.description}</p>
            
            {expandedEvent === index && (
              <>
                <p className="text-gray-700 mt-3 text-sm">{item.longDescription}</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {item.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={(e) => e.stopPropagation()}
                      className="cursor-pointer overflow-hidden rounded-lg"
                    >
                      <img 
                        src={img} 
                        alt={`Historical ${item.year}`} 
                        className="w-full h-20 object-cover"
                        onClick={() => handleImageClick(img)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            
            <button 
              className="mt-3 text-orange-500 hover:text-orange-600 font-medium text-sm"
              onClick={(e) => {
                e.stopPropagation();
                toggleEventExpansion(index);
              }}
            >
              {expandedEvent === index ? 'Mostrar menos' : 'Leer más'}
            </button>
          </div>
        </div>
      ))}
    </div>


          <div className=" hidden md:block relative w-full max-w-5xl mx-auto ">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-green-500 rounded-full z-0"></div>

            {timelineData.map((item, index) => (
              <div key={index} className={`relative mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:items-start md:justify-start' : 'md:items-end md:justify-end'}`}>
                <div className={`w-full md:w-1/2 px-6 relative z-10`}>
                  <div className={`absolute text-3xl top-2 -translate-y-2/4 ${index % 2 === 0 ? 'right-[-30px]' : 'left-[-30px]'} bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-orange-300`}>
                    {item.icon}
                  </div>
                  <div 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-[1.01] cursor-pointer border-l-4 border-orange-400"
                    onClick={() => toggleEventExpansion(index)}
                  >
                    <span className="block text-orange-400 font-bold text-xl mb-1">{item.year}</span>
                    <h3 className="text-2xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    
                    {expandedEvent === index && (
                      <>
                        <p className="text-gray-700 mt-3">{item.longDescription}</p>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {item.images.map((img, idx) => (
                            <div 
                              key={idx} 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleImageClick(img);
                              }}
                              className="cursor-pointer overflow-hidden rounded-lg hover:opacity-80 transition"
                            >
                              <img src={img} alt={`Historical ${item.year}`} className="w-full h-24 object-cover" />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    
                    <button 
                      className="mt-3 text-orange-500 hover:text-orange-600 font-medium text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleEventExpansion(index);
                      }}
                    >
                      {expandedEvent === index ? 'Mostrar menos' : 'Leer más'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generations Section */}
      <section className="py-20 bg-orange-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Las Generaciones de Villa Blanca</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Carlos & María", years: "1920-1955", role: "Fundadores", desc: "Establecieron los cimientos de la hacienda con trabajo duro y visión." },
              { name: "Carlos Jr. & Elena", years: "1955-1985", role: "Expansión", desc: "Modernizaron las operaciones y expandieron los cultivos." },
              { name: "Carlos III & Isabel", years: "1985-2015", role: "Innovación", desc: "Introdujeron agricultura sostenible y tecnología moderna." },
              { name: "Ana & Javier", years: "2015-Presente", role: "Futuro", desc: "Combinan tradición con ecoturismo y agricultura regenerativa." }
            ].map((gen, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  {["👴", "👨", "👨‍🔬", "👩‍🌾"][idx]}
                </div>
                <h3 className="text-xl font-bold mb-1">{gen.name}</h3>
                <p className="text-orange-500 text-sm mb-2">{gen.years}</p>
                <p className="font-medium mb-2">{gen.role}</p>
                <p className="text-gray-600 text-sm">{gen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className={`gallery-section px-4 py-20 bg-white ${isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Memorias Visuales</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Un vistazo a los momentos que han definido nuestra historia familiar y agrícola
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[img10, img11, img12, img13].map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => handleImageClick(img)} 
                className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={img} 
                    alt={`Farm Image ${idx + 1}`} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">Época: {["1920s", "1950s", "1990s", "Actualidad"][idx]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Voces de Nuestra Comunidad</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                quote: "Trabajar en Villa Blanca ha sido más que un empleo, ha sido ser parte de una familia que valora la tierra y a las personas.", 
                author: "Roberto M., Capataz desde 1982",
                role: "Empleado"
              },
              { 
                quote: "El café de Villa Blanca tiene el sabor de la tradición y el cuidado de generaciones. Cada taza cuenta una historia.", 
                author: "María G., Dueña de Cafetería Local",
                role: "Cliente"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-orange-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-400 to-orange-500 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Únase a Nuestro Legado</h2>
          <p className="text-lg text-white/90 mb-8">
            Ya sea visitando nuestra hacienda, disfrutando de nuestros productos o compartiendo nuestras historias, hay muchas formas de ser parte de esta tradición centenaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tours" 
              className="bg-white hover:bg-gray-100 text-orange-500 font-semibold py-3 px-6 rounded-full transition duration-300 hover:scale-105 shadow-md"
            >
              Reservar un Tour
            </a>
            <a 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:scale-105"
            >
              Contactarnos
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage || ''} />
    </div>
  );
};
export default HistoryPage;