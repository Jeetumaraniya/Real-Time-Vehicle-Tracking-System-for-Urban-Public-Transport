const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  busNumber: String,
  latitude: Number,
  longitude: Number,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
