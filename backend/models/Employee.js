const mongoose = require('alumnodb');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   apellido: {
      type: String
   },
   email: {
      type: String
   },
   phoneNumber: {
      type: String
   },
   curso: {
       type: String
   }
}, {
   collection: 'alumno'
})

module.exports = mongoose.model('Alumno', Employee)