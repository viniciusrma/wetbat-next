import { useState } from 'react'
import { QuoteFormWrapper } from './style'
import { submitQuote } from '../../services'

function QuoteForm() {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [from, setFrom] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [destination, setDestination] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [people, setPeople] = useState(1)
  const [transport, setTransport] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const toggleChecked = () => setTransport((value) => !value)

  const handleQuoteSubmission = () => {
    setError(false)
    if (
      !from ||
      !departureDate ||
      !destination ||
      !returnDate ||
      !people ||
      !name ||
      !email
    ) {
      setError(true)
      return
    }

    const quoteObject = {
      from,
      departureDate,
      destination,
      returnDate,
      people,
      transport,
      name,
      email
    }

    submitQuote(quoteObject).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
        setFrom('')
        setDepartureDate('')
        setDestination('')
        setReturnDate('')
        setPeople(1)
        setTransport(false)
        setName('')
        setEmail('')
      }, 4000)
    })
  }

  return (
    <QuoteFormWrapper>
      <h2>New Quote</h2>
      <form action="submit">


        <label htmlFor="from">Departure place</label>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="text"
          name="from"
          id="from"
          placeholder="From"
          required
        />

        <label htmlFor="departure-date">Departure date</label>
        <input
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          type="date"
          name="departure-date"
          id="departure-date"
          placeholder="Departure Date"
          required
        />

        <label htmlFor="destination">Destination</label>
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          type="text"
          name="destination"
          id="destination"
          placeholder="Destination"
          required
        />

        <label htmlFor="return-date">Return date</label>
        <input
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          type="date"
          name="return-date"
          id="return-date"
          placeholder="Return Date"
          required
        />

        <label htmlFor="people">Nº of travellers</label>
        <input
          value={people}
          onChange={(e) => setPeople(parseInt(e.target.value))}
          type="number"
          min={1}
          name="people"
          id="people"
          placeholder="Tripulation"
          required
        />

        <div id="transport-checkbox">
          <label htmlFor="transport">Transport</label>
          <input
            onChange={toggleChecked}
            checked={transport}
            type="checkbox"
            name="transport"
            id="transport"
          />
        </div>

        {/* contact information  */}
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />

        {error && <span> All fields are required. 🚫</span>}

        <button type="button" onClick={handleQuoteSubmission}>
          Create Quote
        </button>

        {showSuccessMessage && <span>Quote added! ✅</span>}
      </form>
    </QuoteFormWrapper>
  )
}

export default QuoteForm
