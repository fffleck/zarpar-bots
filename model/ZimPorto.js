const { Schema, model } = require("mongoose");

const ZimPortoSchema = new Schema({
  port_id: {
    type: String,
    required: true,
    unique: true,
  },
  port_name: {
    type: String,
    required: true,
  },
  port_code: {
    type: String,
    required: true,
  },
});

module.exports = model("ZimPorto", ZimPortoSchema);
