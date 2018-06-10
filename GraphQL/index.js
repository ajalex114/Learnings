import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';
import { resolve } from 'dns';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is awesome');
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
