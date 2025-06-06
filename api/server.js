const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// List videos endpoint
app.get('/api/videos', (req, res) => {
  const videos = [
    'Wetiko Short.mp4',
    'Solana Block Zero FINAL.mp4',
    'day5IG.mp4',
    'FromNaraNoMusic.mp4',
    'render.mp4',
    'xDgG4vXH26O7AAMw.mp4',
    '7ZWylAuSEnmkjdZD.mp4'
  ];
  res.json(videos);
});

// Get video URL endpoint
app.get('/api/video/:filename', (req, res) => {
  const { filename } = req.params;
  const videoUrl = `https://storage.googleapis.com/lightsaint-portfolio/${filename}`;
  res.json({ url: videoUrl });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Lightsaint Portfolio API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 