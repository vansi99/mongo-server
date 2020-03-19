const todo = require("../models/todo.model");

async function getInformationtodo(req, res) {
    try {
        const todoInformation = await todo.find();
        res.send(todoInformation);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }

}

function todo_create(req, res) {
    try {

        const {content, status} = req.body;
        let newTodo = new todo({
            content,
            status
        });
        newTodo.save();
        res.send(("todo Created successfully"));
    } catch (err) {

        res.send(err.message);
    }

}

async function todo_update(req, res) {
    try {
        const {todo_id} = req.params;
        const {content, status} = req.body;
        if(!content && !status) throw new Error("Missing body params");
        const newTodo = await todo.findByIdAndUpdate(todo_id, {$set: req.body});
        newTodo.save();
        res.send("todo updated");
    } catch(err) {
        res.send(err.message);
    }
}

async function todo_delete(req, res) {
    try {
        const {todo_id} = req.params;
        await todo.findByIdAndRemove(todo_id);
        res.send("todo deleted");
    } catch (err) {
        res.send(err.message);
    }
}



module.exports = {
    getInformationtodo,
    todo_create,
    todo_update,
    todo_delete
};