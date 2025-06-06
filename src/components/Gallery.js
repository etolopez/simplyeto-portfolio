import React from 'react';
import { Box, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import VideoPlayer from './VideoPlayer';

const Gallery = ({ items, type }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{ width: 'auto' }}
      >
        {items.map((item, index) => (
          <Box
            key={`${type}-${index}`}
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out'
              }
            }}
          >
            {item.type === 'video' ? (
              <VideoPlayer
                src={item.src}
                thumbnail={item.thumbnail}
              />
            ) : (
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            )}
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default Gallery; 