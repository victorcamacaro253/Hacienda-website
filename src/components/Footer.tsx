import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaPaw } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#2c3e50] to-[#4a6491] text-white py-10 relative shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/20 relative">
            Stay Updated
            <span className="block w-12 h-0.5 bg-green-500 absolute bottom-[-2px] left-0"></span>
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            Subscribe to our newsletter for the latest cat news and tips
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="px-4 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition-all"
            >
              Subscribe <FaPaw className="text-sm" />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/20 relative">
            Quick Links
            <span className="block w-12 h-0.5 bg-green-500 absolute bottom-[-2px] left-0"></span>
          </h3>
          <nav className="flex flex-col gap-3 text-sm text-gray-200">
            <a href="/" className="hover:text-green-400 transition-all">Home</a>
            <a href="/history" className="hover:text-green-400 transition-all">History</a>
            <a href="/breeds" className="hover:text-green-400 transition-all">Breeds</a>
            <a href="/contact" className="hover:text-green-400 transition-all">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-green-400 transition-all">Privacy Policy</a>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/20 relative">
            Follow Us
            <span className="block w-12 h-0.5 bg-green-500 absolute bottom-[-2px] left-0"></span>
          </h3>
          <div className="flex gap-4 text-xl text-gray-200">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 pt-10 mt-10 border-t border-white/10">
        &copy; {new Date().getFullYear()} Victor Camacaro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
