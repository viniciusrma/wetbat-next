import Head from 'next/head'
import Header from '../components/Header/Header'
import QuoteForm from '../components/QuoteForm/QuoteForm'

export default function Home() {
  return (
    <div>
      <Header />
      <QuoteForm />
    </div>
  )
}
