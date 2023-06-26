import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import celo from '@/images/celo.png'
import roboflow from '@/images/roboflowwhite.png'
import brev from '@/images/logo_dark_mode.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Probably March, perhaps February {new Date().getFullYear()} | Brought
          to you by <a>Brev.dev</a> and <a>CELO</a>
        </p>
      </Container>
    </footer>
  )
}

export function AltFooter() {
  return (
    <div
      className="mt-10 flex w-full flex-col items-center justify-center pt-8 sm:pt-8 lg:px-8 lg:pt-8"
      aria-labelledby="footer-heading"
    >
      <div className="flex flex-row items-center justify-center">
        <Image
          // className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={brev.src}
          alt=""
          width={50}
          height={50}
          priority
          unoptimized
        />
        <p className="mx-1 mt-2 text-white">• </p>
        <Image
          // className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={roboflow.src}
          className="mt-2"
          alt=""
          width={70}
          height={70}
          priority
          unoptimized
        />
        {/* <a href="https://metaphor.systems" target="_blank" rel="no_referrer">
          <p className="font-ibm-plex-mono mx-1 mb-2 mt-2 text-2xl text-white">
            Metaphor
          </p>
        </a> */}
        <p className="mx-1 mt-2 text-white">• </p>
        <Image
          // className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={celo.src}
          className="mt-2"
          alt=""
          width={50}
          height={50}
          priority
          unoptimized
        />
      </div>
      <p className="text-sm leading-6 text-gray-600">
        <div className=" h-full w-full text-center text-white">
          ENDLESS AI SUMMER ™️ • HELLA IN-PERSON IN SAN FRANCISCO
        </div>
      </p>
    </div>
  )
}
