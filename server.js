const PORT = process.env.PORT || 3000;

const { dbSuccessLog } = require("./common/messages");

const morgan = require("morgan");
const express = require("express");
const app = express();

if (process.env.NODE_ENV === "dev") app.use(morgan("dev"));
else app.use(morgan("common"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/index")(app);

app.listen(PORT, () => {
  dbSuccessLog(`Server up and running at ${PORT}`);
});
