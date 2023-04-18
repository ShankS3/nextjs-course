import React, { Fragment } from 'react'

import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
  const allEvents = getAllEvents();
  return (
    <Fragment>
      <h1>All Events</h1>
      <EventSearch />
      <EventList list={allEvents} />
    </Fragment>
  )
}

export default EventsPage;
