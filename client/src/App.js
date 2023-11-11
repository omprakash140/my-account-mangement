import Client from "./component/Client";
import Header from "./component/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Client></Client>
        <div className="container">

          <h1>Hello World </h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
