const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dj_443:test123@cluster0.jpifg.mongodb.net/testDB?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true });
        console.log("Connection to database Successful")
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;