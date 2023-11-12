import Client from "./component/Client";
import Header from "./component/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import AddClientModel from "./component/AddClientModel";
import Projects from "./component/Projects";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        },
      }
    }
  }
})
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModel />
          <Projects />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
