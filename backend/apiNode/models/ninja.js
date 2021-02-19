const mongoose = require("mongoose");
// create a schema mongoose
const Schema = mongoose.Schema;

// geometri schema
const ImageSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
  src: {
    data: Buffer,
    contentType: String,
  },
  srcImage: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
});

// ninja schema
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
  harga: {
    type: Number,
    required: [true, "Field ini harus di isi"],
  },
  jenis: {
    type: String,
    required: [true, "Field ini harus di isi"],
  },
  deskripsi: {
    type: String,
    required: [true, "Field ini harus di isi"],
  },
  // images: [ImageSchema],
});

// create a model
const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
