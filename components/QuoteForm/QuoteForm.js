import { useRef, useState } from 'react'
import { QuoteFormWrapper } from './Style'

import { submitQuote } from '../../services'

function QuoteForm() {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const fromElement = useRef()
  const departureDateElement = useRef()
  const destinationElement = useRef()
  const returnDateElement = useRef()
  const peopleElement = useRef()
  const transportElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()

  const { value: from } = fromElement.current || ''
  const { value: departureDate } = departureDateElement.current || ''
  const { value: destination } = destinationElement.current || ''
  const { value: returnDate } = returnDateElement.current || ''
  const { value: people } = peopleElement.current || ''
  const { value: transport } = transportElement.current || ''
  const { value: name } = nameElement.current || ''
  const { value: email } = emailElement.current || ''

  const handleQuoteSubmission = () => {
    setError(false)

    if (
      !from ||
      !departureDate ||
      !destination ||
      !returnDate ||
      !people ||
      !transport ||
      !name ||
      !email
    ) {
      setError(true)
      return
    }

    const quoteObject = {
      fromElement,
      departureDateElement,
      destinationElement,
      returnDateElement,
      peopleElement,
      transportElement,
      nameElement,
      emailElement
    }

    submitQuote(quoteObject).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 4000)
    })
  }

  return (
    <QuoteFormWrapper>
      <h2>New Quote</h2>
      <form action="submit">
        <label htmlFor="from">Departure place</label>
        <input
          ref={fromElement}
          type="text"
          name="from"
          id="from"
          placeholder="From"
          required
        />

        <label htmlFor="departure-date">Departure date</label>
        <input
          ref={departureDateElement}
          type="text"
          name="departure-date"
          id="departure-date"
          placeholder="Departure Date"
          required
        />

        <label htmlFor="destination">Destination</label>
        <input
          ref={destinationElement}
          type="text"
          name="destination"
          id="destination"
          placeholder="Destination"
          required
        />

        <label htmlFor="return-date">Return date</label>
        <input
          ref={returnDateElement}
          type="text"
          name="return-date"
          id="return-date"
          placeholder="Return Date"
          required
        />

        <label htmlFor="people">Nº of travellers</label>
        <input
          ref={peopleElement}
          type="number"
          name="people"
          id="people"
          placeholder="Tripulation"
          required
        />

        <div id="transport-checkbox">
          <label htmlFor="transport">Transport</label>
          <input
            ref={transportElement}
            type="checkbox"
            name="transport"
            id="transport"
            required
          />
        </div>

        {/* contact information */}
        <label htmlFor="name">Name</label>
        <input
          ref={nameElement}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          ref={emailElement}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />

        {error && <span> ‼ All fields are required. 🚫</span>}

        <button type="button" onClick={handleQuoteSubmission}>
          Create Quote
        </button>

        {showSuccessMessage && <span>Quote added! ✅</span>}
      </form>
    </QuoteFormWrapper>
  )
}

export default QuoteForm
