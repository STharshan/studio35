// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import TicketPage from "./page/TicketPage";
import SingleEvent from "./page/SingleEvent";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/Privacy";
import GDPRConsent from "./components/GDPRButton";
import About from "./page/About";
import Nightclub from "./page/Nightclub";
import Gallery from "./page/Gallery";
import FindSpot from "./page/FindSpot";
import WhatOn from "./page/Event";

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
      <ScrollToHash />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/night-club" element={<Nightclub />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/find-the-spot" element={<FindSpot />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/What’s-On" element={<WhatOn />} />
        <Route path="/single-event" element={<SingleEvent />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
