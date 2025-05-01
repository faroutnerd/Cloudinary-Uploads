import React from "react";
import PaperForm from "./components/PaperForm";
import PaperPreview from "./pages/lecture/PaperView"
import RecordedClassPlayer from "./pages/arnab/RecordedClassPlayer";

// Sample usage
const paper = {
  topic_name: "Variables",
  paper_name: "Python",
  teacher_name: "Dr. Monalisa",
  upload_date: "2025-05-01",
  paper_code: "MCA-101",
  course_id: "C-1",
  semester: "1st",
  thumbnail:
    "https://res.cloudinary.com/ddukqvsly/image/upload/v1746080608/papers/images/tizdjkdftxt5xakntie7.jpg",
  videoUrl:
    "https://res.cloudinary.com/ddukqvsly/video/upload/v1746080609/papers/videos/kcxkpxaeuuaiknnhrkgt.mp4",
};

function App() {
  return (
    <div>
      {/* <PaperForm />
      <PaperPreview paperData={paper} />; */}
      <RecordedClassPlayer />
    </div>
  );
}

export default App;
