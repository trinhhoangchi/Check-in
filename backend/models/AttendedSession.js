const mongoose = require("mongoose");

const AttendedSessionSchema = new mongoose.Schema({
    attendedSessionID: { type: String, required: true, unique: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }] ,
    attendedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "AttendedStudent" }] ,
    startTime: { type: Date, required: true}, 
    endTime: { type: Date, default: () => new Date(Date.now() + 25 * 60 * 1000), required: true}, 
    device: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" }
});

module.exports = mongoose.model("AttendedSession", AttendedSessionSchema);
