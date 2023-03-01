const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.objectId;


const userSchema = new Schema({
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    confirmPassword:
    {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel