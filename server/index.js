import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import authRoutes from './routes/auth.js';
import cors from 'cors'
dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  credentials: true
}));
app.use(express.json());



app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3001, () => console.log('Server running at http://localhost:3001'));
  })
  .catch((err) => console.log(err));
