# Consigna

Te vamos a solicitar una prueba simple del stack tecnológico que se está utilizando en la
empresa, sabemos actualmente que no contas los conocimientos en todas estas
tecnologías pero es el puesto que necesitamos cubrir.

**Crear una API en Node Js utilizando Typescript, GraphQl, Apolo server, y conectarse a una
base de datos en Mongo (si todo esto puede estar dockerisado, suma). En base a estas
tecnologías realizar un crud de usuario con campos ID, nombre, email, password.**


## Configuración

1. **Instalar dependencias**

   Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install

2. **Compilar el proyecto**
   ```bash
   npm run build

3. **Ejecutar el proyecto**
   ```bash
   npm run start

## Prueba en Apollo-Server
```
[================GET USER (BY ID)====================================]


query {
  getUser(ID: "60c72b2f9b1e4d001c9e7b9e") {
    _id
    name
    email
  }
}


[=================GET USERS (ALL)===================================]


query {
  getUsers(limit: 5) {
    _id
    name
    email
  }
}


[=====================CREATE USER==================================]


 mutation {
  createUser(UserInput: {
    name: "Oscar Botta",
    email: "o.botta@gmail.com",
    password: "12345"
  })
}


[===================DELETE USER=================================]


mutation {
  deleteUser(ID: "60c72b2f9b1e4d001c9e7b9e")
}


[==================UPDATE USER===================================]


mutation {
  updateUser(ID: "60c72b2f9b1e4d001c9e7b9e", UserInput: {
    name: "Rain Ramira",
    email: "r.sannarain@gmail.com",
    password: "newpassword123"
  })
}
