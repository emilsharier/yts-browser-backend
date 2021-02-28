const movieController = require("../controllers/movie");
const router = require("express").Router();

router.post("/", movieController.getMovies);
router.post("/search", movieController.searchMovie);

module.exports = router;
