const usersRouter = require("./users/users.router");
const healthRouter = require("./health/health.router");
exports.initRoutes = (app) => {

  app.use("/users", usersRouter);
  app.use("/health", healthRouter);

};