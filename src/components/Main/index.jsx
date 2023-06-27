import React, { useState } from 'react'
import { AltFooter } from '../Footer'
import { June } from '@/components/calendars/June'
import { July } from '@/components/calendars/July'
import { August } from '@/components/calendars/August'
import { Itinerary } from './Itinerary'
import { AIHeader } from '../Header'
import { Button } from '../Button'
import Table from '../Table'

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
              <div className="flex flex-col">
                <p>next up event goes here...</p>
                <Table />
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
        <Table />
      </div>
    </div>
  )
}

export default Main
