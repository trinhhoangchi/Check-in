const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    course: { type: String, required: true},
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] 
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
