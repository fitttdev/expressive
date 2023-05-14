const { Todo } = require('../../../../models');

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title, body, done } = req.body;

    const todo = await Todo.create({
      title,
      body,
      done,
    });

    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
};
