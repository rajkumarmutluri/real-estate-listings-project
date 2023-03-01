const mongoose = require("mongoose");

async function getConnection() {
    await mongoose.connect("mongodb+srv://root:realstate@cluster0.9tzgirl.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = getConnection