import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ProfileImage from '../components/ProfileImage';

const About = () => {
  return (
    <Box>
      <ProfileImage />

      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/art/DSC03300 (1).jpg"
          alt="Hero Background"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            About
          </Typography>
        </Container>
      </Box>

      {/* Profile Section */}
      <Box sx={{ py: 8, bgcolor: 'rgba(0, 0, 0, 0.9)' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              p: 4,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                  component="img"
                  src="/images/profile/face.jpg"
                  alt="Profile"
                  sx={{
                    width: 250,
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    border: '3px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography variant="h4" sx={{ color: 'white', margin: 0 }}>
                  Hello,<br />
                  my name is Roberto.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      I am a passionate artist and multimedia creative based in Costa Rica. With a keen eye for detail and a love for storytelling.
                      <br></br>
                      <br></br>
                      I specialize in capturing moments that tell unique stories through visual media.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      My journey in art and multimedia began in 2016. Since then, I've had the privilege of working with various local and international clients and projects, each one helping me grow and refine my craft.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Contact Buttons */}
      <Box sx={{ textAlign: 'center', mt: 4, mb: 8 }}>
        <Button
          variant="contained"
          href="mailto:eto@lightsaint.media"
          sx={{
            mr: 2,
            mb: { xs: 2, sm: 0 },
            backgroundColor: 'rgba(173, 216, 230, 0.9)',
            color: 'black',
            fontSize: '1.2rem',
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(173, 216, 230, 1)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
          }}
        >
          Get in Touch
        </Button>
        <Button
          variant="contained"
          href="https://calendly.com/eto-lightsaint/30min"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'rgba(173, 216, 230, 0.9)',
            color: 'black',
            fontSize: '1.2rem',
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(173, 216, 230, 1)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
          }}
        >
          Book a Call
        </Button>
      </Box>
    </Box>
  );
};

export default About; 