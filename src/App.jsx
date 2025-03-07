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
import PrivacyPolicyPhone from "./components/PrivacyPolicyPhone";
import TermsandConditionsPhone from "./components/TermsandConditionsPhone";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add a route for the Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy2" element={<PrivacyPolicyPhone />} />
        <Route
          path="/termsandconditions2"
          element={<TermsandConditionsPhone />}
        />

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
