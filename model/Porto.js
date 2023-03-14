import { Schema, model } from "mongoose";

const PortoSchema = new Schema({
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
  country: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
  lat_float: {
    type: Number,
    required: true,
  },
  lon_float: {
    type: Number,
    required: true,
  },
});

export default model("Porto", PortoSchema);
