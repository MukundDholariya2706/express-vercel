const mongoose = require("mongoose");

console.log('db connection call');

mongoose.connect("mongodb://localhost:27017/express-vercel");

mongoose.connection.on("connected", async () => {
    console.log("Database connected!")
})

module.exports = mongoose;