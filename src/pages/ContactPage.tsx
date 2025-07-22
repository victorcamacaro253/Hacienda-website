import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
//import logo from '../../assets/images/img5.1.png';
import farmImage from '../../assets/images/img12.webp'; // Add this image

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  return (
    <div className={`min-h-screen  'text-white'}`}>
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <img 
          src={farmImage} 
          alt="Hacienda Villa Blanca" 
          className="w-full h-full object-cover brightness-75" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctenos</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Estamos aquí para responder sus preguntas sobre nuestros productos, tours y más
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Envíenos un Mensaje</h2>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                ¡Gracias por su mensaje! Nos pondremos en contacto pronto.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Su Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-green-200 mb-8">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">Información de Contacto</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="text-orange-500 mt-1 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Dirección</h3>
                    <p className="text-gray-600">Camino a San José de las Rosas, Km 12.5, Alajuela, Costa Rica</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 mt-1 mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Teléfonos</h3>
                    <p className="text-gray-600">+506 1234 5678 (Oficina)</p>
                    <p className="text-gray-600">+506 8765 4321 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 mt-1 mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Correo Electrónico</h3>
                    <p className="text-gray-600">info@haciendavillablanca.com</p>
                    <p className="text-gray-600">reservaciones@haciendavillablanca.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 mt-1 mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-orange-200">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Síganos</h2>
              
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/haciendavillablanca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                
                <a 
                  href="https://instagram.com/haciendavillablanca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                
                <a 
                  href="https://wa.me/50687654321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Boletín Informativo</h3>
                <p className="text-gray-600 mb-4">Suscríbase para recibir noticias sobre eventos especiales y ofertas</p>
                
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Su correo electrónico"
                    className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                  />
                  <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-r-lg transition"
                  >
                    Suscribir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 p-8 pb-0">Ubicación</h2>
          <p className="px-8 text-gray-600 mb-6">Visítenos en nuestra hacienda</p>
          
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982734575426!2d-84.2044859857201!3d9.93598087652042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3aa66f3a6a5%3A0x3b5065e5a0e4f5a5!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Mapa de ubicación de Hacienda Villa Blanca"
            ></iframe>
          </div>
          
          <div className="p-8">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Instrucciones para llegar</h3>
            <p className="text-gray-600">
              Desde San José, tome la carretera hacia Alajuela. Después del pueblo de San José de las Rosas,
              continúe 2km hasta ver nuestro letrero a la derecha. Estacionamiento gratuito disponible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};export default ContactPage;