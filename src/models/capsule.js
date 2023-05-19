const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const capsuleSchema = new Schema({
  capsule_serial: { type: String, required: true },
  capsule_id: { type: String, required: true },
  status: { type: String, required: true },
  original_launch: { type: Date, required: true },
  original_launch_unix: { type: Number, required: true },
  missions: [
    {
      name: { type: String, required: true },
      flight: { type: Number, required: true },
    },
  ],
  landings: { type: Number, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true },
  reuse_count: { type: Number, required: true },
});

const Capsule = mongoose.model("capsule", capsuleSchema);

module.exports = Capsule;
