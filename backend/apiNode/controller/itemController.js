const Ninja = require("../models/ninja");
const fs = require("fs");
require("dotenv/config");
// multer
const multer = require("multer");
const path = require("path");
const multipart = require("connect-multiparty");
const util = require("util");
const multipartMiddleware = multipart();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../public/uploads");
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
}).array("images");
// akhir multer

module.exports.items_get = (req, res, next) => {
  Ninja.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

module.exports.items_post = (req, res, next) => {
  upload(req, res, function (err) {
    console.log(req.files);
    if (err) {
      return res.send("Ocurrio un error al subir el archivo.");
    }
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
        res.send(data);
      })
      .catch(next);
  });

  // upload(req, res, (err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(req.files);
  //   res.end("Your files uploaded.");
  //   console.log("Yep yep!");
  // });
  // console.log(req.body);
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
