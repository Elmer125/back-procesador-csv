# Backend Lista de contactos importando un csv

Para ejecutar esta aplicacion en modo dev estoy utilizando nodemon basta solo con  utilizar el comnando npm run dev

para el despliegue utilice heroku , primero cree un repositorio en git luego hice heroku create despues un git push heroku main para añadirlo a la rama main en heroku:
https://blooming-sierra-49928.herokuapp.com/


## Explicacion de lo desarrollado

Utilice npm init, luego instale las librerias utilizar nodemon, express, boom, dotnev, mongoose esta por que voy a utilizar una base de datos de mongo db 

https://account.mongodb.com/account/login?n=%2Fv2%2F627445c6f4a9314d67d64f1c&nextHash=%23metrics%2FreplicaSet%2F6274464d408b0f130a38001e%2Fexplorer%2FListacontacto%2Flistacontactos%2Ffind


Una vez echo esto procedo a crear las carpetas router, utils, models 

En router vamos a tener todas las rutas de nuestra api y cree un archivo routerapi como ruta principal 

En models cree un modelo de la "tabla" que voy a utilizar en mi base de datos. Con mogoose utilice Schema y le paso los parametros y las debidas reglas que debe tener para insertalos en la bd 

En utils:
    Tenemos un archivo config el cual esta manejando el puerto y la MONGODB_URI este es necesario para crear la conexion a la bd , En este estoy utilizando dotenv para manejar estos datos dentro de mi api

    logger un middleware para manejar los textos en consola 

    middleware estan todos la mayoria de middleware para manejo de error y para escribir en consola el metodo de conexion, path y  los parametros del body que van a la bd

Dividi mi api en los archivos app.js y index.js 

En app.js le pase todos los middleware, utilizo mongoosee para conectarme a la base de datos y dotnev para enviarles los varibles de entorno

En el index.js import mi app.js y le paso ya la app lista solo para hacer la creacion del servidor 

Cree un archivo Proficle para heroku 

## Por mejorar: 

        El manejo de los errores 

        El post a la bd hay que cambiar la forma en que lo hace y manejar los datos uno a uno con un middleware 


