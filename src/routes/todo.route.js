const express = require("express");
const router = express.Router();

const todo_controller = require("../controllers/todo.controller");

router.get("/", todo_controller.getInformationtodo);

router.post("/", todo_controller.todo_create);

router.put("/:todo_id", todo_controller.todo_update);

router.delete("/:todo_id", todo_controller.todo_delete);

module.exports = router;