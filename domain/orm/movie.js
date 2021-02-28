const { errorLog } = require("../../common/messages");
const Movie = require("../entities/movie");

exports.getMovie = async (properties) => {
  try {
    const { page_no = 1 } = properties;
    const result = await Movie.find()
      .limit(20)
      .sort("movie_id")
      .skip(20 * (page_no - 1));
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};
