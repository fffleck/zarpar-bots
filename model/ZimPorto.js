import { Schema, model } from "mongoose";

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

export default model("ZimPorto", ZimPortoSchema);
