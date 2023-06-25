import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import Brevlogo from '@/images/logos/brev.png'
import Celologo from '@/images/logos/celo.jpg'

const sponsors = [
  { name: 'Brev.dev', logo: Brevlogo },
  { name: 'Celo', logo: Celologo },
  // { name: 'Transistor', logo: logoTransistor },
  // { name: 'Tuple', logo: logoTuple },
  // { name: 'StaticKit', logo: logoStaticKit },
  // { name: 'Mirage', logo: logoMirage },
  // { name: 'Laravel', logo: logoLaravel },
  // { name: 'Statamic', logo: logoStatamic },
]

export function Sponsors() {
  return (
    // <section id="sponsors" aria-label="Sponsors" className="pb-20 sm:pb-32">
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsors
        </h2>
        <div className="mx-auto mt-20 flex flex-row items-center justify-evenly">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-[175px] grayscale"
                unoptimized
              />
            </div>
          ))}
        </div>
        {/* <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  )
}
