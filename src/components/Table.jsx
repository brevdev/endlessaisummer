import React, { useState } from 'react'

const events = [
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
    imageUrl:
      'https://ik.imagekit.io/partiful/tr:f-auto,fo-auto,pr-true,w-920,dpr-auto/user/nxKjkOBrxng9Am9mIN8zI8Ucx8y1/e8CMjiGRAl67lLPw5BM2H',
  },
]

export function EventCard() {
  return (
    <ul role="list" className="mb-10">
      {[events[0]].map((event, item) => (
        <li
          key={item}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // semi-transparent white
            backdropFilter: 'blur(10px)', // blur the area behind the element
          }}
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={event.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {event.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              {/* <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{event.title}</dd> */}
              <dt className="sr-only">Description</dt>
              <dd className="text-sm text-gray-700">{event.description}</dd>
              <dt className="sr-only">Link</dt>
              <dd className="mt-4 text-sm text-gray-500 ">
                <a
                  href="event.link"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center justify-center text-cyan-600"
                >
                  Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function CondensedEventCard() {
  return (
    <ul role="list" className="mb-10">
      {[events[0]].map((event, item) => (
        <li
          key={item}
          className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg text-center shadow"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // semi-transparent white
            backdropFilter: 'blur(10px)', // blur the area behind the element
          }}
        >
          <div className="p-8">
            <img
              className="h-32 w-32 flex-shrink-0 rounded-full"
              src={event.imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col p-8">
            <h3 className="text-sm font-medium text-gray-900">{event.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              {/* <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{event.title}</dd> */}
              <dt className="sr-only">Description</dt>
              <dd className="text-sm text-gray-700">{event.description}</dd>
              <dt className="sr-only">Link</dt>
              <dd className="mt-4 text-sm text-gray-500 ">
                <a
                  href="event.link"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center justify-center text-cyan-600"
                >
                  Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-base font-semibold leading-6 text-white">
        All Events
      </h1>
      <div className="flow-root">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className="divide-y divide-gray-200 overflow-y-auto"
            style={{ maxHeight: '16rem' }} // Adjust according to your row size. I assumed 4rem for each row
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
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, item) => (
                  <tr key={item} className="border-b border-white">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {event.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                      {`${event.date} • ${event.time}`}
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="flex flex-row text-[#f79122] hover:text-[#f67a3e]"
                      >
                        Go to link
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="ml-2 h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
