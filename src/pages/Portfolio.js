import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Dialog } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    // Add your portfolio items here
    { type: 'image', src: '/path-to-image1.jpg', title: 'Photography 1' },
    { type: 'video', src: 'YOUTUBE_VIDEO_ID_1', title: 'Video 1' },
    // Add more items...
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6, color: '#000000' }}>
        Portfolio
      </Typography>

      <Grid container spacing={3}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionBox
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              {item.type === 'image' ? (
                <Box
                  component="img"
                  src={item.src}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: 300,
                    bgcolor: 'grey.200',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>Video Preview</Typography>
                </Box>
              )}
              <Typography variant="subtitle1" sx={{ mt: 1, color: '#000000' }}>
                {item.title}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* Image/Video Dialog */}
      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        maxWidth="lg"
        fullWidth
      >
        {selectedItem && (
          <Box sx={{ p: 2 }}>
            {selectedItem.type === 'image' ? (
              <Box
                component="img"
                src={selectedItem.src}
                sx={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 Aspect Ratio
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.src}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen
                />
              </Box>
            )}
          </Box>
        )}
      </Dialog>
    </Container>
  );
};

export default Portfolio; 