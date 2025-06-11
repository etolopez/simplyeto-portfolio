import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProfileImage from '../components/ProfileImage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('https://api.fostermarketplace.app/v1/stores/2cEktV6uWhSQAzrTiX5ferLXtZShgJcUxJ3HKNRcEarr/items', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('Error response:', errorData);
          throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Products data:', data);
        setProducts(data.items || []);
        // Initialize current image index for each product
        const initialImageIndices = {};
        data.items?.forEach(product => {
          initialImageIndices[product.id] = 0;
        });
        setCurrentImageIndex(initialImageIndices);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleNextImage = (productId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % totalImages
    }));
  };

  const handlePrevImage = (productId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: (prev[productId] - 1 + totalImages) % totalImages
    }));
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background with overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: -1,
        }}
      />

      {/* Home Button */}
      <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 9999 }}>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <ProfileImage
            src={process.env.PUBLIC_URL + "/images/art/Mugennight (1).png"}
            alt="Eto"
            sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
              },
            }}
          />
        </RouterLink>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'white',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
          }}
        >
          Products
        </Typography>

        {loading ? (
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'white' }}>
            Loading products...
          </Typography>
        ) : error ? (
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'white' }}>
            Error: {error}
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => {
              const images = product.options.addons.map(addon => addon.mockup_url);
              const currentIndex = currentImageIndex[product.id] || 0;

              return (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 300 }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={images[currentIndex]}
                        alt={product.name}
                        sx={{
                          objectFit: 'contain',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                      {images.length > 1 && (
                        <>
                          <IconButton
                            onClick={() => handlePrevImage(product.id, images.length)}
                            sx={{
                              position: 'absolute',
                              left: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              },
                            }}
                          >
                            <ArrowBackIosNewIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => handleNextImage(product.id, images.length)}
                            sx={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              },
                            }}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </>
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ color: 'white' }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
                      >
                        {product.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: 'white', mb: 2 }}
                      >
                        ${(product.selling_price / 100).toFixed(2)}
                      </Typography>
                      <Button
                        variant="contained"
                        href={`https://fostermarketplace.app/SimplyEto/merch/${product.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        }}
                      >
                        View on Foster
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Products; 