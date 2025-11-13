const usersRouter = require("./users/users.router");
exports.initRoutes = (app) => {

  app.use("/users", usersRouter);

};