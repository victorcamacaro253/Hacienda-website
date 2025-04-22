import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2070",
      title: "Ganadería Sostenible",
      description: "Prácticas responsables para el bienestar animal"
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2070",
      title: "Cultivos Orgánicos",
      description: "Producción de alimentos saludables y naturales"
    },
    {
      url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2070",
      title: "Conservación Ambiental",
      description: "Protegiendo nuestros recursos naturales"
    },
    {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070",
      title: "Experiencias Únicas",
      description: "Conectando personas con la naturaleza"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#fddbbb] via-[#eef1f1] to-[#f8af5b] py-16 overflow-hidden">
      <div className="relative w-[90%] mx-auto overflow-hidden rounded-3xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '600px' }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative overflow-hidden group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{image.title}</h2>
                <p className="text-base md:text-lg opacity-90 drop-shadow-md">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center transition duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center transition duration-300"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 justify-center w-full z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full border-2 border-white transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50 scale-100'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
