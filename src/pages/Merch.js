import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProfileImage from '../components/ProfileImage';

const Merch = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <ProfileImage />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontFamily: 'Rockwell, serif',
            color: '#000000',
          }}
        >
          Merchandise
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Coming soon...
        </Typography>
      </Container>
    </Box>
  );
};

export default Merch; 