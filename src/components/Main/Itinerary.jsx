import React, { useEffect } from 'react'
import { PreviewEventCard, events } from '../Table'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Itinerary = (props) => {
  return (
    <>
      <div
        className={classNames(
          // `gradient2 shadow`,
          'absolute top-[300px] h-[300px] rounded-2xl px-10 py-10 transition-all duration-300',
          props.show ? 'visible' : 'hidden'
        )}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {events.map((event, i) => {
          if (event.date.includes(props.month)) {
            return <PreviewEventCard key={i} event={event} />
          }
        })}

        {/* <ul>
          {itinerary[props.month].map((event, i) => (
            <li
              key={i}
            >{`${event.name} • ${event.date} • ${event.location}`}</li>
          ))}
        </ul> */}
      </div>
    </>
  )
}
