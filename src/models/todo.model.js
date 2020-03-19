const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    content: {
        type: String,
        required: true,
        max: 100
    },
    status: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todo", TodoSchema);