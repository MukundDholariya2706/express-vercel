const mongoose = require("mongoose");

console.log('db connection call');

mongoose.connect("'mongodb+srv://mukunddtridhyatech:2ppUJEJD61nF7ZiX@shopping-clone-db.iiirlyy.mongodb.net/shopping_clone");

mongoose.connection.on("connected", async () => {
    console.log("Database connected!")
})

module.exports = mongoose;