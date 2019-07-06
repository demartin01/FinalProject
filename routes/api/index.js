const router = require("express").Router();
const zillApi = require("./zillowApi");
const userApi = require("./userApi");

router.use("/properties/", zillApi);
router.use("/user/", userApi);

module.exports = router;

