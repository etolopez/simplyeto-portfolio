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

  // Get hero image
  const heroImage = useMemo(() => {
    return process.env.PUBLIC_URL + '/images/art/optimized/Hero2 (1).jpg';
  }, []);

  // Art items (6 items total)
  const artItems = useMemo(() => {
    const allImages = [
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/FINAL.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/HEGEEME.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/DSC03300 (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Carne\'Gato.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Untitled_Artwork 92.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/AZ.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/A_Long_Way_Home.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Copos.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Fly.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/IMG_2653.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Mugennight (1).png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Sidewalk.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/THe Power of Balance.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/The_Wiz.png', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/Traveler.png', ratio: 1 }
    ];

    // Add YouTube videos from Art page
    const youtubeVideos = [
      { type: 'youtube', id: 'YNwuTP5-eU4', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'U1e3UmJ8no8', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'BAFEvDJg_s0', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'WX4Ya-aSRpE', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'XwODLdBJbuU', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'uf-6sJVi8_A', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'HRJ1UPsyAxI', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'Ly_e-KyL4Ac', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'TtpyQQYx70s', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'sYdZhY-llvI', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'PqoTROxmTPw', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'O3G0TjjKJpY', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'pl-sUNzsk6o', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'XQ_Eq8Tjcvo', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'dZ-ijFqjMHY', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'Tztq-rC0Jrc', aspectRatio: '16/9', title: 'YouTube Video' },
      { type: 'youtube', id: 'AMq044tk4HY', aspectRatio: '16/9', title: 'YouTube Video' },
      // Shorts
      { type: 'youtube', id: 'PFiT7hlH76A', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'gguVCd-S_Zw', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'rsLQybn7Za0', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: '2lX_9pgshIU', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'DIniHWCOiRg', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'M0lnVo1Dkj4', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'f4TJBuOBQtY', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: '2pKQByYyk9s', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'dH88fLhi7KY', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'CUiGoa0hksg', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'nzgkoB4pvIY', aspectRatio: '9/16', title: 'YouTube Short' },
      { type: 'youtube', id: 'DBJErEmQmiw', aspectRatio: '9/16', title: 'YouTube Short' }
    ];

    return shuffleArray([...allImages, ...youtubeVideos]).slice(0, 6);
  }, []);

  // Photography items (6 items total)
  const photographyItems = useMemo(() => {
    const allImages = [
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/Epic7.jpg', ratio: '3/4' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/Epic (1).jpg', ratio: '4/3' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSCF4194.jpg', ratio: '1/1' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC08097.jpg', ratio: '3/4' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC07504.png', ratio: '4/3' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC06589.png', ratio: '1/1' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC06496.JPG', ratio: '3/4' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC06451.png', ratio: '4/3' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC06367.JPG', ratio: '1/1' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC05666-Edit.JPG', ratio: '3/4' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC05306.JPG', ratio: '4/3' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC04385-Editar.jpg', ratio: '1/1' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC04310.JPG', ratio: '3/4' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC04041.jpg', ratio: '4/3' },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/photography/DSC03936.JPG', ratio: '1/1' }
    ];
    return shuffleArray([...allImages]).slice(0, 6);
  }, []);

  // Video items (6 items total)
  const videoItems = useMemo(() => {
    const allVideos = [
      { type: 'youtube', id: 'QDJ55h7Br2g', aspectRatio: '16/9', title: 'Artist to Artist - Roberto Lopez' },
      { type: 'youtube', id: 'O5hGzr5LY-s', aspectRatio: '16/9', title: 'Pozo Azul - Roberto Lopez' },
      { type: 'youtube', id: 'hBatHVlh42Q', aspectRatio: '16/9', title: 'Canada - Roberto Lopez' },
      { type: 'youtube', id: 'gUD5Pt8eKm0', aspectRatio: '16/9', title: 'Artist to Artist Final' },
      { type: 'youtube', id: 'MiqvZby8pAY', aspectRatio: '16/9', title: 'Ayudanos a Ayudar' },
      { type: 'youtube', id: '4T76gU-AGAg', aspectRatio: '9/16', title: 'Costa Rica Vertical' },
      { type: 'youtube', id: 'ITQX2L_bRoc', aspectRatio: '9/16', title: 'Vertical Video 2' },
      { type: 'youtube', id: '_CbGzcWEBiY', aspectRatio: '9/16', title: 'Vertical Video 3' },
      // New videos
      { type: 'youtube', id: '7wS_lnvKBKI', aspectRatio: '16/9', title: 'New Video 1' },
      { type: 'youtube', id: 'GYXx604yPWo', aspectRatio: '16/9', title: 'New Video 2' },
      { type: 'youtube', id: 'WTbDomXcUEI', aspectRatio: '16/9', title: 'New Video 3' },
      { type: 'youtube', id: 'ndPFRZQhyzU', aspectRatio: '16/9', title: 'New Video 4' },
      { type: 'youtube', id: 'UUGweNFaB_o', aspectRatio: '16/9', title: 'New Video 5' },
      { type: 'youtube', id: 'iJUZD-3s0qU', aspectRatio: '16/9', title: 'New Video 6' },
      { type: 'youtube', id: '6Pufk6SGRpk', aspectRatio: '9/16', title: 'New Short 1' },
      { type: 'youtube', id: 'oyftL2qarsM', aspectRatio: '9/16', title: 'New Short 2' }
    ];
    return shuffleArray([...allVideos]).slice(0, 6);
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
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1
            }
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Background"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
            }}
          />
        </Box>
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
          <Gallery items={photographyItems} />
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
        <Box sx={{ py: 8 }}>
          <VideoGrid videos={videoItems} />
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/videos"
              variant="contained"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1.2rem',
                textTransform: 'none',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              See More
            </Button>
          </Box>
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