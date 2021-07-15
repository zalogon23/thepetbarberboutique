import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://the-pet-barber-boutique-admin.herokuapp.com/graphql",
  // uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only"
    }
  }
})
//heroku purpose

export default client 