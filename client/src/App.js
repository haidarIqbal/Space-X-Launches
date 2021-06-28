import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import "./App.css";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
