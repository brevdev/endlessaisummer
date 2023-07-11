import React, { useState, useEffect } from 'react'
import { AltFooter } from '../Footer'
import { June } from '@/components/calendars/June'
import { July } from '@/components/calendars/July'
import { August } from '@/components/calendars/August'
import { Itinerary } from './Itinerary'
import { AIHeader } from '../Header'
import { Button } from '../Button'
import Table, { EventCard } from '../DataDisplays'
import axios from 'axios'

const text =
  'Monthly hackathons, beach bonfires, AI/ML office hours, show & tells.'

function SmallerHeader() {
  const words = text.split(' ')

  return (
    <h1 className="text-left font-bold text-white">
      {words.map((word, i) => (
        <span style={{ fontSize: `${Math.max(20, 50 - i * 2)}px` }} key={i}>
          {word}{' '}
        </span>
      ))}
    </h1>
  )
}

export const Main = () => {
  const [showItinerary, setShowItinerary] = useState(false)
  const [activeMonth, setActiveMonth] = useState('June')
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://api.airtable.com/v0/appCoOEelosJXhxo0/Events',
          {
            headers: {
              Authorization: 'Bearer keyg6PY9UYBh1QfQ4',
            },
            params: {
              filterByFormula: 'approved = 1',
            },
          }
        );
        setEvents(response.data.records.map(record => {
          const { fields } = record;
          return {
            name: fields.name,
            description: fields.description,
            date: fields.date,
            link: fields.link,
            imageUrl: fields.imageUrl,
          };
        }));
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("test", events);
  }, [events]);

  const currentDate = new Date().toISOString().split('T')[0];
  const sortedEvents = events.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });
  const nextEvent = sortedEvents.find((event) => event.date > currentDate);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* <AIHeader /> */}
      <div className="mx-auto max-w-3xl">
        <div className="margin-auto pt-8">
          <h1 className="summertxt text-6xl font-bold text-white">
            Endless AI Summer
          </h1>

          <div className="mt-4 flex h-[100%] w-[100%] flex-col sm:flex-row">
            <div className="mr-1 w-full flex-col text-center sm:w-[50%]">
              <SmallerHeader />
              <br />
            </div>
            <div className="ml-1 mt-4 w-full sm:mt-0 sm:w-[50%]">
              <h3 className=" text-right text-xl font-bold text-white">
                Next Event 👇
              </h3>
              <ul role="list" className="mb-10">
                {nextEvent && (
                  <EventCard key={nextEvent.id} event={nextEvent} />
                )}
              </ul>
              <div className="flex flex-col"></div>
            </div>
          </div>
          <div className="flex w-[100%] flex-row items-center justify-start">
            <Itinerary
              events={events}
              month={activeMonth}
              show={showItinerary}
              onMouseEnter={() => {
                setShowItinerary(true)
              }}
              onMouseLeave={() => {
                setShowItinerary(false)
              }}
            />
          </div>
          <div className="flex w-[100%] flex-row items-center justify-start">
            <div
              className="w-1/3"
              onMouseEnter={() => {
                setActiveMonth('June')
                setShowItinerary(true)
              }}
              onMouseLeave={() => {
                setShowItinerary(false)
              }}
            >
              <June />
            </div>
            <div
              className="ml-4 w-1/3"
              onMouseEnter={() => {
                setActiveMonth('July')
                setShowItinerary(true)
              }}
              onMouseLeave={() => {
                setShowItinerary(false)
              }}
            >
              <July />
            </div>
            <div
              className="ml-4 w-1/3"
              onMouseEnter={() => {
                setActiveMonth('August')
                setShowItinerary(true)
              }}
              onMouseLeave={() => {
                setShowItinerary(false)
              }}
            >
              <August />
            </div>
          </div>
          <div className="mt-5 flex w-full flex-row items-center justify-center">
            <Button
              href="https://airtable.com/shrTtrBUABL5Tk4Q4"
              className={'hover:bg-[#f56f48]'}
            >
              Submit an Event 🤙
            </Button>
          </div>
        </div>
        <AltFooter />
        <hr className="my-10" />
        <Table events={events}/>
      </div>
    </div>
  )
}

export default Main
