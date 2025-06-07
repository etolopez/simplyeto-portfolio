import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ProfileImage from '../components/ProfileImage';

const Art = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedItem(null);
  };

  const handleThumbnailLoad = (id) => {
    setLoadedThumbnails(prev => ({ ...prev, [id]: true }));
  };

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const mediaItems = useMemo(() => {
    const items = [
      // Local art images
      {
        id: 'art1',
        type: 'image',
        src: '/images/art/FINAL.png',
        aspectRatio: '1/1',
        title: 'Artwork 1'
      },
      {
        id: 'art2',
        type: 'image',
        src: '/images/art/HEGEEME.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 2'
      },
      {
        id: 'art3',
        type: 'image',
        src: '/images/art/DSC03300 (1).jpg',
        aspectRatio: '1/1',
        title: 'Artwork 3'
      },
      {
        id: 'art4',
        type: 'image',
        src: '/images/art/Carne\'Gato.png',
        aspectRatio: '1/1',
        title: 'Artwork 4'
      },
      {
        id: 'art5',
        type: 'image',
        src: '/images/art/Untitled_Artwork 92.png',
        aspectRatio: '1/1',
        title: 'Artwork 5'
      },
      {
        id: 'art6',
        type: 'image',
        src: '/images/art/AZ.png',
        aspectRatio: '1/1',
        title: 'Artwork 6'
      },
      {
        id: 'art7',
        type: 'image',
        src: '/images/art/A_Long_Way_Home.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 7'
      },
      {
        id: 'art8',
        type: 'image',
        src: '/images/art/Copos.png',
        aspectRatio: '1/1',
        title: 'Artwork 8'
      },
      {
        id: 'art9',
        type: 'image',
        src: '/images/art/Fly.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 9'
      },
      {
        id: 'art10',
        type: 'image',
        src: '/images/art/IMG_2653.png',
        aspectRatio: '1/1',
        title: 'Artwork 10'
      },
      {
        id: 'art11',
        type: 'image',
        src: '/images/art/Mugennight (1).png',
        aspectRatio: '1/1',
        title: 'Artwork 11'
      },
      {
        id: 'art12',
        type: 'image',
        src: '/images/art/Sidewalk.png',
        aspectRatio: '1/1',
        title: 'Artwork 12'
      },
      {
        id: 'art13',
        type: 'image',
        src: '/images/art/Untitled_Artwork 8.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 13'
      },
      {
        id: 'art14',
        type: 'image',
        src: '/images/art/Untitled_Artwork 12.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 14'
      },
      {
        id: 'art15',
        type: 'image',
        src: '/images/art/Untitled_Artwork 64.png',
        aspectRatio: '1/1',
        title: 'Artwork 15'
      },
      {
        id: 'art16',
        type: 'image',
        src: '/images/art/Untitled_Artwork 66.png',
        aspectRatio: '1/1',
        title: 'Artwork 16'
      },
      {
        id: 'art17',
        type: 'image',
        src: '/images/art/Untitled_Artwork 67.png',
        aspectRatio: '1/1',
        title: 'Artwork 17'
      },
      {
        id: 'art18',
        type: 'image',
        src: '/images/art/Untitled_Artwork 68.png',
        aspectRatio: '1/1',
        title: 'Artwork 18'
      },
      {
        id: 'art19',
        type: 'image',
        src: '/images/art/Untitled_Artwork 69.png',
        aspectRatio: '1/1',
        title: 'Artwork 19'
      },
      {
        id: 'art20',
        type: 'image',
        src: '/images/art/Untitled_Artwork 82.png',
        aspectRatio: '1/1',
        title: 'Artwork 20'
      },
      {
        id: 'art21',
        type: 'image',
        src: '/images/art/The_Wiz.png',
        aspectRatio: '1/1',
        title: 'Artwork 21'
      },
      {
        id: 'art22',
        type: 'image',
        src: '/images/art/THe Power of Balance.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 22'
      },
      {
        id: 'art23',
        type: 'image',
        src: '/images/art/Traveler.png',
        aspectRatio: '1/1',
        title: 'Artwork 23'
      },
      {
        id: 'art24',
        type: 'image',
        src: '/images/art/photo_2023-12-29_15-20-59-2.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 24'
      },
      {
        id: 'art25',
        type: 'image',
        src: '/images/art/photo_2023-12-29_15-20-54.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 25'
      },
      {
        id: 'art26',
        type: 'image',
        src: '/images/art/img_2136-2.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 26'
      },
      {
        id: 'art27',
        type: 'image',
        src: '/images/art/img_2133.jpg',
        aspectRatio: '1/1',
        title: 'Artwork 27'
      },
      {
        id: 'art28',
        type: 'image',
        src: '/images/art/hand.png',
        aspectRatio: '1/1',
        title: 'Artwork 28'
      },
      {
        id: 'art29',
        type: 'image',
        src: '/images/art/spider-pig.png',
        aspectRatio: '1/1',
        title: 'Artwork 29'
      },
      {
        id: 'art30',
        type: 'image',
        src: '/images/art/eto08628-hdr (1).jpg',
        aspectRatio: '1/1',
        title: 'Artwork 30'
      },
      // Regular YouTube videos (16:9)
      {
        id: 'YNwuTP5-eU4',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'U1e3UmJ8no8',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'BAFEvDJg_s0',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'WX4Ya-aSRpE',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'XwODLdBJbuU',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'uf-6sJVi8_A',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'HRJ1UPsyAxI',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'Ly_e-KyL4Ac',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'TtpyQQYx70s',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'sYdZhY-llvI',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'PqoTROxmTPw',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'O3G0TjjKJpY',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'pl-sUNzsk6o',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'XQ_Eq8Tjcvo',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'dZ-ijFqjMHY',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'Tztq-rC0Jrc',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      {
        id: 'AMq044tk4HY',
        type: 'youtube',
        aspectRatio: '16/9',
        title: 'YouTube Video'
      },
      // YouTube Shorts (9:16)
      {
        id: 'PFiT7hlH76A',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'gguVCd-S_Zw',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'rsLQybn7Za0',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: '2lX_9pgshIU',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'DIniHWCOiRg',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'M0lnVo1Dkj4',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'f4TJBuOBQtY',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: '2pKQByYyk9s',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'dH88fLhi7KY',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'CUiGoa0hksg',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'nzgkoB4pvIY',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      },
      {
        id: 'DBJErEmQmiw',
        type: 'youtube',
        aspectRatio: '9/16',
        title: 'YouTube Short'
      }
    ];
    return shuffleArray([...items]);
  }, []);

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
          Art Gallery
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
          {mediaItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: item.aspectRatio,
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
                  ? `https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg`
                  : item.src}
                alt={item.title}
                className="thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'filter 0.3s ease, opacity 0.3s ease',
                  opacity: loadedThumbnails[item.id] ? 1 : 0,
                  backgroundColor: 'black'
                }}
                onLoad={() => handleThumbnailLoad(item.id)}
                onError={(e) => {
                  if (item.type === 'youtube') {
                    // Try different quality options
                    const qualities = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default'];
                    let currentQuality = 0;
                    
                    const tryNextQuality = () => {
                      if (currentQuality < qualities.length) {
                        e.target.src = `https://i.ytimg.com/vi/${item.id}/${qualities[currentQuality]}.jpg`;
                        currentQuality++;
                      }
                    };
                    
                    tryNextQuality();
                    e.target.onerror = tryNextQuality;
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
                    transition: 'opacity 0.3s ease, background-color 0.3s ease',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                      opacity: 1,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 48 }} />
                </IconButton>
              )}
              {!loadedThumbnails[item.id] && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      border: '3px solid #f3f3f3',
                      borderTop: '3px solid #FF6B6B',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' }
                      }
                    }}
                  />
                </Box>
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
                  aspectRatio: selectedItem.aspectRatio,
                  margin: 'auto',
                  position: 'relative',
                }}
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
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
      </Container>
    </Box>
  );
};

export default Art; 