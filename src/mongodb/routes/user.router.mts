import express from 'express';
import { User } from '../models/user.model.mjs';
const router = express.Router();


//Ruta para obtener todos los usuarios
router.get('/getUsers',async (req,res) => {
    try{
        const data = await User.find({});
        console.log('Usuarios recuperados');
        res.status(200).json(data);
    } catch(e){

        console.log('ocurrio un error al recuperar los usuarios:',e);
    }
});

//Ruta para ingresar un nuevo usuario
router.post('/addUser',async (req,res) =>{
    try{
        const data = await User.create(req.body);
        console.log('Un nuevo usuario se agrego exitosamente');
        res.status(200).json(data);
    }catch(e){
        console.log('Error al cargar el usuario: ', e);
    }
});

//Ruta para obtener un usuario por Id
router.get('/:id',async (req,res) =>{
    try{
        const data = await User.findById(req.params.id);
        console.log('Se trae el usuario por ID');
        res.status(200).json(data);
    }catch(e){
        console.log('Error al recuperar el usuario: ',e);
    }
});

export { router };