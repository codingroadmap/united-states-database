var express = require('express');
const router = express.Router();
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true,
}));

router.get('/', graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true,
}));

// app.listen(4000);
// console.log('Running a GraphQL API server at localhost:4000/graphql');

module.exports = router;