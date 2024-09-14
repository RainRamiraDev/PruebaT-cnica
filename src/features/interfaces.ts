import {Types} from 'mongoose';


//Definicion de interfaces para Resolvers
 export interface UserArgs {
    ID: string;
  }
  
  export  interface UserInput {
    name: string;
    email: string;
    password: string;
  }
  
  export  interface CreateUserArgs {
    UserInput: UserInput;
  }
  
  export interface UpdateUserArgs {
    ID: string;
    UserInput: UserInput;
  }
  
 export interface DeleteUserArgs {
    ID: string;
  }


 //Definicion de interfaces para User
export interface IUser {
    _id?: Types.ObjectId;
    name?:String,
    email?:String,
    password?:String
}