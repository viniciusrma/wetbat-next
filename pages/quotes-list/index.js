import { getQuotes } from '../../services'
import {QuotesTableWrapper} from './Style'

export default function QuotesList({ quotes }) {
  return (
    <QuotesTableWrapper>
      <thead>
        <tr>
          <th>From</th>
          <th>Departure Date</th>
          <th>Destination</th>
          <th>Return Date</th>
          <th>People</th>
          <th>Transport</th>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.node.id}>
            <td>{quote.node.from}</td>
            <td>{quote.node.departureDate}</td>
            <td>{quote.node.destination}</td>
            <td>{quote.node.returnDate}</td>
            <td>{quote.node.people}</td>
            <td>{quote.node.transport}</td>
            <td>{quote.node.name}</td>
            <td>{quote.node.email}</td>
          </tr>
        ))}
      </tbody>
    </QuotesTableWrapper>
  )
}

export async function getStaticProps() {
  const quotes = (await getQuotes()) || []

  return {
    props: { quotes }
  }
}
