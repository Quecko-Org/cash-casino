const router = require("express").Router();

const usersController = require("./users.controller");

router.get(
  "/",
 
  usersController.getUser
);

router.post(
  "/",
 
  usersController.storeUser
);
module.exports = router;
