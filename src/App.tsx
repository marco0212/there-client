import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://there-server.herokuapp.com"
      : "http://localhost:4000",
  cache: new InMemoryCache(),
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