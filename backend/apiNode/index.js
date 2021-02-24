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

// middleware untuk mengakses response data
app.use(bodyParser.json());
// middleware untuk access public folder
app.use(express.static("../../public"));
// middleware untuk cors
app.use(cors());
// router
app.use("/api", routerApi);
// middleware kalo ada error
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});

// listen port
app.listen(process.env.port || 5000, () => {
  console.log("ada di port 5000");
});
