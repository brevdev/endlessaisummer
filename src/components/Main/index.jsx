import React, { useState } from 'react'
import { AltFooter } from '../Footer'
import { June } from '@/components/calendars/June'
import { July } from '@/components/calendars/July'
import { August } from '@/components/calendars/August'
import { Itinerary } from './Itinerary'
import { AIHeader } from '../Header'
import { Button } from '../Button'
import Table, { EventCard, events } from '../DataDisplays'
// import Image from 'next/image'
import Thumbnail from '@/images/newthumbnail.png'

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

const Main = () => {
  const [showItinerary, setShowItinerary] = useState(false)
  const [activeMonth, setActiveMonth] = useState('June')
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
                {[events[0]].map((event, item) => (
                  <EventCard key={item} event={event} />
                ))}
              </ul>

              <div className="flex flex-col"></div>
            </div>
          </div>
          <div className="flex w-[100%] flex-row items-center justify-start">
            <Itinerary
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
              href="https://forms.gle/HGkFjKTdJWYzUw7F6"
              className={'hover:bg-[#f56f48]'}
            >
              Submit an Event 🤙
            </Button>
          </div>
        </div>
        <AltFooter />
        <hr className="my-10" />
        <Table />
      </div>
    </div>
  )
}

export default Main
