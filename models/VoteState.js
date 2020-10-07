const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  round: {
    type: Number,
  },
  votes: {
    type: Number,
  },
  voterCount: Number,
  newRoundVotes: Number,
  voteOpen: Boolean,
  newRound: Boolean,
  winnerTopic: String,
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

module.exports = mongoose.model('VoteState', schema)