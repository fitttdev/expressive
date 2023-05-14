const express = require('express');
const router = express.Router();
const todosController = require('../app/controllers/api/v1/todosController');

// GET /api/v1/todos - Get all todos
router.get('/', todosController.getAllTodos);

// // GET /api/v1/todos/:id - Get a specific todo
// router.get('/:id', todosController.getTodoById);

// POST /api/v1/todos - Create a new todo
router.post('/', todosController.createTodo);

// // PUT /api/v1/todos/:id - Update a specific todo
// router.put('/:id', todosController.updateTodo);

// // DELETE /api/v1/todos/:id - Delete a specific todo
// router.delete('/:id', todosController.deleteTodo);

module.exports = router;
