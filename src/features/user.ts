import {Schema,model,Types} from 'mongoose';
import { IUser} from '../features/interfaces.js';


const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,    },

});

const User = model<IUser>('users',UserSchema);

export default User;