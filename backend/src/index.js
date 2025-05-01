import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import fileupload from 'express-fileupload';  // Middleware for file uploads
import { connectDB } from './lib/db.js';

import lectureRoute from './routes/lecture.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(path.resolve(), 'temp'),
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB limit for videos
  })
);

// Routes
app.use('/api/lectures', lectureRoute);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});