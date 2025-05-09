import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./Pages/Home";
import OurExpertise from "./Pages/OurExpertise";
import About from "./Pages/About";
import Properties from "./Pages/Properties";
import Contact from "./Pages/Contact";
import LatestInsights from "./Pages/latest-insights";
import InsightDetail from "./Pages/InsightDetail";
import PrimeAdvantage from "./Pages/PrimeAdvantage"; // Prime Advantage Page
import PrimeLeadership from "./Pages/PrimeLeadership"; // Prime Leadership Page
import CorporateSustainability from "./Pages/CorporateSustainability"; // Corporate Sustainability Page
import AwardsAndRecognition from "./Pages/AwardsAndRecognition";
import PressRoom from "./Pages/PressRoom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Our Expertise Page */}
          <Route path="/our-expertise" element={<OurExpertise />} />

          {/* About Us Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/prime-advantage" element={<PrimeAdvantage />} />
          <Route path="/about/prime-leadership" element={<PrimeLeadership />} />
          <Route
            path="/about/sustainability"
            element={<CorporateSustainability />}
          />
          <Route path="/about/awards" element={<AwardsAndRecognition />} />
          <Route path="/about/press-room" element={<PressRoom />} />

          {/* Properties Page */}
          <Route path="/properties" element={<Properties />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Insights Pages */}
          <Route path="/latest-insights" element={<LatestInsights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;