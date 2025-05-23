const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
