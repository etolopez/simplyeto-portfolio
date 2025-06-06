import React, { useMemo } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Gallery from '../components/Gallery';

const Home = () => {
  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Photography items (6 items total)
  const photographyItems = useMemo(() => {
    const allPhotographyItems = [
      {
        type: 'image',
        src: '/images/photography/DSC01641.jpg',
        alt: 'Photography 1'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03282.jpg',
        alt: 'Photography 2'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03185-HDR.jpg',
        alt: 'Photography 3'
      },
      {
        type: 'image',
        src: '/images/photography/DSCF4194.jpg',
        alt: 'Photography 4'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03323.jpg',
        alt: 'Photography 5'
      },
      {
        type: 'image',
        src: '/images/photography/DSC00437.jpg',
        alt: 'Photography 6'
      },
      {
        type: 'image',
        src: '/images/photography/DSC08097.jpg',
        alt: 'Photography 7'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01641.jpg',
        alt: 'Photography 8'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03282.jpg',
        alt: 'Photography 9'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03185-HDR.jpg',
        alt: 'Photography 10'
      },
      {
        type: 'image',
        src: '/images/photography/DSCF4194.jpg',
        alt: 'Photography 11'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03323.jpg',
        alt: 'Photography 12'
      },
      {
        type: 'image',
        src: '/images/photography/DSC00437.jpg',
        alt: 'Photography 13'
      },
      {
        type: 'image',
        src: '/images/photography/DSC08097.jpg',
        alt: 'Photography 14'
      }
    ];
    return shuffleArray(allPhotographyItems).slice(0, 6);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Hero Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          '& video': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pt: { xs: 8, md: 10 },
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          {/* Social Media Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 4
            }}
          >
            <Button
              component="a"
              href="https://instagram.com/simplyeto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </Button>
            <Button
              component="a"
              href="https://youtube.com/@simplyeto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <YouTubeIcon sx={{ fontSize: 40 }} />
            </Button>
            <Button
              component="a"
              href="https://twitter.com/simplyeto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <TwitterIcon sx={{ fontSize: 40 }} />
            </Button>
          </Box>

          {/* Photography Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center'
              }}
            >
              Photography
            </Typography>
            <Gallery items={photographyItems} type="photography" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 