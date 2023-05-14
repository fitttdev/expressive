const express = require('express');
const requestLoggerMiddleware = require('./app/middlewares/requestLoggerMiddleware');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLoggerMiddleware);

// Require the route files
const todosRoutes = require('./routes/todos');

// Mount the routes
app.use('/api/v1/todos/', todosRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
