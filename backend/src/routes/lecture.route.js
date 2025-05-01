import express from 'express';
import { getLecture, uploadLecture } from '../controllers/lecture.controller.js';

const router = express.Router();

router.post('/upload-lecture', uploadLecture);
router.get('/get-lecture', getLecture)

export default router;