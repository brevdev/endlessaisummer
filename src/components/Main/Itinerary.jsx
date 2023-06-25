import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const itinerary = {
  june: [
    {
      date: 'june 26, 2023',
      name: 'bonfire',
      location: 'ocean beach',
    },
  ],
  july: [
    {
      date: 'july 07, 2023',
      name: 'ml/ai office hours',
      location: 'dkkdd',
    },
    {
      date: 'july 19, 2023',
      name: 'hackathon',
      location: 'celo <3',
    },
    {
      date: 'july 26, 2023',
      name: 'bonfire',
      location: 'ocean beach',
    },
  ],
  august: [
    {
      date: 'august 07, 2023',
      name: 'ml/ai office hours',
      location: 'dkkdd',
    },
    {
      date: 'august 19, 2023',
      name: 'hackathon',
      location: 'celo <3',
    },
    {
      date: 'august 26, 2023',
      name: 'bonfire',
      location: 'ocean beach',
    },
  ],
}

export const Itinerary = (props) => {
  return (
    <>
      <div
        className={classNames(
          'gradient2 absolute top-[300px] h-[300px] rounded-2xl px-10 py-10 transition-all duration-300',
          props.show ? 'visible' : 'hidden'
        )}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <ul>
          {itinerary[props.month].map((event, i) => (
            <li
              key={i}
            >{`${event.name} • ${event.date} • ${event.location}`}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
