import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProfileImage from '../components/ProfileImage';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Video Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/U1e3UmJ8no8?autoplay=1&mute=1&loop=1&playlist=U1e3UmJ8no8&controls=0&showinfo=0&rel=0&enablejsapi=1&playsinline=1"
          title="About Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="eager"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }}
        />
      </Box>

      {/* Home Button */}
      <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 9999 }}>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <ProfileImage
            src={process.env.PUBLIC_URL + "/images/art/Mugennight (1).png"}
            alt="Eto"
            sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
              },
            }}
          />
        </RouterLink>
      </Box>

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
        <Container maxWidth="md">
          {/* Profile Section */}
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              p: 4,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
              mb: 4,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/images/profile/face.jpg"}
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

          {/* Contact Buttons */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component="a"
              href="mailto:roberto@lightsaint.com"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                mr: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Get in Touch
            </Button>
            <Button
              component="a"
              href="https://calendly.com/lightsaint/coffee-chat"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Book a Call
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 