const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true
    },
    phone : {
        type: Number ,
        required : true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
      },
    createAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Member", memberSchema);