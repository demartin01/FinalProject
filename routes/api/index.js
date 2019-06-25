const router = require("express").Router();
const zillApi = require("./zillowApi");

router.use("/properties", zillApi);

module.exports = router;

