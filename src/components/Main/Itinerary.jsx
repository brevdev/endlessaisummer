import React, { useEffect } from 'react'
import { PreviewEventCard, events } from '../DataDisplays'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Itinerary = (props) => {
  const eventsForMonth = events.filter((event) =>
    event.date.includes(props.month)
  )

  return (
    <div
      className={classNames(
        `gradient2 shadow`,
        'absolute top-[300px] rounded-2xl px-10 py-10 transition-all duration-300',
        props.show ? 'visible' : 'hidden'
      )}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
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
  )
}
