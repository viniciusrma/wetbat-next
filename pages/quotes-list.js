import { getQuotes } from '../services'
import Header from '../components/Header/Header'
import QuotesTable from '../components/QuotesTable/QuotesTable'

export default function QuotesList({ quotes }) {
  return (
    <>
      <Header />
      <QuotesTable quotes={quotes} />
    </>
  )
}

export async function getStaticProps() {
  const quotes = (await getQuotes()) || []

  console.table(quotes[0].node)

  return {
    props: { quotes }
  }
}
