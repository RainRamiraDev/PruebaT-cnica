import express from 'express';

const router = express.Router();

import { User } from '../models/user.model.mjs';


router.get('/getUsers',async (req,res) => {
    try{
        const data = await User.find({});
        console.log('Usuarios recuperados');
        res.status(200).json(data);
    } catch(e){

        console.log('ocurrio un error al recuperar los usuarios:',e);
    }
});


router.post('/addUser',async (req,res) =>{
    try{
        const data = await User.create(req.body);
        console.log('Un nuevo usuario se agrego exitosamente');
        res.status(200).json(data);
    }catch(e){
        console.log('Error al cargar el usuario: ', e);
    }
});

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