import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/img6.webp';
import img2 from '../../assets/images/img7.webp';
import img3 from '../../assets/images/img8.png';
import img4 from '../../assets/images/img9.png';
import Thumbnail from './thumbnail';

const Carousel = () => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const carouselRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const carouselItems = [
        {
            img: img1,
            thumbnail: img1,
            author: 'HACIENDA VILLA BLANCA',
            topic: 'GANADERÍA',
            description: 'Principales criadores de Ganado Raza Carora',
            path: '/livestock'
        },
        {
            img: img2,
            thumbnail: img2,
            author: 'HACIENDA VILLA BLANCA',
            topic: 'AGRICULTURA',
            description: 'Cultivos orgánicos de la más alta calidad',
            path: '/agriculture'
        },
        {
            img: img3,
            thumbnail: img3,
            title: 'Una vida dedicada a la ganadería',
            author: 'TRADICIÓN FAMILIAR',
            topic: 'HISTORIA',
            description: 'Conoce nuestra trayectoria y valores',
            path: '/history'
        },
        {
            img: img4,
            thumbnail: img4,
            title: 'Producción de Queso Artesanal',
            author: 'PRODUCTOS LÁCTEOS',
            topic: 'DELICATESSEN',
            description: 'Elaborados con leche de nuestra propia ganadería',
            path: '/products'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextButton = nextRef.current;
        const prevButton = prevRef.current;
        const carousel = carouselRef.current;

        const showSlider = (type) => {
            if (type === 'next') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            } else {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
            }

            carousel.classList.add(type);
            setTimeout(() => {
                carousel.classList.remove(type);
            }, timeRunning);
        };

        nextButton.onclick = () => showSlider('next');
        prevButton.onclick = () => showSlider('prev');

        const autoNext = setInterval(() => {
            showSlider('next');
        }, timeAutoNext);

        return () => clearInterval(autoNext);
    }, [carouselItems.length]);

    return (
        <div 
            ref={carouselRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Progress bar with smoother animation */}
            <div 
                className="absolute top-0 left-0 z-[1000] h-[3px] bg-[#f1683a] w-full"
                key={currentIndex} // Force re-animation on slide change
                style={{
                    animation: `runningTime ${timeAutoNext}ms linear infinite`,
                    transformOrigin: 'left center'
                }}
            />

            {/* Slides with optimized image loading */}
            {carouselItems.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full  duration-1000 ease-linear ${
                        index === currentIndex ? 'opacity-150 z-20' : 'opacity-1 z-10'
                    }`}
                >
                    <img 
                        src={item.img} 
                        alt={`Slide ${index + 1}`} 
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-black/1" />
                    
                    {/* Enhanced content container */}
                    <div className="absolute top-[25%] left-1/2 w-full max-w-[1200px] -translate-x-1/2 px-8 pb-[180px] md:pb-[220px] text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                        <div className="font-bold tracking-[5px] text-sm md:text-base mb-2 uppercase">
                            {item.author}
                        </div>
                        {item.title && (
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                                {item.title}
                            </h2>
                        )}
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f1683a] mb-4">
                            {item.topic}
                        </h3>
                        <p className="text-base md:text-lg max-w-[600px] mb-6 line-clamp-2">
                            {item.description}
                        </p>
                        <div className="flex gap-4">
                            {item.path && (
                                <Link 
                                    to={item.path}
                                    className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1683a] rounded-md"
                                >
                                    <button 
                                        className="bg-[#f1683a] text-white px-6 py-3 text-sm md:text-base border-2 border-white rounded-md shadow-md transition-all duration-300 hover:bg-white hover:text-[#f1683a] hover:border-[#f1683a] hover:-translate-y-1 hover:shadow-lg"
                                        aria-label={`Ver más sobre ${item.topic}`}
                                    >
                                        VER MÁS
                                    </button>
                                </Link>
                            )}
                            <button 
                                className="bg-transparent text-white px-6 py-3 text-sm md:text-base border border-white rounded-md transition-all duration-300 hover:bg-white hover:text-[#f1683a] hover:border-[#f1683a] hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1683a]"
                                aria-label="Contactar"
                            >
                                CONTÁCTANOS
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Thumbnail component */}
            <Thumbnail 
                items={carouselItems} 
                currentIndex={currentIndex}
            />

            {/* Enhanced navigation buttons */}
            <div className="absolute bottom-[calc(50px+50px)] left-1/4 transform -translate-x-1/2 z-30 flex gap-4">
                <button 
                    ref={prevRef}
                    className="w-12 h-12 rounded-full bg-white/25 text-white font-bold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1683a]"
                    aria-label="Diapositiva anterior"
                >
                    &lt;
                </button>
                <button 
                    ref={nextRef}
                    className="w-12 h-12 rounded-full bg-white/25 text-white font-bold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1683a]"
                    aria-label="Diapositiva siguiente"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;