import React, { useState } from 'react';
import { Box } from '@mui/material';

const OptimizedImage = ({ src, alt, aspectRatio = '3/4' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate blur placeholder
  const blurDataURL = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
    </svg>
  `)}`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: `${(1 / aspectRatio) * 100}%`,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        '& img': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
          opacity: isLoaded ? 1 : 0,
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default OptimizedImage; 