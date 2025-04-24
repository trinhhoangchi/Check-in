const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    teacherId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mail: { type: String, required: true}
});

module.exports = mongoose.model("Teacher", TeacherSchema);

