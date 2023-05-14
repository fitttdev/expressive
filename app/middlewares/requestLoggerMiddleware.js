const requestLoggerMiddleware = (req, res, next) => {
  console.log('Request Query Parameters:', req.query);
  console.log('Host:', req.headers.host);
  next();
};

module.exports = requestLoggerMiddleware;
