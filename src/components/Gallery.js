import React, { useState, useCallback } from 'react';
import { Box, Modal, IconButton, Typography, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Masonry from '@mui/lab/Masonry';
import OptimizedImage from './OptimizedImage';

const Gallery = ({ items, title, type }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontFamily: 'Rockwell, serif',
              fontWeight: 700,
              background: type === 'art'
                ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
                : type === 'videos'
                ? 'linear-gradient(45deg, #6B66FF, #FF6B6B)'
                : 'linear-gradient(45deg, #4ECDC4, #6B66FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {title}
          </Typography>
        )}
        
        <Masonry 
          columns={{ xs: 1, sm: 2, md: 3 }} 
          spacing={2}
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleOpen(item)}
              onContextMenu={preventDefault}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 1,
                '&:hover': {
                  opacity: 0.9,
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                },
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'none',
                mb: 2,
                width: '100%',
              }}
            >
              {item.type === 'video' ? (
                <Box
                  component="video"
                  src={item.src}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                  muted
                  playsInline
                  loop
                  onContextMenu={preventDefault}
                  controlsList="nodownload"
                  disablePictureInPicture
                  disableRemotePlayback
                />
              ) : (
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt || `Gallery item ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                  onContextMenu={preventDefault}
                  draggable="false"
                />
              )}
            </Box>
          ))}
        </Masonry>
      </Container>

      <Modal
        open={!!selectedItem}
        onClose={handleClose}
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
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'black',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 24,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedItem?.type === 'video' ? (
            <Box
              component="video"
              src={selectedItem.src}
              controls
              autoPlay
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
              onContextMenu={preventDefault}
              controlsList="nodownload"
              disablePictureInPicture
              disableRemotePlayback
            />
          ) : (
            <Box
              component="img"
              src={selectedItem?.src}
              alt={selectedItem?.alt || "Selected gallery item"}
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'none',
              }}
              onContextMenu={preventDefault}
              draggable="false"
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery; 