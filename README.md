# Angular-manejo-alumno
Hoy, voy a compartir con ustedes un tutorial de MEAN Stack , en este tutorial de MEAN Stack voy a crear una aplicación CRUD Angular 11 usando Bootstrap 4. Usaré Node.js, Express.js, MongoDB para backend y Angular para el manejo de frontend.

Para el propósito de la demostración, crearé un sistema de gestión de alumnos utilizando la pila MEAN de Angular 11. Intentaré cubrir el tema esencial utilizado en el desarrollo de aplicaciones web CRUD.

En este tutorial de MEAN stack, compartiré el proceso paso a paso para crear una aplicación Angular 11 CRUD (Crear, Leer, Actualizar, Eliminar) desde cero.

<h1>Entendamos qué significa pila MEAN.</h1>

* Mongo DB - Es una base de datos orientada a documentos multiplataforma NoSQL de código abierto.

* Express JS - Es un marco de trabajo de aplicaciones basado en la web que funciona con Node JS, ayuda a crear aplicaciones web y API RESTful.

* Angular - Es un marco front-end completo basado en TypeScript desarrollado por el equipo de Google.

* Node JS- Es un entorno de tiempo de ejecución de JavaScript gratuito. Ejecuta código JavaScript fuera de un navegador. Está disponible para MacOS, Windows, Linux y Unix.

<h1>Ejemplo de pila MEAN de Angular 11</h1>

* Configurar Node JS
* Crear un backend de Node.JS
* Conectar la base de datos MongoDB
* Crear modelo
* Cree API RESTful exprés
* Proyecto Creae MEAN Stack
* Agregar enrutamiento MEAN
* Crear servicio angular
* Agregar objeto de datos
* Mostrar lista de datos y eliminar objeto
* Editar datos datos

<h1># 1 Cree un backend de Node.JS</h1>

Para escribir el código manejable, debemos mantener separada la carpeta de backend MEAN Stack. Cree una carpeta con el nombre del backend en el directorio raíz de Angular. Esta carpeta manejará el código de back-end de nuestra aplicación, recuerde que tendrá la carpeta node_modules separada de Angular.

mkdir backend

Ingrese el siguiente comando para ingresar a la carpeta de backend.

cd backend

Ahora que está dentro de la carpeta de backend , ejecute el siguiente comando para crear el package.jsonarchivo. Este archivo tendrá los metadatos de su aplicación MEAN Stack, también se conoce como el archivo de manifiesto de cualquier proyecto NodeJS.

npm init -y

Inicio   »   Angular   » Tutorial de ejemplo de pila MEAN de Angular 11: compile la aplicación MEAN CRUD con Bootstrap 4
Tutorial de ejemplo de pila MEAN de Angular 11: compile la aplicación MEAN CRUD con Bootstrap 4
Ultima actualización en 9 de enero de 2021 por Digamber
Hoy, voy a compartir con ustedes un tutorial de MEAN Stack , en este tutorial de MEAN Stack voy a crear una aplicación CRUD Angular 11 usando Bootstrap 4. Usaré Node.js, Express.js, MongoDB para backend y Angular para el manejo de frontend.
Para el propósito de la demostración, crearé un sistema de gestión de empleados utilizando la pila MEAN de Angular 11. Intentaré cubrir el tema esencial utilizado en el desarrollo de aplicaciones web CRUD.

En este tutorial de MEAN stack, compartiré el proceso paso a paso para crear una aplicación Angular 11 CRUD (Crear, Leer, Actualizar, Eliminar) desde cero.

Entendamos qué significa pila MEAN.
Mongo DB - Es una base de datos orientada a documentos multiplataforma NoSQL de código abierto.
Express JS - Es un marco de trabajo de aplicaciones basado en la web que funciona con Node JS, ayuda a crear aplicaciones web y API RESTful.
Angular - Es un marco front-end completo basado en TypeScript desarrollado por el equipo de Google.
Node JS- Es un entorno de tiempo de ejecución de JavaScript gratuito. Ejecuta código JavaScript fuera de un navegador. Está disponible para MacOS, Windows, Linux y Unix.
Usaré los siguientes complementos y herramientas para crear la aplicación MEAN Stack.
Nodo JS
MongoDB
Mangosta JS
Expresar JS
CLI angular 7.2.3
Código de Visual Studio
Ejemplo de pila MEAN de Angular 11
Configurar Node JS
Crear un backend de Node.JS
Conectar la base de datos MongoDB
Crear modelo
Cree API RESTful exprés
Proyecto Creae MEAN Stack
Agregar enrutamiento MEAN
Crear servicio angular
Agregar objeto de datos
Mostrar lista de datos y eliminar objeto
Editar datos datos
# 1 entorno de desarrollo Setup Node JS
Siga este enlace para configurar Node JS en su sistema.

