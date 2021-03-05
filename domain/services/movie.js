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

    let results = result.data.data;

    let movies = [];

    results.movies.forEach((element) => {
      let torrents = [];
      element.torrents.forEach((torrent) => {
        torrents.push({
          url: torrent.url,
          hash: torrent.hash,
          quality: torrent.quality,
          type: torrent.type,
          seeds: torrent.seeds,
          peers: torrent.peers,
          size: torrent.size,
          date_uploaded: torrent.date_uploaded,
        });
      });
      movies.push({
        movie_id: element.id,
        url: element.url,
        imdb_code: element.imdb_code,
        title: element.title,
        year: element.year,
        youtube_trailer: element.yt_trailer_code,
        rating: element.rating,
        runtime: element.runtime,
        genres: element.genres,
        description: element.description_full,
        language: element.language,
        cover_image: element.medium_cover_image,
        background_image: element.background_image,
        torrents: torrents,
      });
    });

    return movies;
  } catch (ex) {
    errorLog(ex);
  }
};

module.exports = { getMovie, searchForMovie };
