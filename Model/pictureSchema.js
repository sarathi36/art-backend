const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
      // unique: true,
    },
    Url : {
        type : String, 
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("picture", pictureSchema);