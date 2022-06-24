import { getQuotes } from '../services'
import QuotesTable from '../components/QuotesTable/QuotesTable'

export default function QuotesList({ quotes }) {
  return <QuotesTable quotes={quotes} />
}

export async function getStaticProps() {
  const quotes = (await getQuotes()) || []

  console.log(quotes[0].node)

  return {
    props: { quotes }
  }
}
