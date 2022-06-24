import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wet Bat</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Wet bat app" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
