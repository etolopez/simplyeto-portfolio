import React from 'react';
import { Box } from '@mui/material';

const VideoPlayer = ({ src, thumbnail }) => {
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
      >
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer; 