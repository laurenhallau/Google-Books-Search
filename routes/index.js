const router = require("express").Router();
const path=require("path")
const apiRoutes = require("./api/apiRoutes");

// api routes
router.use("/book", apiRoutes);


router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;