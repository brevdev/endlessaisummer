import React from 'react'
import { AltFooter } from '../Footer'

const Main = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="margin-auto pt-8">
          <h1 className="text-6xl font-bold text-white">Endless AI Summer</h1>
          {/* Import an image from this folder */}
          {/* <img
            src={oldApple}
            alt="Lost Empires"
            className="mt-4 h-[100%] w-[100%]"
          /> */}
          <div className="mt-4 flex h-[100%] w-[100%] flex-row">
            <div className="mr-1 flex w-[50%] flex-col text-center">
              <h1 className="text-left text-5xl font-bold text-white">
                Monthly hackathons, beach bonfires, AI/ML office hours.{' '}
              </h1>
              <p className="mt-4 text-left text-lg text-white"></p>
            </div>
            <div className="ml-1 w-[50%]">
              <div className="flex flex-col">
                {/* <img
                  src={qrCode}
                  alt="Lost Empires"
                  className="mt-[10%] w-[100%]"
                /> */}
                <span
                  className="cursor-pointer text-center font-bold text-cyan-500"
                  onClick={() =>
                    window.open('https://forms.gle/4ZsMfAyKxTUDfCPaA')
                  }
                >
                  scan to request an invite
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 h-full w-full text-right text-white">
            ENDLESS AI SUMMER ™️ • INTENSELY NON-REMOTE IN SAN FRANCISCO
          </div>
        </div>
        <AltFooter />
      </div>
    </div>
  )
}

export default Main
