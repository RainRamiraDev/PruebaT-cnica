
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