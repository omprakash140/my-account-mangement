const mongoose = require('mongoose');
const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`${connect.connection.host} =>  host`.bgYellow);
}

module.exports = connectDB;