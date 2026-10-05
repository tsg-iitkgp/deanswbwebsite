import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AlertOctagon } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ComplaintModal from './components/ComplaintModal';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import SupportServicesPage from './pages/SupportServicesPage';
import QuickLinksPage from './pages/QuickLinksPage';
import EmergencyContactsPage from './pages/EmergencyContactsPage';

function App() {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/support" element={<SupportServicesPage />} />
        <Route path="/quick-links" element={<QuickLinksPage />} />
        <Route path="/emergency-contacts" element={<EmergencyContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      <button
        onClick={() => setIsComplaintOpen(true)}
        className="btn complaint-button"
      >
        <AlertOctagon size={20} /> Register a Complaint
      </button>
      <ComplaintModal isOpen={isComplaintOpen} onClose={() => setIsComplaintOpen(false)} />
    </Router>
  );
}

export default App;
