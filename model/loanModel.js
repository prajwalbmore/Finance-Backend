const  mongoose  = require("mongoose");
const { type } = require("os");

const loanSchema = new mongoose.Schema({
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
    installment :{
        type: Number
    }
})

module.exports = mongoose.model("Loan", loanSchema);
