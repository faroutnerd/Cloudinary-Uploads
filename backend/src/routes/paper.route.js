import express from 'express';
import { createPaper } from '../controllers/paperController.js';

const router = express.Router();

router.post('/', createPaper);

export default router;