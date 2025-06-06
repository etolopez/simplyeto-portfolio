import React, { useState } from 'react';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VideoPlayer from './VideoPlayer';

const Gallery = ({ items, type }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box>
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
        {items.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleItemClick(item)}
            sx={{
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            {item.type === 'image' ? (
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  aspectRatio: item.ratio || 1,
                }}
              />
            ) : item.type === 'video' ? (
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
                  src={item.src}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  preload="metadata"
                  controlsList="nodownload"
                  disablePictureInPicture
                  controls={false}
                />
                <Box
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
            ) : null}
          </Box>
        ))}
      </Box>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
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
          {selectedItem && (
            selectedItem.type === 'image' ? (
              <Box
                component="img"
                src={selectedItem.src}
                alt={selectedItem.alt}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            ) : selectedItem.type === 'video' ? (
              <Box sx={{ width: '100%', aspectRatio: selectedItem.ratio || 16/9 }}>
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
            ) : null
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery; 