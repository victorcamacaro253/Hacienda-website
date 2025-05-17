import { FaArrowUp, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/images/img5.1.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#2c3e50] to-[#4a6491] text-white pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img 
              src={logo} 
              alt="Hacienda Villa Blanca" 
              className="h-16 w-auto" 
            />
          </div>
          <p className="text-sm text-gray-200 mb-4">
            Desde 1920, cultivando tradición y calidad en el corazón de Costa Rica. 
            Nuestra pasión por la tierra y el café nos define.
          </p>
          <div className="flex space-x-4 text-xl">
            <a 
              href="https://facebook.com/haciendavillablanca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://instagram.com/haciendavillablanca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/50687654321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-orange-400">
            Navegación
          </h3>
          <nav className="space-y-3 text-sm">
            <a 
              href="/" 
              className="block text-gray-200 hover:text-orange-300 transition-colors"
            >
              Inicio
            </a>
            <a 
              href="/history" 
              className="block text-gray-200 hover:text-orange-300 transition-colors"
            >
              Nuestra Historia
            </a>
            <a 
              href="/products" 
              className="block text-gray-200 hover:text-orange-300 transition-colors"
            >
              Nuestros Productos
            </a>
            <a 
              href="/tours" 
              className="block text-gray-200 hover:text-orange-300 transition-colors"
            >
              Tours y Experiencias
            </a>
            <a 
              href="/contact" 
              className="block text-gray-200 hover:text-orange-300 transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-orange-400">
            Contacto
          </h3>
          <div className="space-y-4 text-sm text-gray-200">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-orange-300" />
              <p>Camino a San José de las Rosas, Km 12.5, Alajuela, Costa Rica</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-3 text-orange-300" />
              <p>+506 1234 5678</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-orange-300" />
              <p>info@haciendavillablanca.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-orange-400">
            Boletín Informativo
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            Suscríbase para recibir noticias sobre eventos especiales y ofertas
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Su correo electrónico"
              required
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hacienda Villa Blanca. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Política de Privacidad</a>
            <a href="/terms" className="hover:text-orange-300 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-1 z-50"
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;