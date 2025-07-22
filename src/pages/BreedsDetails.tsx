import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale, MapPin, Target, Award, Tag, Calendar, Users, Syringe, Stethoscope, AlignCenterVertical as Certificate, MapPinned, Utensils, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const breeds = [
  {
    name: "Brahman",
    description: "Conocida por su resistencia al calor y adaptabilidad. Excelente para producción de carne en climas tropicales.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Resistente al calor", "Alta adaptabilidad", "Excelente ganancia de peso"],
    carouselImages: [
      "https://images.unsplash.com/photo-1584935385440-1c5a59c0803b?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920"
    ],
    details: {
      origin: "Estados Unidos (desarrollada a partir de razas de la India)",
      weight: {
        male: "800-1100 kg",
        female: "500-700 kg"
      },
      uses: ["Carne", "Cruces"],
      advantages: [
        "Excelente resistencia al calor",
        "Alta resistencia a parásitos",
        "Buena producción de carne",
        "Longevidad"
      ]
    },
    availableAnimals: [
      {
        id: "BR001",
        sex: "Macho",
        age: "24 meses",
        weight: "950 kg",
        price: "$2,800",
        birthdate: "2022-03-15",
        mother: "BR-M-156",
        father: "BR-P-089",
        vaccination: "Completo",
        lastCheckup: "2024-02-10",
        geneticCertification: "Certificado",
        location: "Potrero 3",
        feedingProgram: "Pastoreo + Suplemento Premium",
        health: "Excelente"
      },
      {
        id: "BR002",
        sex: "Hembra",
        age: "18 meses",
        weight: "600 kg",
        price: "$2,200",
        birthdate: "2022-09-20",
        mother: "BR-M-178",
        father: "BR-P-092",
        vaccination: "Completo",
        lastCheckup: "2024-02-12",
        geneticCertification: "En proceso",
        location: "Potrero 2",
        feedingProgram: "Pastoreo Natural",
        health: "Bueno"
      },
      {
        id: "BR003",
        sex: "Macho",
        age: "12 meses",
        weight: "450 kg",
        price: "$1,800",
        birthdate: "2023-03-10",
        mother: "BR-M-162",
        father: "BR-P-089",
        vaccination: "Completo",
        lastCheckup: "2024-02-15",
        geneticCertification: "Pendiente",
        location: "Potrero 1",
        feedingProgram: "Pastoreo + Suplemento Estándar",
        health: "Excelente"
      }
    ]
  },
  {
    name: "Angus",
    description: "Raza premium para carne, conocida por su marmoleo excepcional y rápido crecimiento.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Carne premium", "Rápido crecimiento", "Excelente marmoleo"],
    carouselImages: [
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1548667348-5bcd92d0b72b?auto=format&fit=crop&q=80&w=1920"
    ],
    details: {
      origin: "Escocia",
      weight: {
        male: "850-1100 kg",
        female: "550-750 kg"
      },
      uses: ["Carne premium"],
      advantages: [
        "Carne de alta calidad",
        "Excelente marmoleo",
        "Precocidad",
        "Facilidad de parto"
      ]
    },
    availableAnimals: [
      { id: "AN001", sex: "Macho", age: "20 meses", weight: "980 kg", price: "$3,200" },
      { id: "AN002", sex: "Hembra", age: "16 meses", weight: "620 kg", price: "$2,600" },
      { id: "AN003", sex: "Macho", age: "14 meses", weight: "580 kg", price: "$2,400" }
    ]
  },
  {
    name: "Holstein",
    description: "La raza lechera más productiva del mundo, conocida por su alta producción de leche.",
    image: "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Alta producción", "Dócil", "Adaptable"],
    carouselImages: [
      "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1562564013-cf67f287abec?auto=format&fit=crop&q=80&w=1920"
    ],
    details: {
      origin: "Holanda",
      weight: {
        male: "1000-1400 kg",
        female: "600-800 kg"
      },
      uses: ["Leche"],
      advantages: [
        "Mayor producción de leche",
        "Buena adaptabilidad",
        "Alta eficiencia alimenticia",
        "Temperamento dócil"
      ]
    },
    availableAnimals: [
      { id: "HO001", sex: "Hembra", age: "24 meses", weight: "700 kg", price: "$3,000" },
      { id: "HO002", sex: "Hembra", age: "20 meses", weight: "650 kg", price: "$2,800" },
      { id: "HO003", sex: "Hembra", age: "18 meses", weight: "620 kg", price: "$2,600" }
    ]
  },
  {
    name: "Hereford",
    description: "Excelente para la producción de carne, conocida por su eficiencia alimenticia y temperamento dócil.",
    image: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
    characteristics: ["Eficiente", "Dócil", "Rústica"],
    carouselImages: [
      "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1602127477198-1a5b6c13da0e?auto=format&fit=crop&q=80&w=1920"
    ],
    details: {
      origin: "Inglaterra",
      weight: {
        male: "900-1200 kg",
        female: "600-800 kg"
      },
      uses: ["Carne", "Cruces"],
      advantages: [
        "Excelente conversión alimenticia",
        "Temperamento dócil",
        "Rusticidad",
        "Buena fertilidad"
      ]
    },
    availableAnimals: [
      { id: "HE001", sex: "Macho", age: "22 meses", weight: "920 kg", price: "$2,900" },
      { id: "HE002", sex: "Hembra", age: "18 meses", weight: "640 kg", price: "$2,400" },
      { id: "HE003", sex: "Macho", age: "16 meses", weight: "580 kg", price: "$2,200" }
    ]
  }
];

