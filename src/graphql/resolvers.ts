import { Query } from "mongoose"

const users = require('../graphql/mockdb.js');


const resolvers = () =>{
    return{
        Query:{
            users:() => users
        },
    };
}

exports.resolvers = resolvers;