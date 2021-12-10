const mongoose = require("mongoose");

const celeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: String, required: true },
  },
  { collection: "celebrities" }
);

const celeSc = mongoose.model("celeSc", celeSchema);

module.exports = celeSc;
