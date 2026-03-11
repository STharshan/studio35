import React from 'react'
import EventsHero from '../components/Event/EventHero'
import UpcomingEvents from '../components/Event/UpcomingEvent'
import PastEvents from '../components/Event/PastEvent'

const Event = () => {
  return (
    <div>
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
    </div>
  )
}

export default Event
