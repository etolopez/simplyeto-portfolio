import React, { useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Gallery from '../components/Gallery';
import ProfileImage from '../components/ProfileImage';

const Photography = () => {
  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const photographyItems = useMemo(() => {
    const allItems = [
      {
        type: 'image',
        src: '/images/photography/DSC01680.jpg',
        alt: 'Photography 1'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01641.jpg',
        alt: 'Photography 2'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01983-HDR.jpg',
        alt: 'Photography 3'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01918-HDR.jpg',
        alt: 'Photography 4'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01747.jpg',
        alt: 'Photography 5'
      },
      {
        type: 'image',
        src: '/images/photography/DSC07504.png',
        alt: 'Photography 6'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03282.jpg',
        alt: 'Photography 7'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03185-HDR.jpg',
        alt: 'Photography 8'
      },
      {
        type: 'image',
        src: '/images/photography/DSCF4194.jpg',
        alt: 'Photography 9'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03323.jpg',
        alt: 'Photography 10'
      },
      {
        type: 'image',
        src: '/images/photography/DSC00437.jpg',
        alt: 'Photography 11'
      },
      {
        type: 'image',
        src: '/images/photography/DSC08097.jpg',
        alt: 'Photography 12'
      },
      {
        type: 'image',
        src: '/images/photography/DSC06451.png',
        alt: 'Photography 13'
      },
      {
        type: 'image',
        src: '/images/photography/DSC06589.png',
        alt: 'Photography 14'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03707.jpg',
        alt: 'Photography 15'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01995.JPG',
        alt: 'Photography 16'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03936.JPG',
        alt: 'Photography 17'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04041.jpg',
        alt: 'Photography 18'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04310.JPG',
        alt: 'Photography 19'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04385-Editar.jpg',
        alt: 'Photography 20'
      },
      {
        type: 'image',
        src: '/images/photography/DSC05306.JPG',
        alt: 'Photography 21'
      },
      {
        type: 'image',
        src: '/images/photography/DSC05666-Edit.JPG',
        alt: 'Photography 22'
      },
      {
        type: 'image',
        src: '/images/photography/DSC06367.JPG',
        alt: 'Photography 23'
      },
      {
        type: 'image',
        src: '/images/photography/DSC06496.JPG',
        alt: 'Photography 24'
      },
      {
        type: 'image',
        src: '/images/photography/Epic (1).jpg',
        alt: 'Photography 25'
      },
      {
        type: 'image',
        src: '/images/photography/Epic7.jpg',
        alt: 'Photography 26'
      },
      {
        type: 'image',
        src: '/images/photography/3.png',
        alt: 'Photography 27'
      }
    ];
    return shuffleArray(allItems);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        pt: { xs: 8, md: 10 },
        pb: 8,
      }}
    >
      <ProfileImage />
      <Container maxWidth="lg">
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
          Photography Collection
        </Typography>
        <Gallery items={photographyItems} type="photography" />
      </Container>
    </Box>
  );
};

export default Photography; 