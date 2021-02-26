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
    .sort({ createdAt: -1 })
    .exec((err, doc) => {
      if (err) {
        return next();
      }
      res.send(doc);
    });
};

module.exports.items_post = (req, res, next) => {
  const files = req.files;
  const objs = req.body;
  const obj = {
    name: objs.name,
    harga: parseInt(objs.harga),
    jenis: objs.jenis,
    deskripsi: objs.deskripsi,
    images: files.map((item) => {
      return {
        name: item.originalname,
        fileName: item.filename,
        tempat: item.path,
      };
    }),
  };
  Ninja.create(obj, (err, data) => {
    if (err) {
      console.log("CREATE Error: " + err);
      res.status(500).send("Error");
      next();
    } else {
      Ninja.find({})
        .sort({ createdAt: -1 })
        .exec((err, doc) => {
          if (err) {
            return next();
          }
          res.send(doc);
        });
    }
  });
};

module.exports.items_put = (req, res, next) => {
  const images = [];
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
        name: item.name,
        fileName: item.srcImage.slice(9),
        tempat: item.src,
      };
    }),
  };
  Ninja.findByIdAndUpdate({ _id: req.params.id }, obj)
    .then(() => {
      Ninja.findOne({ _id: req.params.id })
        .then((data) => {
          console.log(data);
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
      console.log(data);
      Ninja.find({})
        .sort({ createdAt: -1 })
        .exec((err, doc) => {
          if (err) {
            return next();
          }
          res.send(doc);
        });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
