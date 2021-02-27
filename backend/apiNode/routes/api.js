const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");
const multer = require("multer");
const path = require("path");

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
});
// get list of ninjas from db
router.get("/items", itemController.items_get);

router.post("/items", upload.array("images"), itemController.items_post);

// update a ninja in db
router.put("/items/:id", upload.array("images"), itemController.items_put);

// delete ninja in db
router.delete("/items/:id", itemController.items_delete);

module.exports = router;
