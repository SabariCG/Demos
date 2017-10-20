/* eslint-disable linebreak-style */
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
   type User {
    id: Int!
    firstName: String
    age: Int
    company: Company
   }

   type Company {
     id: Int!
     name: String
     description: String
     user: [User]
   }
  
  type Query {
        hello: String! 
        user(id: String!): User
        company(id: String!): Company
    }
 `;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
