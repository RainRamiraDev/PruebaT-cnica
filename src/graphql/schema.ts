const { gql } = require('apollo-server');

const typeDefs = () => {
    return gql `
    
    type User{
    ID:String
    name:String
    email:String
    password:String
    }
    
    type Query{
    users:[User]
    }
    
    `;
}

exports.typeDefs = typeDefs;