import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN

export default async function quotes(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation AddQuote(
      $from: String!
      $departureDate: Date!
      $destination: String!
      $returnDate: Date!
      $people: Number!
      $transport: Boolean!
      $name: String!
      $email: String!
    ) {
      addQuote(
        data: {
          from: $from
          departureDate: $departureDate
          destination: $destination
          returnDate: $returnDate
          people: $people
          transport: $transport
          name: $name
          email: $email
        }
      )
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    console.log(req.body)

    return res.status(500).send(error)
  }
}
