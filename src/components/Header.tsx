import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useHeaderStyle from '../hooks/useHeaderStyle';
import logo from '../../assets/images/img5.1.png';

const Header = () => {
  const { isDarkBackground } = useHeaderStyle();
  const [scrolled, setScrolled] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-[140px] md:h-[120px] z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#fc764d] to-[#ff8a5c] shadow-lg  ' 
          : 'bg-transparent'
      } ${isDarkBackground ? 'text-black' : 'text-white'}`}
    >
      <div className="max-w-7xl mx-auto mt-1 px-6 md:px-12 h-full flex items-center justify-between">
        
        {/* Logo with better centering */}
        <div className="absolute left-1/4 mt-2 transform -translate-x-1/2">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-40 h-auto transition-transform duration-300 hover:scale-105" 
          />
        </div>

        {/* Enhanced Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          {[
                { path: "/", name: "Inicio" },
                { path: "/about", name: "Nuestra Finca" },
                { path: "/products", name: "Productos" },
                { path: "/tours", name: "Tours" },
                { path: "/history", name: "Historia" },
                { path: "/contact", name: "Contacto" }
              ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 
                hover:bg-white/10 hover:scale-105 text-lg font-medium
                ${isDarkBackground ? 'text-black' : 'text-white'} 
                [text-shadow:_1px_1px_2px_rgba(0,0,0,0.6)]`}
              
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Improved Mobile Menu */}
        <div className="md:hidden ml-auto">
            
            <button 
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
        </div>
      </div>


       
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/90 z-40 pt-40 px-6">
              <button
              className="absolute top-6 right-6 text-white text-4xl z-50 hover:text-orange-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              &times;
            </button>
            <nav className="flex flex-col space-y-6 text-center">
              {[
                { path: "/", name: "Inicio" },
                { path: "/about", name: "Nuestra Finca" },
                { path: "/products", name: "Productos" },
                { path: "/tours", name: "Tours" },
                { path: "/history", name: "Historia" },
                { path: "/contact", name: "Contacto" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-2xl text-white py-3 hover:text-orange-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

    </header>
  );
};

export default Header;