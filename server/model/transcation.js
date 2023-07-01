const mongoose = require('mongoose');

const transcation = new mongoose.Schema({
    drAcc: {
        required: true,
        type: 'string'
    },
    crAcc: {
        required: true,
        type: 'string'
    },
    amount: {
        required: true,
        type: 'string'
    },
    particular: {
        required: true,
        type: 'string'
    },
    date: {
        required: true,
        type: 'string'
    }
})


module.exports = mongoose.model("Transcation",transcation)