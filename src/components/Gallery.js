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
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'black',
            boxShadow: 24,
            p: 0,
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
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
            />
          )}
        </Box>
      </Modal>

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
    </Box>
  );
};

export default Gallery; 