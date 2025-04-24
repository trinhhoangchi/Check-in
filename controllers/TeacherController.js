const teacherService =require("../services/TeacherService");
const TeacherSchema = require("../models/Teacher.js");

exports.getAllTeachers = async (req, res) => {
    try{
        const teachers = await teacherService.getAllTeacher();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: teachers, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createTeacher = async (req, res) =>{
    try{
        const teacher = await teacherService.createTeacher(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: teacher, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getTeacherById = async (req, res) =>{
    try{
        const teacher = await teacherService.getTeacherById(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: teacher, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateTeacher = async (req, res) =>{
    try{

        const teacher = await teacherService.updateTeacher(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (teacher == null) {
            res.status(404).json({ message : `Không tìm thấy giảng viên có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: teacher, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id giảng viên không hợp lệ`});
    }
};
exports.deleteTeacher = async (req, res) =>{
    try{
        const teacher = await teacherService.deleteTeacher(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (teacher == null) {
            res.status(404).json({ message : `Không tìm thấy giảng viên có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: teacher, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id giảng viên không hợp lệ`});
    }
};