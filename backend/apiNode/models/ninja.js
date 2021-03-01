const mongoose = require("mongoose");
// create a schema mongoose
const Schema = mongoose.Schema;

// geometri schema
const ImageSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
  fileName: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
  tempat: {
    type: String,
    required: [true, "Field ini harus ada"],
  },
  src: {
    data: String,
    contentType: String,
  },
});

// ninja schema
const NinjaSchema = new Schema(
  {
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
    images: [ImageSchema],
  },
  { timestamps: true }
);

// create a model
const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
