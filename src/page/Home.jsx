import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServicesSection from '../components/Home/ServicesSection'
import GallerySection from '../components/GallerySection'
import UpcomingEvents from '../components/Home/Event'
import ContactSection from '../components/ContactSection'
import FindUs from '../components/FindSpot/Findus'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <UpcomingEvents />
      <ContactSection />
      <FindUs />
    </div>
  )
}

export default Home
