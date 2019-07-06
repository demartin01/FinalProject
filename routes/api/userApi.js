const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches /api/user/email
router.route("/user/:emal")
    .get(userController.getUserByEmail)
    .post(userController.createUser)

// matches /api/users
router.route("/users")
    .get(userController.getAllUsers)
    
module.exports = router;

