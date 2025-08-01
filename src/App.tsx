import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import HistoryPage from './components/history';
import HistoryPage from './pages/HistoryPage';

import BreedsDetails from './pages/BreedsDetails';
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/HomePage';
import PartnersPage from './pages/Partnerships';
import ContactPage from './pages/ContactPage';
import ToursPage from './pages/tourPage';

const App = () => {
  

  return (
    <Router>
      <Header  />
   

      {/* Define Routes for different pages */}
      <Routes>
        {/* Default route (Home page) */}

        <Route path="/" element={<HomePage />} />
        {/* Route for HistoryPage */}
        <Route path="/history" element={<HistoryPage />} />

       <Route path='/breeds' element={<BreedsDetails/>} />

       <Route path="/partners" element={<PartnersPage />} />
        
       <Route path="/contact" element={<ContactPage />} />

       <Route path="/tours" element={<ToursPage />} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;