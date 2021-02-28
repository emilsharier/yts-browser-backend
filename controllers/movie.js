const asyncHandler = require("../middlewares/async_handler");

const movieService = require("../domain/services/movie");
const send = require("../common/send_response");
const {
  SUCCESS_WITH_DATA,
  INTERNAL_ERROR,
  SUCCESS,
} = require("../constants/response_codes");
const { cacheAPI } = require("../cron/cron_job");

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

const forceCronJob = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (username === "emil" && password === "dedsec") {
    cacheAPI();
    send(res, SUCCESS, {});
  } else {
    send(res, INTERNAL_ERROR, { message: "Unauthorized" });
  }
});

module.exports = { getMovies, searchMovie, forceCronJob };
