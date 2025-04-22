import React, { useState } from 'react';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.webp';
import img12 from '../../assets/images/img12.webp';
import img13 from '../../assets/images/img13.webp';
import useInView from '../hooks/useView';
import Modal from '../components/Modal';

const timelineData = [
  { year: "1920", event: "Farm Founded", description: `En lo profundo de las colinas verdes que rodean el pintoresco pueblo de San José de las Rosas, se encuentra la Hacienda Villa Blanca. Desde hace más de un siglo, esta hacienda ha sido el corazón de la familia Ramírez.`, icon: "🌱" },
  { year: "1950", event: "First Barn Built", description: "The iconic barn was built, a key part of the farm's infrastructure.", icon: "🏚️" },
  { year: "1990", event: "Modernization", description: "The farm embraced new technologies to improve crop production.", icon: "🚜" },
  { year: "2020", event: "Farm Tours", description: "We opened our farm for tours, sharing our history with the community.", icon: "👨‍🌾" }
];

const HistoryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const isTimelineInView = useInView({ selector: '.timeline-section' });
  const isGalleryInView = useInView({ selector: '.gallery-section' });

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="font-sans text-gray-800 bg-[url('/src/assets/images/img8.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={img10} alt="Farm History" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Farm’s Legacy</h1>
          <p className="text-lg md:text-xl mb-6">From Generations of Hard Work to the Heart of Our Community</p>
          <a href="#timeline" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition">Explore Our History</a>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={`timeline-section px-4 py-20 ${isTimelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
        <h2 className="text-4xl font-bold text-center mb-12">Farm History</h2>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-green-500 rounded-full z-0"></div>

          {timelineData.map((item, index) => (
            <div key={index} className={`relative mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:items-start md:justify-start' : 'md:items-end md:justify-end'}`}>
              <div className={`w-full md:w-1/2 px-6 relative z-10`}>
                <div className={`absolute text-3xl top-2 -translate-y-2/4 ${index % 2 === 0 ? 'right-[-30px]' : 'left-[-30px]'} bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md`}>
                  {item.icon}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]">
                  <span className="block text-orange-400 font-bold text-xl mb-1">{item.year}</span>
                  <h3 className="text-2xl font-semibold mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`gallery-section px-4 py-20 bg-white ${isGalleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[img10, img11, img12, img13].map((img, idx) => (
            <div key={idx} onClick={() => handleImageClick(img)} className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <img src={img} alt={`Farm Image ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-orange-50 px-4">
        <h2 className="text-4xl font-bold mb-4">Join Our Legacy</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Discover more about our farm’s history and become part of the tradition.</p>
        <a href="/contact" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition">Contact Us</a>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
};

export default HistoryPage;
