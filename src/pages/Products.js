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
        setLoading(true);
        console.log('Starting to fetch products...');

        // Fetch Foster products
        console.log('Fetching Foster products...');
        const response = await fetch('https://api.fostermarketplace.app/v1/stores/2cEktV6uWhSQAzrTiX5ferLXtZShgJcUxJ3HKNRcEarr/items', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Foster response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Foster API error:', errorText);
          throw new Error(`Failed to fetch Foster products: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Foster raw response:', data);
        
        if (!data.items || !Array.isArray(data.items)) {
          console.error('Invalid Foster data format:', data);
          throw new Error('Invalid Foster data format');
        }

        // Randomize the products array
        const randomizedProducts = [...data.items].sort(() => Math.random() - 0.5);
        console.log('Foster products received:', randomizedProducts.length);
        setProducts(randomizedProducts);

        // Initialize current image index for all products
        const initialImageIndices = {};
        randomizedProducts.forEach(product => {
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

  const renderProductCard = (product) => {
    console.log('Rendering product:', product);
    
    const images = (product.options?.addons || []).map(addon => addon.mockup_url);
    const currentIndex = currentImageIndex[product.id] || 0;
    const title = product.name;
    const description = product.description;
    const price = (product.selling_price / 100).toFixed(2);
    const productUrl = `https://fostermarketplace.app/SimplyEto/merch/${product.id}`;

    return (
      <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              backgroundColor: 'rgba(0, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
              '& .MuiTypography-root': {
                color: 'rgba(0, 255, 255, 0.8)',
              },
              '& .MuiButton-root': {
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 255, 0.3)',
                },
              },
            },
          }}
        >
          <Box sx={{ position: 'relative', height: 300 }}>
            {images.length > 0 ? (
              <CardMedia
                component="img"
                height="300"
                image={images[currentIndex]}
                alt={title}
                sx={{
                  objectFit: 'contain',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography color="white">No image available</Typography>
              </Box>
            )}
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
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
            >
              {description}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'white', mb: 2 }}
            >
              ${price}
            </Typography>
            <Button
              variant="contained"
              href={productUrl}
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
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', backgroundColor: '#121212' }}>
      {/* Background with overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <ProfileImage />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              mt: 2,
              mb: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Products
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Check out my latest merchandise
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Loading products...
            </Typography>
          </Box>
        ) : error ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Typography variant="h6" sx={{ color: 'error.main' }}>
              Error: {error}
            </Typography>
          </Box>
        ) : (
          <>
            <Grid container spacing={4}>
              {products.map(product => renderProductCard(product))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 4 }}>
              <Button
                variant="contained"
                href="https://simplyeto.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '12px 32px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                Get Prints
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Products; 