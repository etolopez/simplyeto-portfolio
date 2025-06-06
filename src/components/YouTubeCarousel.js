import React, { useState } from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const YouTubeCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mt: 4,
        mb: 8,
      }}
    >
      {/* Previous Button */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.9)',
          },
          width: 48,
          height: 48,
          flexShrink: 0,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Video Container */}
      <Box
        sx={{
          position: 'relative',
          width: isMobile ? '100%' : '800px',
          height: isMobile ? '250px' : '450px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          '& iframe': {
            width: '100%',
            height: '100%',
            border: 'none',
          },
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Dots Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2,
          }}
        >
          {videos.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.9)',
          },
          width: 48,
          height: 48,
          flexShrink: 0,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default YouTubeCarousel; 