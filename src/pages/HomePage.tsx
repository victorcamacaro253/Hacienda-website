import Carousel from '../components/Carousel';
import BlogSection from '../components/BlogSection';
import WhatWeDo from '../components/WhatWeDo';
import TestimonialsSection from '../components/TestimonialsSection';
import ImageCarousel from '../components/ImageCarousel';
import BreedsShowcase from '../components/BreedsShowcase';
import Map from '../components/Maps';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <WhatWeDo />
      <BlogSection />
      <TestimonialsSection />
      <ImageCarousel />
      <BreedsShowcase />
      <Map />
    </div>
  );
};

export default HomePage;
