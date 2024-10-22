const mongoose = require('mongoose');
const { type } = require('os');

const FDSchema = new mongoose.Schema({
    memberId :{
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    amount :{
        type: mongoose.Schema.Types.Decimal128,
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
    status:{
        type: Boolean,
        default: false
    },
    isPreMature:{
        type: Boolean,
        default: false
    },
    amountAfterMaturity:{
        type: mongoose.Schema.Types.Decimal128,
    },
    amountBeforeMaturity:{
        type: mongoose.Schema.Types.Decimal128,
        default: null
    }

})

module.exports = mongoose.model("FD", FDSchema);