const mongoose = require("mongoose");

console.log(process.env.DB_URL);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
    }
};

module.exports = connectDB;