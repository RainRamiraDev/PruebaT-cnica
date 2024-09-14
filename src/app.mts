
import dotenv from 'dotenv';
import mongoose, { connection } from 'mongoose';
import { router as userRouter } from './mongodb/routes/user.router.mjs';
import { ApolloServer} from 'apollo-server';
import { resolvers } from './features/user.resolvers.js';
import { typeDefs } from './features/user.schema.js';


dotenv.config();

//Definicion de las constantes para el puerto y la cadena de conexion MongoDb
const MongoDB_Connection_String = 'mongodb+srv://rsannarain:rsannarain@cluster0.hikbp2g.mongodb.net/';


//Funcion para conectar con la base de datos
async function connectToMongoDb(connectionString : string){
   await mongoose.connect(connectionString);
   console.log('Conexion exitosa con MongoDb!');
}
try{
    await connectToMongoDb(MongoDB_Connection_String);
}catch(e){
    console.log('Error al conectarse con MongoDb: ',e);
}


//Conexion con Apollo Server
const server = new ApolloServer({typeDefs,resolvers});
server.listen().then(({url} : {url : String}) => {
    console.log(`Servidor graphql corriendo en el puerto ${url}`);
});




