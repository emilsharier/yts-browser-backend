const movie = require("./movie");

module.exports = (app) => {
  app.use("/movie", movie);
  app.get("/keepMeAlive", (req, res) => {
    res.sendStatus(200);
  });
};
