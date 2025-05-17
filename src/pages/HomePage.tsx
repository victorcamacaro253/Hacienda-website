import Carousel from '../components/Carousel';
import BlogSection from '../components/BlogSection';
import WhatWeDo from '../components/WhatWeDo';
import TestimonialsSection from '../components/TestimonialsSection';
import ImageCarousel from '../components/ImageCarousel';
import BreedsShowcase from '../components/BreedsShowcase';
//import Map from '../components/Maps';
import LocationMap from '../components/LocationMap';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <WhatWeDo />
      <BlogSection />
      <TestimonialsSection />
      <ImageCarousel />
      <BreedsShowcase />
      <LocationMap
        location="Camino a San José de las Rosas, Km 12.5, Alajuela, Costa Rica"
        title="Ubicación de nuestra hacienda"
        description="Visítenos y disfrute de nuestras instalaciones"
        className="mt-16"
        instructions="Desde San José, tome la carretera hacia Alajuela. Después del pueblo de San José de las Rosas, continúe 2km hasta ver nuestro letrero a la derecha."
      />
    </div>
  );
};

export default HomePage;
