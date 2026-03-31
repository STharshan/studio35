import React from 'react'
import FeaturesSection from '../components/NightClub/NightClubBanner'
import DjSection from '../components/NightClub/Layout'
import ThemeFeatures from '../components/NightClub/ThemeFeatures'
import PluginGrid from '../components/NightClub/PluginGrid'

const Nightclub = () => {
  return (
    <div>
      <FeaturesSection />
      <DjSection />
      <ThemeFeatures />
      <PluginGrid />
    </div>
  )
}

export default Nightclub
