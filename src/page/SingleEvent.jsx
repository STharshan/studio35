import React from 'react'
import SingleEventHero from '../components/SingleEvent/SingleEventHero'
import EventDetail from '../components/SingleEvent/BodySection'
import Scroll from '../components/SingleEvent/ScrollSection'
import UpcomingSingleEvent from '../components/SingleEvent/UpcomingSingleEvent'

const SingleEvent = () => {
  return (
    <div>
      <SingleEventHero />
      <EventDetail />
      <Scroll />
      <UpcomingSingleEvent />
    </div>
  )
}

export default SingleEvent
