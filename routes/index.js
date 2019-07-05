const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/test.html"));
})

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
