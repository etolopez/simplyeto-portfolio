import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import ProfileImage from '../components/ProfileImage';
import Gallery from '../components/Gallery';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // Local video items with correct aspect ratios
  const videoItems = useMemo(() => {
    const mainVideos = [
      { 
        type: 'video', 
        src: '/videos/Wetiko Short.mp4',
        alt: 'Wetiko Short',
        ratio: 16/9  // Landscape video
      },
      { 
        type: 'video', 
        src: '/videos/Solana Block Zero FINAL.mp4',
        alt: 'Solana Block Zero',
        ratio: 16/9  // Landscape video
      },
      { 
        type: 'video', 
        src: '/videos/day5IG.mp4',
        alt: 'Day 5',
        ratio: 9/16  // Vertical video
      },
      { 
        type: 'video', 
        src: '/videos/FromNaraNoMusic.mp4',
        alt: 'From Nara',
        ratio: 9/16  // Vertical video
      },
      { 
        type: 'video', 
        src: '/videos/render.mp4',
        alt: 'Render',
        ratio: 9/16  // Vertical video
      },
      { 
        type: 'video', 
        src: '/videos/xDgG4vXH26O7AAMw.mp4',
        alt: 'Project X',
        ratio: 16/9  // Landscape video
      },
      { 
        type: 'video', 
        src: '/videos/7ZWylAuSEnmkjdZD.mp4',
        alt: 'Project 7Z',
        ratio: 16/9  // Landscape video
      }
    ];
    return mainVideos;
  }, []);

  const youtubeVideos = [
    {
      type: 'youtube',
      id: 'ZaL2ejDOzys',
      title: 'YouTube Video 1'
    },
    {
      type: 'youtube',
      id: 'NeIIBdjSJwU',
      title: 'YouTube Video 2'
    },
    {
      type: 'youtube',
      id: 'mSu5ppXhlME',
      title: 'YouTube Video 3'
    }
  ];

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? youtubeVideos.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

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
          Video Collection
        </Typography>

        {/* Videos Section */}
        <Box sx={{ mb: 8 }}>
          <Gallery 
            items={videoItems} 
            type="videos" 
            onItemClick={handleVideoClick}
          />
        </Box>
        
        {/* YouTube Videos Carousel */}
        <Box sx={{ mt: 8, position: 'relative' }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            YouTube Videos
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px', mx: 'auto' }}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 aspect ratio
                width: '100%',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[currentVideoIndex].id}`}
                title={youtubeVideos[currentVideoIndex].title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <IconButton
              onClick={handlePrevVideo}
              sx={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNextVideo}
              sx={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>

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
      </Container>
    </Box>
  );
};

export default Videos; 