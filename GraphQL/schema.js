import { buildSchema } from 'graphql';

const schema = buildSchema(`

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: String
    }

    type Email {
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        emails: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;