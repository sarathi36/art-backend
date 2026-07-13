const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sarathi:sarathi123@cluster0.ylipc.mongodb.net/portrait?retryWrites=true&w=majority"
    )

    console.log('mongo db name' , mongoose.connection.name)

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;