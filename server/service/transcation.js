// import Transcation from "../model/transcationObj";

const Transcation = require("../model/transcation");

const transcationObj = {};

transcationObj.get = async function (id) {
    if (id) {
        return await Transcation.findById(id);
    }
    return await Transcation.find();
}

transcationObj.add = async function (transcationObj) {
    console.log("transcationObj " + transcationObj);
    return await Transcation.create(transcationObj);
}

transcationObj.update = async function (id, transcationObj) {
    return await Transcation.findByIdAndUpdate(id, transcationObj);
}
transcationObj.delete = async function (id) {
    return await Transcation.findByIdAndDelete(id);
}
module.exports = transcationObj;