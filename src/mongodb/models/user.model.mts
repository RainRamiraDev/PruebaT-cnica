import mongoose from 'mongoose';


//Definicion del esquema del modelo de usuario
const userSchema = new mongoose.Schema({
    ID:Number,
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User',userSchema);
export{ User };
