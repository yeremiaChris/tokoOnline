const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

// get list of ninjas from db
router.get("/items", itemController.items_get);

router.post("/items", itemController.items_post);

// update a ninja in db
router.put("/items/:id", itemController.items_put);

// delete ninja in db
router.delete("/items/:id", itemController.items_delete);

module.exports = router;
