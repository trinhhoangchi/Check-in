const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    classID: { type: String, required: true, unique: true },
    className: { type: String, required: true},
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }] ,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
});

module.exports = mongoose.model("Class", ClassSchema);
