import React, { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const VideoPlayer = ({ src, thumbnail }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease-in-out'
        }
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      {error ? (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            textAlign: 'center',
            padding: 2
          }}
        >
          Error loading video. Please try again later.
        </Box>
      ) : (
        <video
          controls
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          src={src}
          poster={thumbnail}
          controlsList="nodownload"
          disablePictureInPicture
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </Box>
  );
};

export default VideoPlayer; 