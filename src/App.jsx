import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import DownloadSection from "./components/DownloadSection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsandConditions from "./components/TermsandConditions";
import PrivacyPolicy2 from "./components/PrivacyPolicy2";
import TermsandConditions2 from "./components/TermsandConditions2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add a route for the Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy2" element={<PrivacyPolicy2 />} />
        <Route path="/termsandconditions2" element={<TermsandConditions2 />} />

        {/* Add other routes for your sections */}
        <Route
          path="/"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
