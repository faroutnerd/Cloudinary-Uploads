import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <h2>Video Player</h2>
      <video width="640" height="360" controls>
        <source src="https://res.cloudinary.com/ddukqvsly/video/upload/v1744547646/papers/videos/ixv0wwjh6fru0rrizlpr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;