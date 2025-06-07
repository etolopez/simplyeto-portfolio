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

  // Function to get the correct image path
  const getImagePath = (path) => {
    // Remove any leading slashes
    const cleanPath = path.replace(/^\/+/, '');
    return `${window.location.origin}/${cleanPath}`;
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
        src: getImagePath('images/art/optimized/FINAL.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 1'
      },
      {
        id: 'art2',
        type: 'image',
        src: getImagePath('images/art/optimized/img_1690-2.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 2'
      },
      {
        id: 'art3',
        type: 'image',
        src: getImagePath('images/art/optimized/DSC00437 (1) (1) (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 3'
      },
      {
        id: 'art4',
        type: 'image',
        src: getImagePath('images/art/optimized/Carne\'Gato.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 4'
      },
      {
        id: 'art5',
        type: 'image',
        src: getImagePath('images/art/optimized/Hero (1) (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 5'
      },
      {
        id: 'art6',
        type: 'image',
        src: getImagePath('images/art/optimized/IMG_2656 (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 6'
      },
      {
        id: 'art7',
        type: 'image',
        src: getImagePath('images/art/optimized/Hero2 (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 7'
      },
      {
        id: 'art8',
        type: 'image',
        src: getImagePath('images/art/optimized/Copos.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 8'
      },
      {
        id: 'art9',
        type: 'image',
        src: getImagePath('images/art/optimized/DSC06677 (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 9'
      },
      {
        id: 'art10',
        type: 'image',
        src: getImagePath('images/art/optimized/img_2136-2 (1).jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 10'
      },
      {
        id: 'art11',
        type: 'image',
        src: getImagePath('images/art/optimized/Untitled_Artwork 82.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 11'
      },
      {
        id: 'art12',
        type: 'image',
        src: getImagePath('images/art/optimized/Sidewalk.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 12'
      },
      {
        id: 'art14',
        type: 'image',
        src: getImagePath('images/art/optimized/hand.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 14'
      },
      {
        id: 'art15',
        type: 'image',
        src: getImagePath('images/art/optimized/Untitled_Artwork 64.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 15'
      },
      {
        id: 'art16',
        type: 'image',
        src: getImagePath('images/art/optimized/spider-pig.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 16'
      },
      {
        id: 'art17',
        type: 'image',
        src: getImagePath('images/art/optimized/Traveler.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 17'
      },
      {
        id: 'art18',
        type: 'image',
        src: getImagePath('images/art/optimized/Untitled_Artwork 68.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 18'
      },
      {
        id: 'art19',
        type: 'image',
        src: getImagePath('images/art/optimized/We have to start SOMEWHERE. Comment_dirty_ below and I_ll send you the limk to my short course!.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 19'
      },
      {
        id: 'art21',
        type: 'image',
        src: getImagePath('images/art/The_Wiz.png'),
        aspectRatio: '1/1',
        title: 'Artwork 21'
      },
      {
        id: 'art22',
        type: 'image',
        src: getImagePath('images/art/THe Power of Balance.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 22'
      },
      {
        id: 'art24',
        type: 'image',
        src: getImagePath('images/art/photo_2023-12-29_15-20-59-2.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 24'
      },
      {
        id: 'art25',
        type: 'image',
        src: getImagePath('images/art/photo_2023-12-29_15-20-54.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 25'
      },
      {
        id: 'art27',
        type: 'image',
        src: getImagePath('images/art/img_2133.jpg'),
        aspectRatio: '1/1',
        title: 'Artwork 27'
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
    return shuffleArray(items);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'black',
        color: 'white',
        pt: { xs: 8, sm: 10 },
        pb: { xs: 8, sm: 10 }
      }}
    >
      <ProfileImage />
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
          }}
        >
          Art Gallery
        </Typography>

        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          spacing={2}
          sx={{
            width: 'auto',
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
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
              onClick={() => handleItemClick(item)}
            >
              {item.type === 'youtube' ? (
                <>
                  <img
                    src={`https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg`}
                    alt={item.title}
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
                  <IconButton
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
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease, opacity 0.3s ease',
                    opacity: loadedThumbnails[item.id] ? 1 : 0,
                    backgroundColor: 'black'
                  }}
                  onLoad={() => handleThumbnailLoad(item.id)}
                />
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

        <Dialog
          open={isPlayerOpen}
          onClose={handleClosePlayer}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden'
            }
          }}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            {selectedItem && (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '80vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                {selectedItem.type === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedItem.id}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: selectedItem.aspectRatio === '9/16' ? '400px' : '800px',
                      aspectRatio: selectedItem.aspectRatio,
                      border: 'none',
                      backgroundColor: 'black'
                    }}
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                )}
                <IconButton
                  onClick={handleClosePlayer}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Art; 