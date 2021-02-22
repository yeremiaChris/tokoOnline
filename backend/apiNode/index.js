const express = require("express");
const app = express();
const routerApi = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");
// connect to db
mongoose.connect("mongodb://localhost/ninjaDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connect to db");
});
app.use(cors());

app.use(express.static("../../public"));

// middleware untuk mengakses response data
app.use(bodyParser.json());

app.use("/api", routerApi);

app.use((err, req, res, next) => {
  res.send({ error: err.message });
});

app.listen(process.env.port || 5000, () => {
  console.log("ada di port 5000");
});
