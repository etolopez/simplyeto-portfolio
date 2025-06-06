const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://simplyeto-pd66qw98i-etolopezs-projects.vercel.app', 'https://simplyeto.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// List all videos endpoint
app.get('/api/videos', async (req, res) => {
  try {
    // Temporary mock data
    const videos = [
      { name: '7ZWylAuSEnmkjdZD.mp4', size: '3301194', contentType: 'video/mp4', updated: '2025-06-06T04:33:54.715Z' },
      { name: 'Balloon2.mp4', size: '59411940', contentType: 'video/mp4', updated: '2025-06-06T04:34:20.251Z' },
      { name: 'Controller.mp4', size: '56079908', contentType: 'video/mp4', updated: '2025-06-06T04:37:36.833Z' }
    ];
    res.json({ videos });
  } catch (error) {
    console.error('Error listing videos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get video URL endpoint
app.get('/api/video/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    // Temporary mock URL
    const url = `http://localhost:3001/videos/${filename}`;
    res.json({ url });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Video API is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 