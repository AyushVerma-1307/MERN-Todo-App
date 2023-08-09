const express = require("express");
const router = express.Router();

const { createTodo,deleteTodo } = require("../controller/createTodo");
const { getTodo } = require("../controller/getTodos");
const {updateTodo} = require("../controller/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getallTodos", getTodo);
router.delete("/deleteTodo/:id",deleteTodo)
router.post("/updateTodo/:id",updateTodo)


module.exports = router;
