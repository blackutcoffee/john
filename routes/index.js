const router = require("express").Router();
const noteRoutes = require("./apiRoute.js")

router.use(noteRoutes);

module.exports = router;