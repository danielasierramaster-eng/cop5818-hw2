// app.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ ok: true, message: 'HW2 API (HW1-aligned)' }));
app.use('/api/v1', apiRouter);

// IMPORTANT: no mongoose.connect() and no app.listen() here.
export default app;
