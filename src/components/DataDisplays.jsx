import React, { useState, useEffect } from 'react';
import bonfire from '@/images/events/bonfire.png'
import showandtell from '@/images/events/showandtell.png'
import hackathon from '@/images/events/hackathon.png'
import { DiamondIcon } from '@/components/DiamondIcon'
import axios from 'axios';


const formatEventDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const EventCard = ({ event, key}) => {
  return (
    <li
      key={key}
      className="col-span-1 flex cursor-pointer flex-col divide-y divide-gray-200 rounded-lg text-center shadow"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // semi-transparent white
        backdropFilter: 'blur(10px)', // blur the area behind the element
      }}
      onClick={() => window.open(event.link, '_blank')}
    >
      <div className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          src={event.imageUrl[0].url}
          alt=""
        />
        <h3 className="mt-6 flex flex-row items-center justify-center text-sm font-medium text-gray-900">
          {event.name}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mb-1 ml-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </h3>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-[#ec0d7f] sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4 font-bold">
            <p>
              <time dateTime="2022-04-06">{formatEventDate(event.date)}</time>
            </p>
          </div>
        </div>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-sm text-gray-700">{event.description}</dd>
        </dl>
      </div>
    </li>
  )
}

export const PreviewEventCard = ({ event }) => {
  return (
    <li
      className="col-span-1 flex cursor-pointer divide-y divide-gray-200 rounded-lg text-left shadow"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // semi-transparent white
        backdropFilter: 'blur(10px)', // blur the area behind the element
      }}
      onClick={() => window.open(event.link, '_blank')}
    >
      <img
        className="m-4 h-20 w-20 flex-shrink-0 rounded-full"
        src={event.imageUrl[0].url}
        alt=""
      />
      <div className="flex-1 p-4">
        <h3 className="flex items-center text-sm font-medium text-gray-900">
          {event.name}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mb-1 ml-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </h3>
        <p>
          <time dateTime="2022-04-06">{formatEventDate(event.date)}</time>
        </p>
        <dl className="mt-2">
          <dt className="sr-only">Description</dt>
          <dd className="text-sm text-gray-700">{event.description}</dd>
        </dl>
      </div>
    </li>
  )
}
const Table = (props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-base font-semibold leading-6 text-white">
        All Events
      </h1>
      <div className="flow-root">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className="divide-y divide-gray-200 overflow-y-auto"
            style={{ maxHeight: '16rem' }} 
          >
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.events.map((event, item) => (
                  <tr key={item} className="border-b border-white">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {event.name}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-white sm:table-cell">
                      {formatEventDate(event.date)}
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row text-[#f79122] hover:text-[#f67a3e]"
                      >
                        Go to link
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="ml-2 h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Table;
