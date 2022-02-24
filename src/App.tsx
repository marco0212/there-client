import React from "react";
import { WebSocketLink } from "@apollo/link-ws";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from "@apollo/client";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { getMainDefinition } from "@apollo/client/utilities";
import { GRAPHQL_END_POINT, WS_END_POINT } from "./constants";

const httpLink = new HttpLink({
  uri: GRAPHQL_END_POINT,
});

const wsLink = new WebSocketLink({
  uri: WS_END_POINT,
  options: { reconnect: true },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  uri: GRAPHQL_END_POINT,
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
