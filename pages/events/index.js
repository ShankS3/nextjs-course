import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/event/EventList';
import EventSearch from '../../components/event/EventSearch';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <Fragment>
      <h1>All Events</h1>
      <EventSearch onSearch={findEventsHandler} />
      <EventList list={allEvents} />
    </Fragment>
  )
}

export default EventsPage;
