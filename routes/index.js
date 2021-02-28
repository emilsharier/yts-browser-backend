const movie = require("./movie");
const Cron = require("./cron");

module.exports = (app) => {
  app.use("/movie", movie);
  app.get("/keepMeAlive", (req, res) => {
    res.sendStatus(200);
  });
  app.use("/cron", Cron);
};
