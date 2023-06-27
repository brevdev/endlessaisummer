import React, { useState } from 'react'
import { AltFooter } from '../Footer'
import { June } from '@/components/calendars/June'
import { July } from '@/components/calendars/July'
import { August } from '@/components/calendars/August'
import { Itinerary } from './Itinerary'
import { AIHeader } from '../Header'
import { Button } from '../Button'
import Table, { EventCard } from '../Table'
import Image from 'next/image'
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
  const [activeMonth, setActiveMonth] = useState('june')
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* <AIHeader /> */}
      <div className="mx-auto max-w-3xl">
        <div className="margin-auto pt-8">
          <h1 className="summertxt text-6xl font-bold text-white">
            Endless AI Summer
          </h1>

          <div className="mt-4 flex h-[100%] w-[100%] flex-row">
            <div className="mr-1 flex w-[50%] flex-col text-center">
              <SmallerHeader />
              {/* <h1 className="text-left text-5xl font-bold text-white">
                Monthly hackathons, beach bonfires, AI/ML office hours, show &
                tells.{' '}
              </h1> */}
              <br />
              {/* <p className="mt-4 text-left text-lg text-white">stuff here</p> */}
            </div>
            <div className="ml-1 w-[50%]">
              <h3 className=" text-right text-xl font-bold text-white">
                Next Event 👇
              </h3>
              <EventCard />

              <div className="flex flex-col">
                {/* <Image
                  // className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
                  src={Thumbnail.src}
                  className="mt-2"
                  alt=""
                  width={600}
                  height={600}
                  priority
                  unoptimized
                /> */}
                {/* <p>next up event goes here...</p>
                <ul>
                  <li>Next Hackathon: July 28</li>
                  <li>Next Bonfire: July 28</li>
                  <li>AI/ML Office Hours: July 28</li>
                  <li>Next Show & Tell: July 28</li>
                </ul> */}
                {/* <Table /> */}
              </div>
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
                setActiveMonth('june')
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
                setActiveMonth('july')
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
                setActiveMonth('august')
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
