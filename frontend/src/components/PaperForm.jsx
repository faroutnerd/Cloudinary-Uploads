import React, { useState } from 'react';
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
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === 'image') {
      setImage(e.target.files[0]);
    } else if (e.target.name === 'video') {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);
    if (video) data.append('video', video);

    try {
      const response = await axios.post('http://localhost:3000/api/papers', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Paper uploaded successfully!');
      // Reset form
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
    } catch (error) {
      setMessage('Error uploading paper: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Upload Paper</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Paper Code:</label>
          <input
            type="text"
            name="paper_code"
            value={formData.paper_code}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Course ID:</label>
          <input
            type="text"
            name="course_id"
            value={formData.course_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Topic Name:</label>
          <input
            type="text"
            name="topic_name"
            value={formData.topic_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Paper Name:</label>
          <input
            type="text"
            name="paper_name"
            value={formData.paper_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Teacher Name:</label>
          <input
            type="text"
            name="teacher_name"
            value={formData.teacher_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Teacher ID:</label>
          <input
            type="text"
            name="teacher_id"
            value={formData.teacher_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Video:</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaperForm;