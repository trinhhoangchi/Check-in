
const DeviceModel = require("../models/Device");

exports.getAllDevices = async() => {
    return await DeviceModel.find();
};

exports.createDevice = async(device) => {
    return await DeviceModel.create(device);
};

exports.getDeviceById = async(id) => {
    return await DeviceModel.findById(id);
};

exports.updateDevice = async (id, device) => {
    return await DeviceModel.findByIdAndUpdate(id, device);
};

exports.deleteDevice = async (id) => {
    return await DeviceModel.findByIdAndDelete(id);
}