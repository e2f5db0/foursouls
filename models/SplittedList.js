const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  leftList: {
    topics: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Topic'
    },
    votes: {
      type: Number,
    },
  },
  rightList: {
    topics: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Topic',
    },
    votes: {
      type: Number,
    },
  },
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

module.exports = mongoose.model('SplittedList', schema)