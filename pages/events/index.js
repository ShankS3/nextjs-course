import React from 'react'

import EventList from '../../components/event/EventList';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
  const allEvents = getAllEvents();
  return (
    <div>
      <h1>All Events</h1>
      <EventList list={allEvents} />
    </div>
  )
}

export default EventsPage;
