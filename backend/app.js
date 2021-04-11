const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const movieSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');

mongoose.connect('mongodb://localhost:27017/movie_maker', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoBB Connected!'))
  .catch((err) => console.log('Error', err));

// Setting up GraphQL
app.use('/graphql', graphqlHTTP({
  schema: movieSchema,
  graphiql: true,
  rootValue: resolvers
}));

app.get('/', (req, res) => {
  res.send('Hello from backend app.js');
});

app.listen(4000, () => {
  console.log('Server on port 4000');
});
