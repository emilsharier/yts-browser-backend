const asyncHandler = require("../middlewares/async_handler");

const movieService = require("../domain/services/movie");
const send = require("../common/send_response");
const {
  SUCCESS_WITH_DATA,
  INTERNAL_ERROR,
} = require("../constants/response_codes");

const getMovies = asyncHandler(async (req, res, next) => {
  const result = await movieService.getMovie(req.body);
  if (result) send(res, SUCCESS_WITH_DATA, result);
  else send(res, INTERNAL_ERROR, { message: "Internal server error" });
});

const searchMovie = asyncHandler(async (req, res, next) => {
  const result = await movieService.searchForMovie(req.body);
  if (result) send(res, SUCCESS_WITH_DATA, result);
  else send(res, INTERNAL_ERROR, { message: "Internal server error" });
});

module.exports = { getMovies, searchMovie };
