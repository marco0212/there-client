import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ExampleComponent />
    </ApolloProvider>
  );
}

const graphql = gql`
  query ExampleQuery {
    coverImage
  }
`;

function ExampleComponent() {
  const { loading, error, data } = useQuery(graphql);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error..! {error.message}</p>;
  }

  return <img src={data.coverImage} alt="There cover image" />;
}
export default App;
