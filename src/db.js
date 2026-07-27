 const mongoose = require("mongoose");

 async function connectDB(){

    await mongoose.connect("mongodb+srv://backend:hICcd5TjhP3VRWAq@backend.6nich9k.mongodb.net/starc")
 

 console.log("connected to DB");
}

 module.exports = connectDB





