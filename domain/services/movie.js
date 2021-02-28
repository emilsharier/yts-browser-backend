const axios = require("axios").default;

const Movie = require("../orm/movie");

const { errorLog } = require("../../common/messages");
const { base_url } = require("../../constants/urls");

const getMovie = async (properties) => {
  try {
    const result = await Movie.getMovie(properties);
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const searchForMovie = async (properties) => {
  try {
    const { query_term } = properties;
    const result = await axios.get(base_url, {
      params: {
        query_term: query_term,
      },
    });
    return result.data.data;
  } catch (ex) {
    errorLog(ex);
  }
};

module.exports = { getMovie, searchForMovie };
