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
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
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
      res.send(data);
    })
    .catch(next);
};
