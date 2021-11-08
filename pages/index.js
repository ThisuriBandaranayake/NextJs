import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Animals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to animals blog...
        </h1>
        <h2><a href="/dog">Dogs</a></h2>
        <h2><Link href="/cat"><a>Cats</a></Link></h2>
      </main>
    </div>
  )
}
