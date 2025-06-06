import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ProfileImage from '../components/ProfileImage';

const Store = () => {
  const storeLinks = [
    {
      title: 'Prints',
      url: 'https://www.inprnt.com/gallery/simplyeto/',
      description: 'High-quality art prints'
    },
    {
      title: 'Learn To Draw',
      url: 'https://simplyeto.gumroad.com/l/freehandwatercolorandink?layout=profile',
      description: 'Freehand watercolor and ink tutorials'
    },
    {
      title: 'Mallow art 1:1 Shop',
      url: 'https://www.mallow.art/u/simplyeto',
      description: 'Original artwork and commissions'
    },
    {
      title: 'Merch',
      url: 'https://fostermarketplace.app/SimplyEto/merch',
      description: 'Official merchandise'
    },
    {
      title: 'Drip',
      url: 'https://drip.haus/simplyeto',
      description: 'Exclusive digital art and NFTs'
    }
  ];

  return (
    <Box>
      <ProfileImage />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
            zIndex: 0,
          }}
        >
          <source src="images/art/Lamp Lofi2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 6,
            }}
          >
            STORE
          </Typography>

          {/* Link Tree */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {storeLinks.map((link) => (
              <Button
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  py: 2,
                  px: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Box sx={{ textAlign: 'left', width: '100%' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {link.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {link.description}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Store; 