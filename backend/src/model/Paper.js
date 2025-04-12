import mongoose from 'mongoose';

const paperSchema = new mongoose.Schema({
  paper_code: { type: String, required: true },
  course_id: { type: String, required: true },
  topic_name: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true },
  paper_name: { type: String, required: true },
  semester: { type: String, required: true },
  teacher_name: { type: String, required: true },
  teacher_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Paper', paperSchema);