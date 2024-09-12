import { gql } from 'apollo-server';

 export const typeDefs = gql`
    type User{
        ID:Int!
        name:String
        email:String
        password:String
    }
    
    type Query{
        users:[User]
    }
`;
