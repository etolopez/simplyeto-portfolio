import React, { useMemo } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import styled from '@emotion/styled';

const VideoContainer = styled(Box)(({ theme, aspectRatio }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: aspectRatio === '9/16' ? '177.78%' : '56.25%',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)'
  }
}));

// Function to shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const VideoGrid = () => {
  // Get 6 random videos
  const randomVideos = useMemo(() => {
    const allVideos = [
      {
        id: 'Ys8ZxsT7Fic',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'NH5H5tpIzfY',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'FujqTaVz7rA',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'ZaL2ejDOzys',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'odXCQsG8YJE',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'eolRa5vjxYo',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'fYyLxqRHsyo',
        aspectRatio: '9/16',
        type: 'youtube'
      },
      {
        id: 'lu240fb6FIQ',
        aspectRatio: '9/16',
        type: 'youtube'
      },
      {
        id: 'qYoOukSkwvs',
        aspectRatio: '9/16',
        type: 'youtube'
      },
      {
        id: 'w4IA4mQ17aI',
        aspectRatio: '16/9',
        type: 'youtube'
      },
      {
        id: 'https://videos.files.wordpress.com/PTllwc8x/shiroles-facebook_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/xvrIUpPF/pozo-azul-final_mp4_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/jDSVAGLU/canada-roberto-1_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/UCdbXq40/artist-to-artist-final_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/Ev8ypXvl/ayudanos-a-ayudar-fabook_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/2rzr4JSt/youtube-costa_mp4_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/AHW7Rek0/hd_mp4_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      },
      {
        id: 'https://videos.files.wordpress.com/1kuBnJzM/completo-redes_dvd.mp4',
        aspectRatio: '16/9',
        type: 'direct'
      }
    ];
    return shuffleArray([...allVideos]).slice(0, 6);
  }, []);

  return (
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
        Video Portfolio
      </Typography>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{ width: 'auto' }}
      >
        {randomVideos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <VideoContainer aspectRatio={video.aspectRatio}>
              {video.type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px'
                  }}
                />
              ) : (
                <video
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                  src={video.id}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </VideoContainer>
          </motion.div>
        ))}
      </Masonry>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          component={RouterLink}
          to="/videos"
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              opacity: 0.9
            }
          }}
        >
          See More Videos
        </Button>
      </Box>
    </Box>
  );
};

export default VideoGrid; 