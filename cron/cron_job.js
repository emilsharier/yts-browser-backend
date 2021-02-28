const Movie = require("../domain/entities/movie");
const axios = require("axios").default;
const { errorLog } = require("../common/messages");
const { base_url } = require("../constants/urls");

exports.cacheAPI = async () => {
  try {
    Movie.deleteMany({}, deleteCallback);
    let i = 0;
    let movies = [];
    for (i = 1; i <= 50; i++) {
      let result = await axios.get(base_url, {
        params: {
          page: i,
        },
      });
      let temp = result.data.data.movies;

      temp.forEach((element) => {
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

        movies.push(
          new Movie({
            movie_id: element.id,
            url: element.url,
            imdb_code: element.imdb_code,
            title: element.title,
            year: element.year,
            rating: element.rating,
            runtime: element.runtime,
            genres: element.genres,
            description: element.description_full,
            language: element.language,
            cover_image: element.medium_cover_image,
            background_image: element.background_image,
            torrents: torrents,
          })
        );
      });
    }
    await Movie.insertMany(movies);
  } catch (ex) {
    errorLog("Cron job failed");
    errorLog(ex);
  }
};

deleteCallback = (err) => {
  if (err) errorLog(err);
};
