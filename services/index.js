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
