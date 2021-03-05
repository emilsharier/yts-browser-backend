const router = require("express").Router();
const controller = require("../controllers/update");

router.get("/", controller.getUpdate);

module.exports = router;
