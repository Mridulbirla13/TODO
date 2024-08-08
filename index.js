const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

app.use(express.json());

app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    //put it in Mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        message: "Todo created successfully!"
    })
})

app.get("/todo", async(req,res)=>{
    const response = await todo.find({});
    res.json({
        todos: response
    })
})

app.put("/completed", async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    await todo.update({
        _id : req.body.id
    },{
        completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })
})

app.listen(3300)