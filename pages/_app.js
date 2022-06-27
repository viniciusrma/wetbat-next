import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wet Bat</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Wet bat app" />
      </Head>
      <Component {...pageProps} />
      <div id="modal-root"/>
    </>
  )
}

export default MyApp
