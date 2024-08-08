const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://mridulbirla13:gAXZpE43ujfiep8o@cluster0.rm4nkc5.mongodb.net/ToDo_App");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo
}