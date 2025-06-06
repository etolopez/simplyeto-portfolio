import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Modal, TextField } from '@mui/material';
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqabavre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        handleContactClose();
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
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

  // Photography items (showing 6)
  const photographyItems = useMemo(() => {
    const allPhotographyItems = [
      {
        type: 'image',
        src: '/images/photography/DSC01983-HDR.jpg',
        alt: 'Photography 1'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01918-HDR.jpg',
        alt: 'Photography 2'
      },
      {
        type: 'image',
        src: '/images/photography/DSC07504.png',
        alt: 'Photography 3'
      },
      {
        type: 'image',
        src: '/images/photography/DSC06451.png',
        alt: 'Photography 4'
      },
      {
        type: 'image',
        src: '/images/photography/Epic7.jpg',
        alt: 'Photography 5'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04385-Editar.jpg',
        alt: 'Photography 6'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01680.jpg',
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
      },
      {
        type: 'image',
        src: '/images/photography/DSC06589.png',
        alt: 'Photography 15'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03707.jpg',
        alt: 'Photography 16'
      },
      {
        type: 'image',
        src: '/images/photography/DSC01995.JPG',
        alt: 'Photography 17'
      },
      {
        type: 'image',
        src: '/images/photography/DSC03936.JPG',
        alt: 'Photography 18'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04041.jpg',
        alt: 'Photography 19'
      },
      {
        type: 'image',
        src: '/images/photography/DSC04310.JPG',
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
        src: '/images/photography/3.png',
        alt: 'Photography 26'
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
      { type: 'image', src: '/images/art/DSC06360.png', ratio: 1 },
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
      { type: 'image', src: '/images/art/Traveler.png', ratio: 1 },
    ];
    const allVideos = [
      { type: 'video', src: '/images/art/Staccino\'s (1).mp4', ratio: 1 },
      { type: 'video', src: '/images/art/Balloon2.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/LoFront8 (1).mp4', ratio: 1 },
      { type: 'video', src: '/images/art/LofiSamu.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/Lofi Desert.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/Lofi Games2.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/Lamp Lofi2.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/LoSwamp.mp4', ratio: 1 },
      { type: 'video', src: '/images/art/TotoroFinal2.mp4', ratio: 1 },
    ];
    const selectedImages = shuffleArray(allImages).slice(0, 4);
    const selectedVideos = shuffleArray(allVideos).slice(0, 2);
    return shuffleArray([...selectedImages, ...selectedVideos]);
  }, []);

  // Video items (showing 6)
  const videoItems = useMemo(() => {
    const mainVideos = [
      { 
        type: 'video', 
        src: '/videos/Wetiko Short.mp4',
        alt: 'Wetiko Short',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/Solana Block Zero FINAL.mp4',
        alt: 'Solana Block Zero',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/day5IG.mp4',
        alt: 'Day 5',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/FromNaraNoMusic.mp4',
        alt: 'From Nara',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/render.mp4',
        alt: 'Render',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/xDgG4vXH26O7AAMw.mp4',
        alt: 'Project X',
        ratio: 16/9
      },
      { 
        type: 'video', 
        src: '/videos/7ZWylAuSEnmkjdZD.mp4',
        alt: 'Project 7Z',
        ratio: 16/9
      }
    ];
    return shuffleArray(mainVideos).slice(0, 6);
  }, []);

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
          <source src="/images/art/Lofi Games2.mp4" type="video/mp4" />
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
            }}
          >
            SimplyEto
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              mt: 2,
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Art & Media Production
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleContactOpen}
              sx={{
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
              Contact Eto
            </Button>
            <Button
              variant="contained"
              size="large"
              href="https://calendly.com/lightsaint/coffee-chat"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
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
              Book a Call
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Modal */}
      <Modal
        open={contactOpen}
        onClose={handleContactClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 500,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            onClick={handleContactClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
            Contact Eto
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Photography Gallery */}
      <Box sx={{ position: 'relative' }}>
        <Gallery 
          title="Photography Collection" 
          items={photographyItems} 
          type="photography" 
        />
        <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
          <Button
            component={RouterLink}
            to="/photography"
            variant="outlined"
            color="primary"
            size="large"
          >
            View More Photography
          </Button>
        </Box>
      </Box>

      {/* Art Gallery */}
      <Box sx={{ position: 'relative' }}>
        <Gallery 
          title="Art Gallery" 
          items={artItems} 
          type="art" 
        />
        <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
          <Button
            component={RouterLink}
            to="/art"
            variant="outlined"
            color="primary"
            size="large"
          >
            View More Art
          </Button>
        </Box>
      </Box>

      {/* Video Gallery */}
      <Box sx={{ position: 'relative' }}>
        <Gallery 
          title="Video Showcase" 
          items={videoItems} 
          type="videos" 
        />
        <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
          <Button
            component={RouterLink}
            to="/videos"
            variant="outlined"
            color="primary"
            size="large"
          >
            View More Videos
          </Button>
        </Box>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ 
        py: 4, 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 3,
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <IconButton
          href="https://instagram.com/simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: 'black',
            '&:hover': {
              color: '#E1306C',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          <InstagramIcon sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          href="https://youtube.com/@simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: 'black',
            '&:hover': {
              color: '#FF0000',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          <YouTubeIcon sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          href="https://x.com/simplyeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: 'black',
            '&:hover': {
              color: '#000000',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          <TwitterIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home; 