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
  const array = [];
  files.map((item, index) => {
    const obj = {
      name: item.originalname,
      fileName: item.filename,
      tempat: item.path,
      src: {
        data: fs.readFileSync(item.path),
        contentType: item.mimetype,
      },
    };
    return array.push(obj);
  });
  const objs = req.body;
  const obj = {
    name: objs.name,
    harga: parseInt(objs.harga),
    jenis: objs.jenis,
    deskripsi: objs.deskripsi,
    images: array,
  };
  Ninja.create(obj, (err, data) => {
    if (err) {
      console.log("CREATE Error: " + err);
      res.status(500).send("Error");
      next();
    } else if (data) {
      console.log(data);
      res.status(201).json(data);
    } else {
      console.log("error");
      next();
    }
  });
};

module.exports.items_put = (req, res, next) => {
  const gambarHapus = JSON.parse(req.body.pathYangDiHapus);
  const images = [];
  req.body.images.map((item) => {
    const objek = JSON.parse(item);
    return {
      name: "terdampak-covid.jpeg",
      fileName: "603a0eaf56f317052b4b0c50",
      tempat: "../../public/uploads/images-1614417582486.jpeg",
    };
  });
  const obj = {
    name: req.body.name,
    harga: req.body.harga,
    jenis: req.body.jenis,
    deskripsi: req.body.deskripsi,
    images: images,
  };
  res.send("update");
  // Ninja.findByIdAndUpdate({ _id: req.params.id }, obj, { new: true })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(next);
};

module.exports.items_delete = (req, res, next) => {
  Ninja.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log("error cuy : ", err);
      next();
    } else if (doc) {
      doc.remove(() => {
        console.log(doc);
        res.status(201).json(doc);
      });
    } else {
      next();
    }
  });
};
