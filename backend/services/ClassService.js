
const ClassModel = require("../models/Class");

exports.getAllClasss = async() => {
    return await ClassModel.find();
};

exports.createClass = async(classes) => {
    return await ClassModel.create(classes);
};

exports.getClassById = async(id) => {
    return await ClassModel.findById(id);
};

exports.updateClass = async (id, classes) => {
    return await ClassModel.findByIdAndUpdate(id, classes);
};

exports.deleteClass = async (id) => {
    return await ClassModel.findByIdAndDelete(id);
}