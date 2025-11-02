// server.js
import mongoose from 'mongoose';
import app from './app.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hw2db';
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));
  } catch (e) {
    console.error('❌ Mongo connect failed:', e.message);
    process.exit(1);
  }
}

start();
