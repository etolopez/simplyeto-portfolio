<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const VideoPlayer = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState('');
=======
import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState(null);
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
<<<<<<< HEAD
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
=======
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
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
  );
};

export default VideoPlayer; 