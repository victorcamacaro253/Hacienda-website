import { Wheat, Cog as Cow, Leaf, Mountain } from 'lucide-react';

const WhatWeDo = () => {
  const activities = [
    {
      title: "Producción Agrícola",
      description:
        "Nos especializamos en la siembra de cultivos orgánicos, garantizando productos frescos y de alta calidad.",
      icon: Wheat,
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Ganadería",
      description:
        "Criamos ganado de manera sostenible, asegurando el bienestar animal y la producción de productos lácteos de calidad.",
      icon: Cow,
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Proyectos de Conservación",
      description:
        "Implementamos iniciativas para proteger el medio ambiente y promover la biodiversidad en nuestra región.",
      icon: Leaf,
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Ecoturismo",
      description:
        "Ofrecemos experiencias únicas para los visitantes, conectándolos con la naturaleza y nuestras prácticas sostenibles.",
      icon: Mountain,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-[#f8af5b] via-[#eef1f1] to-[#fddbbb] py-24">
      <div className="max-w-[1800px] mx-auto px-8 w-full">
        <div className="text-center max-w-[800px] mx-auto mb-24">
          <span className="inline-block bg-gradient-to-r from-[#f1683a] to-[#e63946] bg-clip-text text-transparent font-semibold text-xl mb-6 uppercase tracking-wider">
            Nuestras Actividades
          </span>
          <h2 className="text-6xl font-extrabold text-[#f1683a] mb-8 relative">
            Lo que Hacemos
            <span className="absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#f07a52] to-[#ec7c3b] rounded"></span>
          </h2>
          <p className="text-2xl text-gray-800 leading-relaxed opacity-90">
            En Hacienda Villa Blanca, nos dedicamos a diversas actividades que
            promueven la sostenibilidad y el bienestar de nuestra comunidad.
            Aquí te presentamos nuestras principales áreas de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group h-[420px] w-full perspective-1000 cursor-pointer focus:outline-none"
              tabIndex={0}
            >
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] focus:[transform:rotateY(180deg)]">
                {/* Front of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <div className="relative w-full h-full">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] bg-white/20 backdrop-blur-md p-5 rounded-full w-24 h-24 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                      <activity.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="absolute bottom-10 left-0 right-0 text-center text-white text-2xl font-bold px-6">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#ce6a27] to-[#ca3f08] p-8 flex flex-col items-center justify-center text-center">
                  <activity.icon className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6 text-base">
                    {activity.description}
                  </p>
                  <button 
                    className="bg-white/10 text-white border-2 border-white/50 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white hover:-translate-y-0.5 text-base focus:bg-white/20 focus:border-white focus:-translate-y-0.5"
                    aria-label={`Más información sobre ${activity.title}`}
                  >
                    Saber más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;