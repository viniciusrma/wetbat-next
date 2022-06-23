import Header from '../components/Header/Header'
import { getQuotes } from '../services'

export default function QuotesList({ quotes }) {
  return (
    <div>
      <Header />
      {quotes.map(quote => { <h1>{quote.node.name}</h1>})}
    </div>
  )
}

export async function getStaticProps() {
  const quotes = (await getQuotes()) || []

  console.log(quotes[0])

  return {
    props: { quotes }
  }
}
