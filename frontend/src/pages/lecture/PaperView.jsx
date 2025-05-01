import React from 'react';
import { FaUser, FaCalendarAlt, FaCode, FaBookOpen, FaLayerGroup } from 'react-icons/fa';

const PaperPreview = ({ paperData }) => {
  const {
    topic_name,
    paper_name,
    teacher_name,
    upload_date,
    paper_code,
    course_id,
    semester,
    thumbnail,
    videoUrl,
  } = paperData;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{topic_name}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{paper_name}</h2>
      </div>

      <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
        <div className="flex items-center gap-2">
          <FaUser />
          <span className="font-medium">Teacher:</span> {teacher_name}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span className="font-medium">Uploaded:</span> {upload_date}
        </div>
        <div className="flex items-center gap-2">
          <FaCode />
          <span className="font-medium">Paper Code:</span> {paper_code}
        </div>
        <div className="flex items-center gap-2">
          <FaBookOpen />
          <span className="font-medium">Course ID:</span> {course_id}
        </div>
        <div className="flex items-center gap-2">
          <FaLayerGroup />
          <span className="font-medium">Semester:</span> {semester}
        </div>
      </div>

      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          poster={thumbnail}
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PaperPreview;
