import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import VideoPlayer from '../components/VideoPlayer';

const Videos = () => {
  const videos = [
    {
      title: 'Lamp Lofi',
      src: 'https://storage.googleapis.com/simplyeto-videos/Lamp%20Lofi2.mp4',
      thumbnail: '/images/thumbnails/lamp-lofi.jpg'
    },
    {
      title: 'Staccino\'s',
      src: 'https://storage.googleapis.com/simplyeto-videos/Staccino\'s%20(1).mp4',
      thumbnail: '/images/thumbnails/staccinos.jpg'
    },
    {
      title: 'Balloon',
      src: 'https://storage.googleapis.com/simplyeto-videos/Balloon2.mp4',
      thumbnail: '/images/thumbnails/balloon.jpg'
    }
  ];

  const youtubeVideos = [
    {
      title: 'Lofi Hip Hop Mix - Beats to Relax/Study',
      embedUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk'
    },
    {
      title: 'Chillhop Radio - jazzy & lofi hip hop beats',
      embedUrl: 'https://www.youtube.com/embed/5yx6BWlEVcY'
    },
    {
      title: 'lofi hip hop radio - beats to relax/study to',
      embedUrl: 'https://www.youtube.com/embed/rUxyA-vcutM'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Local Videos Section */}
        <Grid container spacing={4}>
          {videos.map((video, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: 'white',
                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                  }}
                >
                  {video.title}
                </Typography>
                <VideoPlayer
                  src={video.src}
                  thumbnail={video.thumbnail}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* YouTube Videos Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: 'white',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              textAlign: 'center'
            }}
          >
            YouTube Videos
          </Typography>
          <Grid container spacing={4}>
            {youtubeVideos.map((video, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: 'white',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    textAlign: 'center'
                  }}
                >
                  {video.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Videos; 