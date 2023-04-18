import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/eventDetail/EventSummary';
import EventContent from '../../components/eventDetail/EventContent';
import EventLogistics from '../../components/eventDetail/EventLogistics';
import ErrorAlert from '../../components/common/ErrorAlert';

function EventDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const event = getEventById(id);

  if(!event) {
    return <ErrorAlert>No event found !</ErrorAlert>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailsPage;
