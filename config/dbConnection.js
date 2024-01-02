const mongoose = require("mongoose");

console.log('db connection call');

mongoose.connect("mongodb+srv://mukunddtridhyatech:pIlC1zNmYwPSKgy0@cluster0.ipzv69o.mongodb.net/example");

mongoose.connection.on("connected", async () => {
    console.log("Database connected!")
})

module.exports = mongoose;