import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProfileImage from '../components/ProfileImage';

const Store = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
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
          src="https://www.youtube.com/embed/AMq044tk4HY?autoplay=1&mute=1&loop=1&playlist=AMq044tk4HY&controls=0&showinfo=0&rel=0"
          title="Store Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
      </Box>

      {/* Home Button */}
      <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 9999 }}>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <ProfileImage
            src="/images/art/Mugennight (1).png"
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
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Store
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              href="https://www.inprnt.com/gallery/simplyeto/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Prints
            </Button>

            <Button
              variant="contained"
              href="https://www.mallow.art/u/simplyeto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Mallow 1:1 Art
            </Button>

            <Button
              variant="contained"
              href="https://simplyeto.gumroad.com/l/freehandwatercolorandink?layout=profile"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Learn to Draw with me
            </Button>

            <Button
              variant="contained"
              href="https://fostermarketplace.app/SimplyEto/merch"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Merch
            </Button>

            <Button
              variant="contained"
              href="https://drip.haus/simplyeto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Drip
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Store; 