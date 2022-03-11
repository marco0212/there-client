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
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import { getMainDefinition } from "@apollo/client/utilities";
import { APOLLO_SERVER_END_POINT, WS_SERVER_END_POINT } from "./constants";
import { setContext } from "@apollo/link-context";
import { AccountProvider } from "./libs/provider-account";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: APOLLO_SERVER_END_POINT,
});

const wsLink = new WebSocketLink({
  uri: WS_SERVER_END_POINT,
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
  uri: APOLLO_SERVER_END_POINT,
  cache: new InMemoryCache(),
  credentials: "include",
  link: authLink.concat(link),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AccountProvider>
        <Router>
          <Routes />
        </Router>
      </AccountProvider>
    </ApolloProvider>
  );
}

export default App;
