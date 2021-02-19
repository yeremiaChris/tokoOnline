const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
const fs = require("fs");
require("dotenv/config");
const multer = require("multer");
const path = require("path");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../src/image");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// get list of ninjas from db
router.get("/items", (req, res, next) => {
  Ninja.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

// add list of ninjas to db
router.post("/items", upload.single("test"), (req, res, next) => {
  console.log(req.file);
  // adding data and save to db
  // const obj = {
  //   name: req.body.nama,
  //   harga: req.body.harga, q
  //   jenis: req.body.jenis,
  //   deskripsi: req.body.deskripsi,
  // images: [
  //   req.body.images.map((item) => {
  //     return {
  //       name: item.name,
  //       src: fs.readFileSync(path.join(__dirname + "/uploads/" + item.name)),
  //       srcImage: item.srcImage,
  //     };
  //   }),
  // ],
  // };
  // Ninja.create(obj)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch(next);
});

// update a ninja in db
router.put("/items/:id", (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Ninja.findOne({ _id: req.params.id })
        .then((data) => {
          res.send(data);
        })
        .catch(next);
    })
    .catch(next);
});

// delete ninja in db
router.delete("/items/:id", (req, res, next) => {
  Ninja.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

module.exports = router;
