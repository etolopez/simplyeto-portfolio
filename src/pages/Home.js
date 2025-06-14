import React, { useMemo } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Gallery from '../components/Gallery';
import VideoGrid from '../components/VideoGrid';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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

  // Get hero image
  const heroImage = useMemo(() => {
    return process.env.PUBLIC_URL + '/images/art/optimized/Hero2 (1).jpg';
  }, []);

  // Art items (6 items total)
  const artItems = useMemo(() => {
    const allImages = [
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/FINAL.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/img_1690-2.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/DSC00437 (1) (1) (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Carne\'Gato.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Hero (1) (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/IMG_2656 (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Hero2 (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Copos.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/DSC06677 (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/img_2136-2 (1).jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Untitled_Artwork 82.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Sidewalk.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/hand.jpg', ratio: 1 },
      { type: 'image', src: process.env.PUBLIC_URL + '/images/art/optimized/Untitled_Artwork 64.jpg', ratio: 1 }
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
          backgroundColor: 'black',
        }}
      >
        {/* Video Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: 'black',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TtpyQQYx70s?autoplay=1&mute=1&loop=1&playlist=TtpyQQYx70s&controls=0&showinfo=0&rel=0"
            title="Hero Background Video"
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
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1
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
              component="a"
              href="mailto:roberto@lightsaint.com"
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
              Contact Me
            </Button>
            <Button
              component="a"
              href="https://simplyeto.myshopify.com"
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
              Get Prints
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Rest of the content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Art Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            Art
          </Typography>
          <Gallery items={artItems} />
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/art"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              See More
            </Button>
          </Box>
        </Box>

        {/* Video Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            Videos
          </Typography>
          <VideoGrid videos={videoItems} />
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/video"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              See More
            </Button>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Button
            component="a"
            href="mailto:roberto@lightsaint.com"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              mr: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Contact Me
          </Button>
          <Button
            component="a"
            href="https://simplyeto.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Get Prints
          </Button>
        </Box>

        {/* Social Links */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/lightsaint"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white', mx: 1 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/@lightsaint"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white', mx: 1 }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/SimplyEto"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white', mx: 1 }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 