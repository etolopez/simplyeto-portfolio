import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`https://your-api-url/api/video/${filename}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video URL');
        }
        const data = await response.json();
        setVideoUrl(data.url);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchVideoUrl();
  }, [filename]);

  if (error) {
    return <div>Error loading video: {error}</div>;
  }

  if (!videoUrl) {
    return <div>Loading...</div>;
  }

  return (
    <video controls width="100%">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer; 