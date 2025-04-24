const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    deviceID: { type: String, required: true, unique: true },
    deviceName: { type: String, required: true},
    position: { type: String, required: true}
});

module.exports = mongoose.model("Device", DeviceSchema);
