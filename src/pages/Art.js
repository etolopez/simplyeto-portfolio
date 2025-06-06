<<<<<<< HEAD
import React, { useState } from 'react';
import { Box, Container, Typography, Dialog, DialogContent } from '@mui/material';
=======
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
import Gallery from '../components/Gallery';
import ProfileImage from '../components/ProfileImage';

const Art = () => {
<<<<<<< HEAD
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleVideoClick = (item) => {
    if (item.type === 'video') {
      setSelectedVideo(item);
      setIsPlayerOpen(true);
    }
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedVideo(null);
  };

=======
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
  const artItems = [
    // Images
    {
      type: 'image',
      src: '/images/art/FINAL.png',
      alt: 'Art 1'
    },
    {
      type: 'image',
      src: '/images/art/HEGEEME.jpg',
      alt: 'Art 2'
    },
    {
      type: 'image',
      src: '/images/art/DSC03300 (1).jpg',
      alt: 'Art 3'
    },
    {
      type: 'image',
<<<<<<< HEAD
=======
      src: '/images/art/DSC06360.png',
      alt: 'Art 4'
    },
    {
      type: 'image',
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
      src: '/images/art/Carne\'Gato.png',
      alt: 'Art 5'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 92.png',
      alt: 'Art 6'
    },
    {
      type: 'image',
      src: '/images/art/AZ.png',
      alt: 'Art 7'
    },
    {
      type: 'image',
      src: '/images/art/A_Long_Way_Home.jpg',
      alt: 'Art 8'
    },
    {
      type: 'image',
      src: '/images/art/Copos.png',
      alt: 'Art 9'
    },
    {
      type: 'image',
      src: '/images/art/Fly.jpg',
      alt: 'Art 10'
    },
    {
      type: 'image',
      src: '/images/art/IMG_2653.png',
      alt: 'Art 11'
    },
    {
      type: 'image',
      src: '/images/art/Mugennight (1).png',
      alt: 'Art 12'
    },
    {
      type: 'image',
      src: '/images/art/Sidewalk.png',
      alt: 'Art 13'
    },
    {
      type: 'image',
      src: '/images/art/THe Power of Balance.jpg',
      alt: 'Art 14'
    },
    {
      type: 'image',
      src: '/images/art/The_Wiz.png',
      alt: 'Art 15'
    },
    {
      type: 'image',
      src: '/images/art/Traveler.png',
      alt: 'Art 16'
    },
    // Additional Images
    {
      type: 'image',
      src: '/images/art/DSC03115.jpg',
      alt: 'Art 17'
    },
    {
      type: 'image',
      src: '/images/art/DSC03108.jpg',
      alt: 'Art 18'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 12.jpg',
      alt: 'Art 19'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 64.png',
      alt: 'Art 20'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 66.png',
      alt: 'Art 21'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 67.png',
      alt: 'Art 22'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 68.png',
      alt: 'Art 23'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 69.png',
      alt: 'Art 24'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 8.jpg',
      alt: 'Art 25'
    },
    {
      type: 'image',
      src: '/images/art/Untitled_Artwork 82.png',
      alt: 'Art 26'
    },
    {
      type: 'image',
      src: '/images/art/We have to start SOMEWHERE. Comment_dirty_ below and I_ll send you the limk to my short course!.png',
      alt: 'Art 27'
    },
    // Videos
    {
      type: 'video',
      src: '/images/art/Staccino\'s (1).mp4',
<<<<<<< HEAD
      alt: 'Staccino\'s',
      ratio: 1  // Square video
=======
      alt: 'Staccino\'s'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/Balloon2.mp4',
<<<<<<< HEAD
      alt: 'Balloon',
      ratio: 1  // Square video
=======
      alt: 'Balloon'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/LoFront8 (1).mp4',
<<<<<<< HEAD
      alt: 'LoFront',
      ratio: 1  // Square video
=======
      alt: 'LoFront'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/LofiSamu.mp4',
<<<<<<< HEAD
      alt: 'Lofi Samu',
      ratio: 1  // Square video
=======
      alt: 'Lofi Samu'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/Lofi Desert.mp4',
<<<<<<< HEAD
      alt: 'Lofi Desert',
      ratio: 1  // Square video
=======
      alt: 'Lofi Desert'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/Lofi Games2.mp4',
<<<<<<< HEAD
      alt: 'Lofi Games',
      ratio: 1  // Square video
=======
      alt: 'Lofi Games'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/Lamp Lofi2.mp4',
<<<<<<< HEAD
      alt: 'Lamp Lofi',
      ratio: 1  // Square video
=======
      alt: 'Lamp Lofi'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/LoSwamp.mp4',
<<<<<<< HEAD
      alt: 'LoSwamp',
      ratio: 1  // Square video
=======
      alt: 'LoSwamp'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    },
    {
      type: 'video',
      src: '/images/art/TotoroFinal2.mp4',
<<<<<<< HEAD
      alt: 'Totoro',
      ratio: 1  // Square video
=======
      alt: 'Totoro'
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    }
  ];

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
<<<<<<< HEAD
          Art Gallery
        </Typography>

        <Gallery 
          items={artItems} 
          type="art"
          onItemClick={handleVideoClick}
        />

        {/* Video Player Dialog */}
        <Dialog
          open={isPlayerOpen}
          onClose={handleClosePlayer}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'black',
              color: 'white',
              borderRadius: 2,
            }
          }}
        >
          <DialogContent sx={{ p: 0 }}>
            {selectedVideo && (
              <Box sx={{ width: '100%', aspectRatio: selectedVideo.ratio }}>
                <video
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  src={selectedVideo.src}
                >
                  Your browser does not support the video tag.
                </video>
              </Box>
            )}
          </DialogContent>
        </Dialog>
=======
          Art Collection
        </Typography>
        <Gallery items={artItems} type="art" />
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
      </Container>
    </Box>
  );
};

export default Art; 