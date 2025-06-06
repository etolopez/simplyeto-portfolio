import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileImage = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        position: 'fixed',
        top: 20,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: '50%',
        overflow: 'hidden',
        zIndex: 1000,
        border: '2px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <img
        src="/images/profile/face.jpg"
        alt="Profile"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default ProfileImage; 