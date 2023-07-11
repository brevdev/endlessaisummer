import React, { useEffect } from 'react'
import { PreviewEventCard } from '../DataDisplays'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Itinerary = ({ events, month, show, onMouseEnter, onMouseLeave }) => {
  console.log('Events:', events);
  console.log('Month:', month);

  const eventsForMonth = events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.toLocaleString('default', { month: 'long' });
    return eventMonth.toLowerCase() === month.toLowerCase();
  });
  
  console.log('Events for Month:', eventsForMonth);

  return (
    <div
      className={classNames(
        `gradient2 shadow`,
        'absolute top-[300px] rounded-2xl px-10 py-10 transition-all duration-300',
        show ? 'visible' : 'hidden'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {eventsForMonth.length > 0 ? (
        eventsForMonth.map((event, i) => (
          <PreviewEventCard key={i} event={event} />
        ))
      ) : (
        <p className="py-4 text-sm text-white">
          Dates and location are being decided 🫡
        </p>
      )}
    </div>
  );
};