# 2 Cree un backend de Node.JS
Para escribir el código manejable, debemos mantener separada la carpeta de backend MEAN Stack. Cree una carpeta con el nombre del backend en el directorio raíz de Angular. Esta carpeta manejará el código de back-end de nuestra aplicación, recuerde que tendrá la carpeta node_modules separada de Angular.

mkdir backend
Intento
Ingrese el siguiente comando para ingresar a la carpeta de backend.

cd backend
Intento
Ahora que está dentro de la carpeta de backend , ejecute el siguiente comando para crear el package.jsonarchivo. Este archivo tendrá los metadatos de su aplicación MEAN Stack, también se conoce como el archivo de manifiesto de cualquier proyecto NodeJS.

npm init -y

<h3>- Instale y configure los paquetes NPM necesarios para el desarrollo de aplicaciones MEAN Stack</h3>

Utilice el siguiente comando para instalar los siguientes módulos de nodo.

npm install --save body-parser cors express mongoose

* body-parser: el módulo npm body-parser es un middleware de análisis JSON. Ayuda a analizar los datos JSON, texto sin formato o un objeto completo.

* CORS: este es un paquete Node JS, también conocido como middleware express js. Permite habilitar CORS con múltiples opciones. Está disponible a través del registro npm.

* Express.js: Express js es un marco de aplicación web gratuito de código abierto Node js. Ayuda a crear aplicaciones web y API RESTful.

* Mongoose: Mongoose es un ODM de MongoDB para Node. Te permite interactuar con la base de datos MongoDB.

npm install nodemon --save-dev

Ahora, vaya a la raíz de la carpeta de backend, cree un archivo con el nombre de server.js.

touch server.js

Ahora, dentro del backend > server.jsarchivo, agregue el siguiente código.

<h1># 2 Conecte la base de datos MongoDB con la aplicación Angular MEAN Stack</h1>

Es hora de conectar la base de datos MongoDB con la aplicación MEAN, use los siguientes comandos para configurar MongoDB.

Cree una carpeta de base de datos dentro de la carpeta de backend .

mkdir database

Vaya dentro de la carpeta de la base de datos.

cd database

Luego crea el backend > database > db.jsarchivo dentro de la carpeta de la base de datos.

Ahora necesitamos hacer la conexión entre MongoDB y la aplicación MEAN Stack. Vaya al backend > server.jsarchivo e incluya el siguiente código.

<h1># 3 Crear modelo con Mongoose JS</h1>

Creemos la carpeta de modelos dentro de la carpeta de backend.

mkdir models

Luego crearé el archivo Employee.js .

touch Employee.js

En este archivo definiré el esquema para la colección de empleados. Mis tipos de datos son nombre, correo electrónico, designación y número de teléfono . Agregue el siguiente código en el backend > models > Employee.jsarchivo.

<h1># 4 Cree API RESTful usando Express JS Routes</h1>

Creemos las rutas en la aplicación Angular para acceder a los datos del empleado a través de las API RESTful. Usaré Mongoose.js en nuestro tutorial MEAN Stack para crear, leer, actualizar y eliminar datos de la base de datos MongoDB.

Cree un backend > routes > employee.route.jsarchivo dentro de la carpeta de rutas.

Agregue el código que se proporciona a continuación para crear API RESTful en la aplicación MEAN Stack usando mongoose.js.

Hemos configurado el backend de nuestra aplicación MEAN Stack Angular usando Node js, Express js, Angular y MongoDB.

Tenemos que iniciar 3 servidores en nuestra aplicación para iniciar el desarrollo en la aplicación MEAN Stack Angular.

<h3>Iniciar Angular Server</h3>

ng serve

<h3>Iniciar el servidor Nodemon</h3>

Para iniciar el servidor Nodemon, primero ingrese en la carpeta de backend usando el comando que se indica a continuación.

cd backend

Luego ejecute el siguiente comando para iniciar el servidor nodemon.

nodemon server

Obtendrá la siguiente salida en su terminal.

# [nodemon] 1.18.6
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching: *.*
# [nodemon] starting `node server.js`
# Connected to port 4000
# Database sucessfully connected

<h3>Inicie el servidor MongoDB</h3>

Abra el nuevo terminal, ingrese en la carpeta de backend y luego use el siguiente comando para iniciar el servidor mongoDB.

mongod

Puede acceder a su ruta API en la siguiente URL, aquí puede verificar sus datos.

Verifique su interfaz angular en - http://localhost:4200

Puede verificar su URL de API en - http://localhost:4000/api
