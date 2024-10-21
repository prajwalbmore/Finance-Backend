const mongoose = require('mongoose');
const { type } = require('os');

const FDSchema = new mongoose.Schema({
    memberId :{
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    amount :{
        type: Number,
        required : true
    },
    interest :{
        type: Number,
        required : true
    },
    duration :{
        type : Number,
        required : true
    },
    startDate :{
        type: Date,
        default: Date.now,
    },
    

})

module.exports = mongoose.model("FD", FDSchema);