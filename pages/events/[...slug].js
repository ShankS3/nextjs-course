import React, { Fragment } from 'react'
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/event/EventList';
import ResultsTitle from '../../components/event/ResultsTitle';
import Button from '../../components/common/Button';
import ErrorAlert from '../../components/common/ErrorAlert';

function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query;

  if(!Array.isArray(slug)) {
    return <p className='center'>Loading...</p>
  }

  const [year, month] = slug;

  if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return <ErrorAlert>Invalid filter! Please adjust your values!</ErrorAlert>
  }

  const filteredEvents = getFilteredEvents({year: +year, month: +month});

  if(filteredEvents.length < 1) {
    return (
      <ErrorAlert>No events found for selected dates!</ErrorAlert>
    )
  }

  const date = new Date(+year, +month-1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList list={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage;
