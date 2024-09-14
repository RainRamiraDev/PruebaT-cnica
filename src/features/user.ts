import {Schema,model,Types} from 'mongoose';

interface IUser {
    _id?: Types.ObjectId;
    name?:String,
    email?:String,
    password?:String
}

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