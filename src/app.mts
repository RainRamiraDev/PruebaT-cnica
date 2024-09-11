
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose, { connection } from 'mongoose';


//routes

import { router as userRouter } from './mongodb/routes/user.router.mjs';







dotenv.config();






//conectar a la base de datos MongoDb

const MongoDB_Connection_String = 'mongodb+srv://rsannarain:rsannarain@cluster0.hikbp2g.mongodb.net/';

async function connectToMongoDb(connectionString : string){
   await mongoose.connect(connectionString);
   console.log('Conexion exitosa con MongoDb!');
}

try{
    await connectToMongoDb(MongoDB_Connection_String);
}catch(e){
    console.log('Error al conectarse con MongoDb: ',e);
}

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());

app.use('/api',userRouter);

app.get('/',(req,res)=>{
    res.status(200).send('Hello world!');
});

app.listen(PORT,() => {
    console.log(`La aplicacion se esta ejecutando en el puerto ${PORT}`);
});