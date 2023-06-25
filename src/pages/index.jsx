import { useEffect } from 'react'
import Head from 'next/head'

import Main from './../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplest way to get a CPU dev environment on Brev.dev</title>
        <meta
          name="description"
          content="Get a CPU dev environment on Brev.dev"
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:url" content="/thumbnail.png" />
        <meta property="og:image:secure_url" content="/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Come build your own model" />
        <meta name="twitter:card" content="/thumbnail.png" />
        <meta name="twitter:image" content="/thumbnail.png" />
        <meta
          name="twitter:image:alt"
          content="A description of the image for better accessibility"
        />
        <meta itemProp="image" content="/thumbnail.png" />

        <meta
          property="og:image:alt"
          content="A description of the image for better accessibility"
        />
        <meta name="twitter:image" content="/thumbnail.png" />
        <meta
          name="twitter:image:alt"
          content="A description of the image for better accessibility"
        />
        <meta itemProp="image" content="/thumbnail.png" />
      </Head>
      <main className="bg-black">
        <Main />
      </main>
    </>
  )
}
