import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const VideoPlayer = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/video/${filename}`);
        const data = await response.json();
        setVideoUrl(data.url);
      } catch (error) {
        console.error('Error fetching video URL:', error);
        setError(error.message);
      }
    };

    if (filename) {
      fetchVideoUrl();
    }
  }, [filename]);

  if (error) return <Box sx={{ color: 'white', p: 2 }}>Error: {error}</Box>;
  if (!videoUrl) return <Box sx={{ color: 'white', p: 2 }}>Loading video...</Box>;

  return (
    <Box sx={{ width: '100%', aspectRatio: '16/9' }}>
      <video
        controls
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer; 