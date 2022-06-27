import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN

export default async function quotes(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const mutation = gql`
    mutation CreateQuote(
      $from: String!,
      $departureDate: Date!,
      $destination: String!,
      $returnDate: Date!,
      $people: Int!,
      $transport: Boolean!,
      $name: String!,
      $email: String!) {
      createQuote(
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
      ) {
        id
        from
        departureDate
        destination
        returnDate
        people
        transport
        name
        email
      }
    }
  `

  try {
    const result = await graphQLClient.request(mutation, req.body)
    return res.status(201).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
