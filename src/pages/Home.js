import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, Button, Modal, TextField, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Gallery from '../components/Gallery';
import VideoGrid from '../components/VideoGrid';

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactOpen = () => setContactOpen(true);
  const handleContactClose = () => setContactOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    handleContactClose();
  };

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Get random hero image from art collection
  const heroImage = useMemo(() => {
    const artImages = [
      '/images/art/FINAL.png',
      '/images/art/HEGEEME.jpg',
      '/images/art/DSC03300 (1).jpg',
      '/images/art/Carne\'Gato.png',
      '/images/art/Untitled_Artwork 92.png',
      '/images/art/AZ.png',
      '/images/art/A_Long_Way_Home.jpg',
      '/images/art/Copos.png',
      '/images/art/Fly.jpg',
      '/images/art/IMG_2653.png',
      '/images/art/Mugennight (1).png',
      '/images/art/Sidewalk.png',
      '/images/art/THe Power of Balance.jpg',
      '/images/art/The_Wiz.png',
      '/images/art/Traveler.png'
    ];
    return shuffleArray(artImages)[0];
  }, []);

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
      }
    ];
    return shuffleArray(allPhotographyItems).slice(0, 6);
  }, []);

  // Art items (6 items total)
  const artItems = useMemo(() => {
    const allImages = [
      { type: 'image', src: '/images/art/FINAL.png', ratio: 1 },
      { type: 'image', src: '/images/art/HEGEEME.jpg', ratio: 1 },
      { type: 'image', src: '/images/art/DSC03300 (1).jpg', ratio: 1 },
      { type: 'image', src: '/images/art/Carne\'Gato.png', ratio: 1 },
      { type: 'image', src: '/images/art/Untitled_Artwork 92.png', ratio: 1 },
      { type: 'image', src: '/images/art/AZ.png', ratio: 1 },
      { type: 'image', src: '/images/art/A_Long_Way_Home.jpg', ratio: 1 },
      { type: 'image', src: '/images/art/Copos.png', ratio: 1 },
      { type: 'image', src: '/images/art/Fly.jpg', ratio: 1 },
      { type: 'image', src: '/images/art/IMG_2653.png', ratio: 1 },
      { type: 'image', src: '/images/art/Mugennight (1).png', ratio: 1 },
      { type: 'image', src: '/images/art/Sidewalk.png', ratio: 1 },
      { type: 'image', src: '/images/art/THe Power of Balance.jpg', ratio: 1 },
      { type: 'image', src: '/images/art/The_Wiz.png', ratio: 1 },
      { type: 'image', src: '/images/art/Traveler.png', ratio: 1 }
    ];
    const allVideos = [
      { type: 'video', src: '/images/art/Staccino\'s (1).mp4', ratio: 1 },
      { type: 'video', src: '/images/art/Balloon2.mp4', ratio: 1 }
    ];
    return shuffleArray([...allImages, ...allVideos]).slice(0, 6);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Hero Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Hero"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
          }}
        />

        {/* Content Overlay */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            SIMPLYETO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Art & Media Production
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              onClick={handleContactOpen}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Contact
            </Button>
            <Button
              component="a"
              href="https://calendly.com/lightsaint/coffee-chat"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Book a Call
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Gallery Sections */}
      <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
        {/* Art Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
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
            Art
          </Typography>
          <Gallery items={artItems} type="art" />
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/art"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              See More
            </Button>
          </Box>
        </Box>

        {/* Photography Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
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
            Photography
          </Typography>
          <Gallery items={photographyItems} type="photography" />
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/photography"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              See More
            </Button>
          </Box>
        </Box>

        {/* Video Section */}
        <Box sx={{ mb: 8 }}>
          <VideoGrid />
        </Box>
      </Box>

      {/* Social Links */}
      <Box
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Button
          component="a"
          href="https://www.instagram.com/simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Instagram
        </Button>
        <Button
          component="a"
          href="https://twitter.com/simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          X
        </Button>
        <Button
          component="a"
          href="https://www.youtube.com/@simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          YouTube
        </Button>
      </Box>

      {/* Contact Modal */}
      <Modal
        open={contactOpen}
        onClose={handleContactClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderRadius: 2,
            p: 4,
            width: '100%',
            maxWidth: 600,
            mx: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, color: 'white', textAlign: 'center' }}>
            Contact Me
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4ECDC4',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4ECDC4',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4ECDC4',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  backgroundColor: '#4ECDC4',
                  '&:hover': {
                    backgroundColor: '#45b7af',
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home; 