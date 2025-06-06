<<<<<<< HEAD
import React, { useState } from 'react';
import { Box, Modal, IconButton, Dialog, DialogContent } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = ({ items, type, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleOpen = (item) => {
    if (item.type === 'video') {
      setSelectedItem(item);
      setIsPlayerOpen(true);
    } else {
      setSelectedItem(item);
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
    setIsPlayerOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{ width: 'auto', margin: 0 }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleOpen(item)}
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
            {item.type === 'video' ? (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: item.ratio ? `${(1 / item.ratio) * 100}%` : '56.25%',
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
                  <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                </Box>
              </Box>
            ) : (
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitUserDrag: 'none',
                }}
                draggable="false"
              />
            )}
          </Box>
        ))}
      </Masonry>

      {/* Image Modal */}
      <Modal
        open={!!selectedItem && selectedItem.type === 'image'}
=======
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
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
<<<<<<< HEAD
=======
          p: 2,
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
        }}
      >
        <Box
          sx={{
            position: 'relative',
<<<<<<< HEAD
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'black',
            boxShadow: 24,
            p: 0,
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          onContextMenu={(e) => e.preventDefault()}
=======
            width: '100%',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'black',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 24,
          }}
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
<<<<<<< HEAD
              zIndex: 1,
=======
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 2,
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
            }}
          >
            <CloseIcon />
          </IconButton>
<<<<<<< HEAD
          {selectedItem && selectedItem.type === 'image' && (
            <Box
              component="img"
              src={selectedItem.src}
              alt={selectedItem.alt}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitUserDrag: 'none',
                pointerEvents: 'none',
              }}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
=======

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
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
            />
          )}
        </Box>
      </Modal>
<<<<<<< HEAD

      {/* Video Dialog */}
      <Dialog
        open={isPlayerOpen}
        onClose={handleClose}
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
          {selectedItem && selectedItem.type === 'video' && (
            <Box sx={{ width: '100%', aspectRatio: selectedItem.ratio }}>
              <video
                controls
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src={selectedItem.src}
                controlsList="nodownload"
                disablePictureInPicture
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          )}
        </DialogContent>
      </Dialog>
=======
>>>>>>> 1db8154e96ab550ce38feb89f6b88ff805732bf0
    </Box>
  );
};

export default Gallery; 