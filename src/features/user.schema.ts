import { gql } from 'apollo-server';

 export const typeDefs = gql`

 type User{
 
     _id: ID!
     name: String!
     email: String!
     password: String!
 }

 input UserInput{
 
     name: String!
     email: String!
     password: String!

 }

 type Query{
 
     getUser(ID: ID!): User
     getUsers(limit:Int): [User]
 }

 type Mutation{
 
     createUser(UserInput: UserInput): String!
     updateUser(ID: ID!, UserInput: UserInput): String!
     deleteUser(ID: ID!):String!
 }
`;

