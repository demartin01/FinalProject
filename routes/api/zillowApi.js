const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");


// matches /api/properties
router.route("/")
    .get(propertyController.getAllProperties)
    // .post(propertyController.createProperty);

module.exports = router;

