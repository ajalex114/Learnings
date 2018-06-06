import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is awesome');
});

const root = { friend: () => {
    return {
        "id": 1234,
        "firstName": "Alen",
        "lastName": "Alex",
        "gender": "Male",
        "language": "Malayalam",
        "email": "me@me.com"
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));