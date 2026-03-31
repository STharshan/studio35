import FeaturesSection from '../components/NightClub/NightClubBanner'
import DjSection from '../components/NightClub/Layout'
import ThemeFeatures from '../components/NightClub/ThemeFeatures'
import PluginGrid from '../components/NightClub/PluginGrid'
import Hero from '../components/NightClub/NightClubHero'
import BrowserCompatibility from '../components/NightClub/BrowserCompatibility'
import ColorCustomizer from '../components/NightClub/ColorCustomizer'

const Nightclub = () => {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <DjSection />
            <ThemeFeatures />
            <PluginGrid />
            <BrowserCompatibility />
            <ColorCustomizer />
        </div>
    )
}

export default Nightclub
