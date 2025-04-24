const deviceService =require("../services/DeviceService");
const DeviceSchema = require("../models/Device.js");

exports.getAllDevices = async (req, res) => {
    try{
        const devices = await deviceService.getAllDevices();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: devices, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createDevice = async (req, res) =>{
    try{
        const device = await deviceService.createDevice(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: device, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getDeviceById = async (req, res) =>{
    try{
        const device = await deviceService.getDeviceById(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: device, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateDevice = async (req, res) =>{
    try{

        const device = await deviceService.updateDevice(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (device == null) {
            res.status(404).json({ message : `Không tìm thấy thiết bị có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: device, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id thiết bị không hợp lệ`});
    }
};
exports.deleteDevice = async (req, res) =>{
    try{
        const device = await deviceService.deleteDevice(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (device == null) {
            res.status(404).json({ message : `Không tìm thấy thiết bị có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: device, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id thiết bị không hợp lệ`});
    }
};