import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Modal, TextField, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import Gallery from '../components/Gallery';
import ProfileImage from '../components/ProfileImage';

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

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

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
          Welcome to My Portfolio
        </Typography>

        {/* Photography Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Photography
          </Typography>
          <Gallery items={photographyItems} type="photography" />
        </Box>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            p: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: 'white',
            }}
          >
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
      </Container>
    </Box>
  );
};

export default Home; 