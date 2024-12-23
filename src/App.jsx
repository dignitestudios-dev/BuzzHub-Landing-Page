import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import FaqSection from './components/FaqSection';
import FooterSection from "./components/FooterSection";
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        {/* Add a route for the Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Add other routes for your sections */}
        <Route path="/" element={
          <>
            {/* <Navbar /> */}
            <HeroSection />
            <FeatureSection />
            <HowItWorks />
            <AboutUs />
            <Testimonials />
            <DownloadSection />
            <FaqSection />
            <FooterSection />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
