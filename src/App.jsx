// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import TicketPage from "./page/TicketPage";

//import Footer from "./components/Footer";
//import ScrollToTop from "./components/ScrollToTop";
//import GDPRBanner from "./components/GDPRBanner";
//import Home from "./page/Home";
//import TermsConditions from "./components/Term";
//import PrivacyPolicy from "./components/PrivacyPolicy";
//import ScrollToHash from "../src/components/ScrollToHash"

function App() {
  useEffect(() => {
    // Initialize AOS once at app root
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <Router>
        {/* <ScrollToHash />
      <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<TicketPage />} />
        {/* <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
      {/* <GDPRBanner /> */}
    </Router>
  );
}

export default App;
