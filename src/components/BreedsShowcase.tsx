import BreedCarousel from './BreedCarousel';
import angus from '../../assets/images/angus.webp';
import angus1 from '../../assets/images/angus1.jpg';
import angus2 from '../../assets/images/angus2.jpg';
import brahman from '../../assets/images/brahman.jpg';
import brahman1 from '../../assets/images/brahman.webp';
import brahman2 from '../../assets/images/brahman1.webp';
import holstein from '../../assets/images/Holstein.jpg';
import holstein1 from '../../assets/images/holstein1.jpg';    
import holstein2 from '../../assets/images/holstein.jpeg';
import hereford from '../../assets/images/hereford.jpg';
import hereford1 from '../../assets/images/hereford1.jpg';
import hereford2 from '../../assets/images/hereford2.jpg';
import { useNavigate } from 'react-router-dom';


//import img5 from '../../assets/images/cow.jpg';
//import { useNavigate } from 'react-router-dom';

 const breeds = [
  {
    name: "Brahman",
    description: "Conocida por su resistencia al calor y adaptabilidad. Excelente para producción de carne en climas tropicales.",
    image: "https://images.unsplash.com/photo-1584935385440-1c5a59c0803b?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Resistente al calor", "Alta adaptabilidad", "Excelente ganancia de peso"],
    carouselImages: [brahman, brahman1,brahman2]
  },
  {
    name: "Angus",
    description: "Raza premium para carne, conocida por su marmoleo excepcional y rápido crecimiento.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Carne premium", "Rápido crecimiento", "Excelente marmoleo"],
    carouselImages: [angus, angus1, angus2]
  },
  {
    name: "Holstein",
    description: "La raza lechera más productiva del mundo, conocida por su alta producción de leche.",
    image: "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Alta producción", "Dócil", "Adaptable"],
    carouselImages: [holstein2, holstein1, holstein]
  },
  {
    name: "Hereford",
    description: "Excelente para la producción de carne, conocida por su eficiencia alimenticia y temperamento dócil.",
    image: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Eficiente", "Dócil", "Rústica"],
    carouselImages: [hereford, hereford1, hereford2]
  }
];

const BreedsShowcase = () => {
  const navigate = useNavigate();
  

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm uppercase text-gray-500">Nuestras Razas</span>
          <h2 className="text-6xl font-extrabold text-center text-[#f1683a] mb-8 relative">Excelencia en Genética Bovina

              <span className="absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#f07a52] to-[#ec7c3b] rounded"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Criamos y seleccionamos las mejores razas de ganado, garantizando calidad superior y adaptabilidad a diferentes entornos.
          </p>
          <button
            onClick={() => navigate('/breeds')}
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-white  hover:bg-orange-400   transition"
          >
            Ver todas las razas
          </button>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {breeds.map((breed, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <BreedCarousel images={breed.carouselImages} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{breed.name}</h3>
                <p className="mt-2 text-gray-600">{breed.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {breed.characteristics.map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="bg-orange-200 text-orange-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsShowcase;
