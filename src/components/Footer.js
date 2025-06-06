import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <IconButton
            href="https://www.instagram.com/simplyeto/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#E1306C',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <InstagramIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            href="https://x.com/SimplyEto"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#1DA1F2',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <TwitterIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 