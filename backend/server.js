let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');

let mongoose = require('alumnodb');
   
// Conexión con mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Base de datos conectada correctamente')
   },
   error => {
      console.log('No se pudo conectar la base de datos: ' + error)
   }
)

// Configuración del puerto con express js
const employeeRoute = require('../backend/routes/employee.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/api', employeeRoute)

// Crear puerto
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Encuentra 404 y entrégalo al controlador de errores
app.use((req, res, next) => {
   next(createError(404));
});

// controlador de errores
app.use(function (err, req, res, next) {
  console.error(err.message); // Mensaje de error de registro en la consola de nuestro servidor
  if (!err.statusCode) err.statusCode = 500; // Si err no tiene un código de error especificado, establezca el código de error en 'Error interno del servidor (500)'
  res.status(err.statusCode).send(err.message); // Todas las solicitudes HTTP deben tener una respuesta, así que enviemos un error con su código de estado y mensaje.
});

