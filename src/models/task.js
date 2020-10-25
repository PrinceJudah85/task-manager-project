const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

// const cleaning = new Task({
//   description: '       eat Lunch'
// })

// cleaning.save().then((cleaning) => {
//   console.log(cleaning)
// }).catch((error) => {
//   console.log('Error!', error)
// })