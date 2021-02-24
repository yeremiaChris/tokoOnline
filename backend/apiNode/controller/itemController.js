const Ninja = require("../models/ninja");
const fs = require("fs");
require("dotenv/config");

// multer

const multipart = require("connect-multiparty");
const util = require("util");
const multipartMiddleware = multipart();

// akhir multer

module.exports.items_get = (req, res, next) => {
  Ninja.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

module.exports.items_post = (req, res, next) => {
  const obj = {
    name: req.body.name,
    harga: req.body.harga,
    jenis: req.body.jenis,
    deskripsi: req.body.deskripsi,
    images: req.files.map((item, index) => {
      return {
        name: item.originalname,
        fileName: item.filename,
        tempat: item.path,
      };
    }),
  };
  Ninja.create(obj)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch(next);
};

module.exports.items_put = (req, res, next) => {
  const images = [];
  // if (req.files.length === 0) {
  //   req.body.images.map((item) => images.push(JSON.parse(item)));
  // } else {
  //   const array = req.files.map((item) => JSON.parse(item));
  //   images.push(array);
  // }
  if (req.files.length === 0) {
    req.body.images.map((item) => images.push(JSON.parse(item)));
  } else {
    req.files.map((item) => images.push(item));
  }
  const obj = {
    _id: req.params.id,
    name: req.body.name,
    harga: req.body.harga,
    jenis: req.body.jenis,
    deskripsi: req.body.deskripsi,
    images: images.map((item) => {
      return {
        name: item.srcImage.slice(9),
        fileName: item.name,
        tempat: item.src,
      };
    }),
  };
  Ninja.findByIdAndUpdate({ _id: req.params.id }, obj)
    .then(() => {
      Ninja.findOne({ _id: req.params.id })
        .then((data) => {
          res.send(data);
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.items_delete = (req, res, next) => {
  Ninja.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      data.images.map((item) => {
        fs.unlink(item.tempat, function (err) {
          if (err) {
            console.log(err);
            next();
          }
        });
      });
      res.send(data);
    })
    .catch(next);
};
