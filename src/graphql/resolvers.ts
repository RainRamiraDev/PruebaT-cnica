

import { users } from '../graphql/mockdb.js';

export const resolvers ={
        Query:{
            users:()=>users,
    },
};

