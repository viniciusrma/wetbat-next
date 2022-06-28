/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { AirportWrapper } from './style'

function Airports({placeholder}) {
  const [value, setValue] = useState([])
  const [autocomplete, setAutocomplete] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d41bd8d55msh94c430571ef0a52p11a0f2jsn69277f9a7083',
      'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://world-airports-directory.p.rapidapi.com/v1/airports/${autocomplete}?page=1&limit=20&sortBy=AirportName%3Aasc`,
        options
      )
        .then((response) => response.json())

        // CODE THAT DOES NOT UPDATE THE STATE WITH THE RESULT VALUE

        .then((response) => setValue(response.results))
        //.then((response) => console.log(response))

        .catch((err) => console.error(err))
    }

    fetchData()
  }, [autocomplete])

  console.log(value, 'im here')

  return (
    <AirportWrapper>
      <input
        placeholder={placeholder}
        className="flight-input"
        value={autocomplete}
        onChange={(e) => setAutocomplete(e.target.value)}
      />

      {value &&
        value.length &&
        value.map((item) => (
          <select key={item.id}>
            <option key={item.id}>{item.AirportName}</option>
          </select>
        ))}
    </AirportWrapper>
  )
}

export default Airports
