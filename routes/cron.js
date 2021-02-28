const router = require("express").Router();
const { forceCronJob } = require("../controllers/movie");

router.post("/", forceCronJob);

module.exports = router;
