import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getQuotes = async () => {
  const query = gql`
    query MyQuery {
      quotesConnection {
        edges {
          node {
            from
            departureDate
            destination
            returnDate
            people
            transport
            name
            email
            id
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.quotesConnection.edges
}

export const submitQuote = async (obj) => {
  try {
    const result = await fetch('/api/add-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })

    return result.json()
  } catch (error) {
    console.log(error, 'Oops, something went wrong')
  }
}
