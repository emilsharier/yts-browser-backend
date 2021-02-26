const movie = require("./movie");

module.exports = (app) => {
  app.use("/movie", movie);
};
