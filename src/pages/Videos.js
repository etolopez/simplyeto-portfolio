import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import ProfileImage from '../components/ProfileImage';

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoItems.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoItems.length) % videoItems.length);
  };

  const videoItems = [
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

  const youtubeVideos = [
    {
      type: 'youtube',
      id: 'dQw4w9WgXcQ',
      alt: 'YouTube Video 1'
    },
    {
      type: 'youtube',
      id: 'dQw4w9WgXcQ',
      alt: 'YouTube Video 2'
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
          Video Gallery
        </Typography>

        {/* Local Videos */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Local Videos
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 2,
            }}
          >
            {videoItems.map((item, index) => (
              <Box
                key={index}
                onClick={() => handleVideoClick(index)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover .play-button': {
                    opacity: 1,
                  },
                  '&:hover .video-preview': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <video
                    className="video-preview"
                    src={item.src}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    preload="metadata"
                    controlsList="nodownload"
                    disablePictureInPicture
                    controls={false}
                  />
                  <Box
                    className="play-button"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'white',
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 60 }} />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* YouTube Videos */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            YouTube Videos
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 2,
            }}
          >
            {youtubeVideos.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              </Box>
            ))}
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
            {videoItems[currentVideoIndex] && (
              <Box sx={{ width: '100%', aspectRatio: videoItems[currentVideoIndex].ratio }}>
                <video
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  src={videoItems[currentVideoIndex].src}
                  controlsList="nodownload"
                  disablePictureInPicture
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