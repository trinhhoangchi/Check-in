const mongoose = require('mongoose');

const AttendedStudentSchema = new mongoose.Schema({
    students: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    attendedTime: { type: Date, default: Date.now},
    methods: { type: String, enum: ["QR Code", "Face Reconize", "Id"] }
});

module.exports = mongoose.model('AttendedStudent', AttendedStudentSchema);
