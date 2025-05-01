import React, { useState } from 'react';
import { FaImage, FaVideo } from 'react-icons/fa';
import axios from 'axios';

const PaperForm = () => {
  const [formData, setFormData] = useState({
    paper_code: '',
    course_id: '',
    topic_name: '',
    paper_name: '',
    semester: '',
    teacher_name: '',
    teacher_id: '',
  });

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === 'image') {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else if (e.target.name === 'video') {
      setVideo(file);
      setVideoUploaded(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);
    if (video) data.append('video', video);

    try {
      await axios.post('http://localhost:3000/api/papers', data);
      setMessage('Paper uploaded successfully!');
      setFormData({
        paper_code: '',
        course_id: '',
        topic_name: '',
        paper_name: '',
        semester: '',
        teacher_name: '',
        teacher_id: '',
      });
      setImage(null);
      setVideo(null);
      setImagePreview(null);
      setVideoUploaded(false);
    } catch (err) {
      setMessage('Error uploading paper.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6">Paper Upload Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Paper Code *</label>
          <input
            type="text"
            name="paper_code"
            value={formData.paper_code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Course ID *</label>
          <input
            type="text"
            name="course_id"
            value={formData.course_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Topic Name *</label>
          <input
            type="text"
            name="topic_name"
            value={formData.topic_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Paper Name *</label>
          <input
            type="text"
            name="paper_name"
            value={formData.paper_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Semester *</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          >
            <option value="">Select Semester</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Teacher Name *</label>
          <input
            type="text"
            name="teacher_name"
            value={formData.teacher_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Teacher ID *</label>
          <input
            type="text"
            name="teacher_id"
            value={formData.teacher_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            required
          />
        </div>

        <div className="md:col-span-2">
  <label className="block font-medium mb-2">Upload Files *</label>
  <div className="flex flex-col md:flex-row gap-6">
    {/* Image Upload */}
    <div className="flex-1">
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center bg-gray-50">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          required
        />
        {imagePreview ? (
          <img src={imagePreview} alt="preview" className="h-full object-contain" />
        ) : (
          <FaImage className="text-3xl text-gray-400" />
        )}
      </div>
      <p className="text-center mt-1 text-sm text-gray-500">Image</p>
    </div>

    {/* Video Upload */}
    <div className="flex-1">
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center bg-gray-50">
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          required
        />
        <FaVideo className={`text-3xl ${videoUploaded ? 'text-blue-600' : 'text-gray-400'}`} />
      </div>
      <p className="text-center mt-1 text-sm text-gray-500">Video</p>
    </div>
  </div>
</div>


        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Upload Lecture
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default PaperForm;
