const classService =require("../services/ClassService");
const ClassSchema = require("../models/Class.js");

exports.getAllClasses = async (req, res) => {
    try{
        const classes = await classService.getAllClasses();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: classes, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createClass = async (req, res) =>{
    try{
        const classes = await classService.createClass(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: classes, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getClassById = async (req, res) =>{
    try{
        const classes = await classService.getClassById(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: classes, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateClass = async (req, res) =>{
    try{

        const classes = await classService.updateClass(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (classes == null) {
            res.status(404).json({ message : `Không tìm thấy lớp học có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: classes, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id lớp học không hợp lệ`});
    }
};
exports.deleteClass = async (req, res) =>{
    try{
        const classes = await classService.deleteclasses(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (classes == null) {
            res.status(404).json({ message : `Không tìm thấy lớp học có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: classes, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id lớp học không hợp lệ`});
    }
};