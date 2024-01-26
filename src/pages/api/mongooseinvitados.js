// pages/api/mongooseinvitados.js
import mongoose from 'mongoose';

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('DB MONGODB is connected');
  } catch (error) {
    console.error(error);
  }
};


connectDB();

export default connectDB;
