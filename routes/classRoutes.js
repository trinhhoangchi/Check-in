const express = require("express");
const Class = require("../models/Class");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const router = express.Router();

// 1. API tạo lớp học mới
router.post("/create", async (req, res) => {
    try {
        const { className, teacherId } = req.body;  // Thêm teacherId

        let existingClass = await Class.findOne({ className });
        if (existingClass) return res.status(400).json({ msg: "Lớp học đã tồn tại!" });

        // Kiểm tra xem giáo viên có tồn tại không
        const teacher = await Teacher.findById(teacherId);
        if (!teacher) return res.status(404).json({ msg: "Giáo viên không tồn tại!" });

        const newClass = new Class({ className, teacher: teacherId, students: [] });
        await newClass.save();

        res.status(201).json({ msg: "Tạo lớp thành công!", class: newClass });
    } catch (err) {
        res.status(500).json({ msg: "Lỗi server" });
    }
});


// 2. API thêm sinh viên vào lớp
router.post("/add-student", async (req, res) => {
    try {
        const { studentId, className } = req.body;

        // Tìm lớp
        let classObj = await Class.findOne({ className });
        if (!classObj) return res.status(404).json({ msg: "Lớp học không tồn tại!" });

        // Tìm sinh viên
        let existingStudent = await Student.findOne({ studentId });
        if (existingStudent) {
            // Kiểm tra sinh viên đã có trong lớp này chưa
            if (existingStudent.classes.includes(classObj._id)) {
                return res.status(400).json({ msg: "Sinh viên đã có trong lớp này!" });
            }
            // Thêm lớp vào mảng classes của sinh viên
            existingStudent.classes.push(classObj._id);
            await existingStudent.save();
        } else {
            // Nếu sinh viên chưa tồn tại, tạo mới sinh viên
            const newStudent = new Student({ studentId, classes: [classObj._id] });
            await newStudent.save();
        }

        // Thêm sinh viên vào lớp
        classObj.students.push(existingStudent ? existingStudent._id : newStudent._id);
        await classObj.save();

        res.status(201).json({ msg: "Thêm sinh viên thành công!", student: existingStudent || newStudent });
    } catch (err) {
        res.status(500).json({ msg: "Lỗi server" });
    }
});



// 3. API lấy danh sách sinh viên trong lớp
router.get("/students/:className", async (req, res) => {
    try {
        const { className } = req.params;

        // Tìm lớp và populate danh sách sinh viên
        const classObj = await Class.findOne({ className }).populate("students");
        if (!classObj) return res.status(404).json({ msg: "Lớp học không tồn tại!" });

        res.json({ class: classObj.className, students: classObj.students });
    } catch (err) {
        res.status(500).json({ msg: "Lỗi server" });
    }
});



module.exports = router;
