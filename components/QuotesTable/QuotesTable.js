import { useState } from 'react'
import { QuotesTableWrapper } from './Style'
import Modal from '../Modal/Modal'

export default function QuotesTable({ quotes }) {
  const [showModal, setShowModal] = useState(false)
  const [content, setContent] = useState()

  const items = quotes.map((quote) => (
    <tr key={quote.node.id}>
      <td>{quote.node.from}</td>
      <td>{quote.node.departureDate}</td>
      <td>{quote.node.destination}</td>
      <td>{quote.node.returnDate}</td>
      <td>{quote.node.people}</td>
      <td>{quote.node.transport.toString() == 'true' ? '✅' : '❌'}</td>
      <td>
        <button
          onClick={() => {
            setContent(quote.node), setShowModal(true)
          }}
        >
          👁
        </button>
      </td>

      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        from={content ? content.from : ''}
        departureDate={content ? content.departureDate : ''}
        destination={content ? content.destination : ''}
        returnDate={content ? content.returnDate : ''}
        people={content ? content.people : ''}
        transport={
          content ? (content.transport.toString() == 'true' ? '✅' : '❌') : ''
        }
        name={content ? content.name : ''}
        email={content ? content.email : ''}
      ></Modal>
    </tr>
  ))

  return (
    <QuotesTableWrapper>
      <table>
      <thead>
        <tr>
          <th>From</th>
          <th>Departure Date</th>
          <th>Destination</th>
          <th>Return Date</th>
          <th>People</th>
          <th>Transport</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>{items}</tbody>
      </table>
    </QuotesTableWrapper>
  )
}
