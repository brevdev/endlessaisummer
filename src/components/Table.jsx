import React, { useState } from 'react'

const events = [
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
  },
  {
    name: 'AI Hack & Tell',
    description:
      'hack & tell, mostly in AI. (un)finished projects from cool people. Food, too! (thanks roboflow)',
    date: 'Wednesday, June 28',
    time: '6:30pm',
    link: 'https://partiful.com/e/ZfhNESAwDjRQp9QINPa2',
  },
]

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-base font-semibold leading-6 text-white">
        All Events
      </h1>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                  >
                    Name
                  </th>
                  {/* <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Description
                  </th> */}
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map((event, item) => (
                  <tr key={item}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {event.name}
                    </td>
                    {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {event.description}
                    </td> */}
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                      {`${event.date} • ${event.time}`}
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="flex flex-row text-[#f79122] hover:text-[#f67a3e]"
                      >
                        Go to link<span className="sr-only"></span>
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
