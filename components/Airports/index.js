/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

function Airports() {
  const [value, setValue] = useState([])
  const [autocomplete, setAutocomplete] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4e3affde55msh07ec9db864bf838p1cb663jsna923633e028a',
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
        .then((response) => console.log(response.results))
        .catch((err) => console.error(err))
    }

    fetchData()
  }, [autocomplete])

  return (
    <div>
      <input
        placeholder="Airport"
        className="flight-input"
        value={autocomplete}
        onChange={(e) => setAutocomplete(e.target.value)}
      />

      {/* <div>{value}</div> */}
    </div>
  )
}

export default Airports
