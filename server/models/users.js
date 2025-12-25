const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    image : String
});

module.exports = mongoose.model("User", usersSchema);