import React, { Fragment } from 'react'
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/event/EventList';

function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query;

  if(slug.length < 1) {
    return <p className='center'>Loading...</p>
  }

  const [year, month] = slug;

  if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return <p className='center'>Invalid filter! Please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({year: +year, month: +month});

  if(filteredEvents.length < 1) {
    return <p className='center'>No events found for selected dates!</p>
  }

  return (
    <Fragment>
      <EventList list={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage;
