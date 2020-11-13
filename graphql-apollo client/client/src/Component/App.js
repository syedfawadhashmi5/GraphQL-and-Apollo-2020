import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from '../gql_config/gqlConfig';
import Cards from './Cards';
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Cards />
      </div>
    </ApolloProvider>
  );
}

export default App;
