const mongoose = require("mongoose");

const connectdb = async()=>{
    await mongoose.connect("mongodb+srv://fahad:Fahad77@stylo.610yksr.mongodb.net/");
    console.log("Mongo Connected Successfully");
}

module.exports = connectdb;