const BreedsDetails = () => {
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  //const [expandedBreed, setExpandedBreed] = useState(null);
  const [expandedBreed] = useState(null);

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
/*
  const toggleBreedExpansion = (index) => {
    setExpandedBreed(expandedBreed === index ? null : index);
  };
  */

  return (
    <div className="min-h-screen bg-gray-50 mt-20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Header with back button */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-lg rounded hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </button>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Nuestras Razas de Ganado</h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-600 max-w-3xl">
            Información detallada sobre cada raza que criamos con excelencia y dedicación
          </p>
        </div>

        {/* Breeds list with accordion */}
        <div className="space-y-8">
          {breeds.map((breed, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
              {/* Breed summary (always visible) */}
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row items-start md:items-center gap-6"
              /* onClick={() => toggleBreedExpansion(index)} */
              >
                <div className="w-full md:w-1/3 lg:w-1/4 h-48 md:h-40 rounded-lg overflow-hidden">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{breed.name}</h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-200 text-orange-700">
                      {breed.availableAnimals.length} disponibles
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{breed.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {breed.characteristics.map((characteristic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-xs font-medium"
                      >
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="self-center md:self-auto">
                  {expandedBreed === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </div>

              {/* Expanded details (conditional) */}
      
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Origen</h3>
                      </div>
                      <p className="text-gray-700">{breed.details?.origin || 'Origen no disponible'}</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Scale className="h-5 w-5 text-orange-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Peso Promedio</h3>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Macho:</span> {breed.details.weight.male}<br />
                        <span className="font-medium">Hembra:</span> {breed.details.weight.female}
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Target className="h-5 w-5 text-orange-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Usos Principales</h3>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {breed.details.uses.map((use, i) => (
                          <span key={i} className="px-2 py-1 bg-white text-orange-700 rounded text-xs font-medium">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Award className="h-5 w-5 text-orange-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Ventajas</h3>
                      </div>
                      <ul className="space-y-1 text-gray-700">
                        {breed.details.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-1">•</span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Animals table */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Tag className="h-5 w-5 text-orange-600 mr-2" />
                      Animales Disponibles
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peso</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalles</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {breed.availableAnimals.map((animal, i) => (
                            <React.Fragment key={i}>
                              <tr className={`hover:bg-gray-50 ${selectedAnimal === animal.id ? 'bg-orange-50' : ''}`}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{animal.id}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                    animal.sex === 'Macho' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                                  }`}>
                                    {animal.sex}
                                  </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{animal.age}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{animal.weight}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-orange-600">{animal.price}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedAnimal(selectedAnimal === animal.id ? null : animal.id);
                                    }}
                                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                                  >
                                    {selectedAnimal === animal.id ? (
                                      <>
                                        Ocultar <ChevronUp className="ml-1 h-3 w-3" />
                                      </>
                                    ) : (
                                      <>
                                        Ver más <ChevronDown className="ml-1 h-3 w-3" />
                                      </>
                                    )}
                                  </button>
                                </td>
                              </tr>
                              {selectedAnimal === animal.id && (
                                <tr className="bg-orange-50">
                                  <td colSpan={6} className="px-4 py-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                      {/* Additional Details Grid */}
                                      <div className="flex items-start">
                                        <Calendar className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Fecha de Nacimiento</h4>
                                          {'birthdate' in animal && (
                                            <p className="text-xs text-gray-700">{formatDate(animal.birthdate)}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Users className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Padres</h4>
                                          <p className="text-xs text-gray-700">
                                            {('mother' in animal) && (
                                              <>
                                                Madre: {animal.mother}<br />
                                                Padre: {animal.father}
                                              </>
                                            )}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Syringe className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Vacunación</h4>
                                          {'vaccination' in animal && (
                                            <p className="text-xs text-gray-700">{animal.vaccination}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Certificate className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Certificación Genética</h4>
                                          {'geneticCertification' in animal && (
                                            <p className="text-xs text-gray-700">{animal.geneticCertification}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <MapPinned className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Ubicación</h4>
                                          {'location' in animal && (
                                            <p className="text-xs text-gray-700">{animal.location}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Utensils className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Alimentación</h4>
                                          {'feedingProgram' in animal && (
                                            <p className="text-xs text-gray-700">{animal.feedingProgram}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Heart className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Salud</h4>
                                          {'health' in animal && (
                                            <p className="text-xs text-gray-700">{animal.health}</p>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-start">
                                        <Stethoscope className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <h4 className="text-xs font-medium text-gray-900">Último Chequeo</h4>
                                          {'lastCheckup' in animal && (
                                            <p className="text-xs text-gray-700">{formatDate(animal.lastCheckup)}</p>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsDetails;