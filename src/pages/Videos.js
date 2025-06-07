import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ProfileImage from '../components/ProfileImage';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedVideo(null);
  };

  const handleThumbnailLoad = (id) => {
    setLoadedThumbnails(prev => ({ ...prev, [id]: true }));
  };

  const videos = [
    {
      id: 'QDJ55h7Br2g',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'Artist to Artist - Roberto Lopez'
    },
    {
      id: 'O5hGzr5LY-s',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'Pozo Azul - Roberto Lopez'
    },
    {
      id: 'hBatHVlh42Q',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'Canada - Roberto Lopez'
    },
    {
      id: 'gUD5Pt8eKm0',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'Artist to Artist Final'
    },
    {
      id: 'MiqvZby8pAY',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'Ayudanos a Ayudar'
    },
    {
      id: '4T76gU-AGAg',
      aspectRatio: '9/16',
      type: 'youtube',
      title: 'Costa Rica Vertical'
    },
    {
      id: 'ITQX2L_bRoc',
      aspectRatio: '9/16',
      type: 'youtube',
      title: 'Vertical Video 2'
    },
    {
      id: '_CbGzcWEBiY',
      aspectRatio: '9/16',
      type: 'youtube',
      title: 'Vertical Video 3'
    },
    {
      id: '7wS_lnvKBKI',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 1'
    },
    {
      id: 'GYXx604yPWo',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 2'
    },
    {
      id: 'WTbDomXcUEI',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 3'
    },
    {
      id: 'ndPFRZQhyzU',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 4'
    },
    {
      id: 'UUGweNFaB_o',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 5'
    },
    {
      id: 'iJUZD-3s0qU',
      aspectRatio: '16/9',
      type: 'youtube',
      title: 'New Video 6'
    },
    {
      id: '6Pufk6SGRpk',
      aspectRatio: '9/16',
      type: 'youtube',
      title: 'New Short 1'
    },
    {
      id: 'oyftL2qarsM',
      aspectRatio: '9/16',
      type: 'youtube',
      title: 'New Short 2'
    }
  ];

  // Randomize videos on each render
  const shuffledVideos = useMemo(() => shuffleArray(videos), [videos]);

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

        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={2}
          sx={{
            width: '100%',
            '& .MuiMasonry-root': {
              display: 'flex',
              marginLeft: '-16px',
              width: 'auto',
            },
            '& .MuiMasonry-item': {
              paddingLeft: '16px',
              backgroundClip: 'padding-box',
              width: '100% !important',
            },
          }}
        >
          {shuffledVideos.map((video) => (
            <Box
              key={video.id}
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: video.aspectRatio,
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                backgroundColor: 'black',
                '&:hover .play-button': {
                  opacity: 1,
                },
                '&:hover .thumbnail': {
                  filter: 'brightness(0.7)',
                },
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
              onClick={() => handleVideoClick(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'filter 0.3s ease-in-out',
                  opacity: loadedThumbnails[video.id] ? 1 : 0,
                }}
                onLoad={() => handleThumbnailLoad(video.id)}
              />
              <IconButton
                className="play-button"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  opacity: 0.8,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 48 }} />
              </IconButton>
            </Box>
          ))}
        </Masonry>

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
              maxWidth: '90vw',
              maxHeight: '90vh',
              margin: 'auto',
            }
          }}
        >
          <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {selectedVideo && (
              <Box 
                sx={{ 
                  width: '100%',
                  maxWidth: selectedVideo.aspectRatio === '9/16' ? '400px' : '800px',
                  aspectRatio: selectedVideo.aspectRatio,
                  margin: 'auto',
                  position: 'relative',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    backgroundColor: 'black'
                  }}
                />
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Videos; 