const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema(
  {
    Year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("chartdata", chartSchema);