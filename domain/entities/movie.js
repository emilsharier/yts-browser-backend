const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
  movie_id: {
    type: Number,
    required: [true, "No movie ID is present"],
  },
  url: {
    type: String,
  },
  summary: {
    type: String,
    default: "",
  },
  imdb_code: {
    type: String,
  },
  title: {
    type: String,
  },
  year: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  runtime: {
    type: Number,
  },
  genres: {
    type: Array,
    default: [""],
  },
  description: {
    type: String,
    default: "",
  },
  language: {
    type: String,
  },
  cover_image: {
    type: String,
  },
  background_image: {
    type: String,
  },
  youtube_trailer: {
    type: String,
    default: "",
  },
  torrents: [
    {
      url: {
        type: String,
      },
      hash: {
        type: String,
      },
      quality: {
        type: String,
      },
      type: {
        type: String,
      },
      seeds: {
        type: Number,
      },
      peers: {
        type: Number,
      },
      size: {
        type: String,
      },
      date_uploaded: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Movie", Movie);
