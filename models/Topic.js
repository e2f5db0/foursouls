const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    unique: true,
  },
  covered: {
    type: Boolean,
    required: true,
  },
  winner: {
    type: Boolean,
    required: true,
  }
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

schema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Topic', schema)