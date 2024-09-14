import  User  from './user.js';
import { UserArgs, UserInput, CreateUserArgs, UpdateUserArgs, DeleteUserArgs } from '../features/interfaces.js';



export const resolvers ={
    Query:{
        async getUser(_: any,{ ID }:UserArgs){
            return await User.findById(ID);
        },

        async getUsers(_ : any,{ limit }:{ limit? :number }){
            return await User.find().limit( limit || 0 ); 
        }
    },
    Mutation:{
        async createUser(_: any, { UserInput }: CreateUserArgs) {
            const res = await new User(UserInput).save();
            return res._id.toString();
          },
          async updateUser(_: any, { ID, UserInput }: UpdateUserArgs) {
            await User.updateOne({ _id: ID }, { $set: UserInput });
            return ID;
          },
          async deleteUser(_: any, { ID }: DeleteUserArgs) {
            await User.deleteOne({ _id: ID });
            return ID;
          },
    }
};

