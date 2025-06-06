import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

const VideoPlayer = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`/api/video/${filename}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video URL');
        }
        const data = await response.json();
        setVideoUrl(data.url);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, [filename]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Box>Error loading video: {error}</Box>;
  }

  return (
    <video
      controls
      style={{ width: '100%', height: 'auto' }}
      src={videoUrl}
      controlsList="nodownload"
      disablePictureInPicture
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer; 