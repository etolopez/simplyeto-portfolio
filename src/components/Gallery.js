import React, { useState } from 'react';
import { Box, IconButton, Dialog, DialogContent } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Gallery = ({ items, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      setSelectedItem(item);
      setIsPlayerOpen(true);
    }
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedItem(null);
  };

  const handleThumbnailLoad = (id) => {
    setLoadedThumbnails(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
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
        {items.map((item) => (
          <Box
            key={item.id || item.src}
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: item.aspectRatio || item.ratio || '1/1',
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
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.type === 'youtube' 
                ? `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`
                : item.src}
              alt={item.title || "Media thumbnail"}
              className="thumbnail"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'filter 0.3s ease',
                opacity: loadedThumbnails[item.id || item.src] ? 1 : 0,
              }}
              onLoad={() => handleThumbnailLoad(item.id || item.src)}
              onError={(e) => {
                if (item.type === 'youtube') {
                  e.target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                }
              }}
            />
            {item.type === 'youtube' && (
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
            )}
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
          {selectedItem && selectedItem.type === 'youtube' ? (
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: selectedItem.aspectRatio === '9/16' ? '400px' : '800px',
                aspectRatio: selectedItem.aspectRatio,
                margin: 'auto',
                position: 'relative',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedItem.id}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
                title="YouTube video player"
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
          ) : selectedItem && (
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: '800px',
                aspectRatio: selectedItem.aspectRatio || selectedItem.ratio || '1/1',
                margin: 'auto',
                position: 'relative',
              }}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title || "Media thumbnail"}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery; 