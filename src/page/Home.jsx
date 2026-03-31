import React from 'react'
import Header from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServicesSection from '../components/Home/ServicesSection'
import GallerySection from '../components/GallerySection'
import UpcomingEvents from '../components/Home/Event'
import ContactSection from '../components/ContactSection'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <UpcomingEvents />
      <ContactSection />
    </div>
  )
}

export default Home
