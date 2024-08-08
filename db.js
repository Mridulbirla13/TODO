require('dotenv').config()
const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo
}