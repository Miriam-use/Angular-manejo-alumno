const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  curso: {
    type: String
  },
  telefono: {
    type: String
  },
  apellido: {
    type: String
  }
}, {
  collection: 'books'
})

module.exports = mongoose.model('Book', Book)