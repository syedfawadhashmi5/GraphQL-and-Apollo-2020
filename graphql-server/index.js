const { ApolloServer, gql } = require('apollo-server');

const Cards = [
    {
        "Id": 1,
        "name": "fawad",
        "email": "syedfawadhashmi5@gmail.com",
        "age": 19

    },
    {
        "Id": 2,
        "name": "Humza",
        "email": "syedfawad@gmail.com",
        "age": 39

    },
    {
        "Id": 3,
        "name": "kashif",
        "email": "syedfawad5@gmail.com",
        "age": 29

    }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      Cards: () => Cards,
    },
  };

// A schema is a collection of type definitions (hence "typeDefs")

const typeDefs = gql`
  type Card {
      Id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    Cards: [Card]
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});