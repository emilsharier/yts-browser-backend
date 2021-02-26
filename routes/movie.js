const movieController = require("../controllers/movie");
const router = require("express").Router();

router.get("/", movieController.getMovies);

module.exports = router;
