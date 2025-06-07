const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Simple token generation
const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Store tokens with expiration
const tokens = new Map();

// Generate a new token every hour
setInterval(() => {
  const token = generateToken();
  tokens.set(token, Date.now() + 60 * 60 * 1000); // 1 hour expiration
  console.log('New token generated:', token);
}, 60 * 60 * 1000);

// Generate initial token
const initialToken = generateToken();
tokens.set(initialToken, Date.now() + 60 * 60 * 1000);
console.log('Initial token generated:', initialToken);
console.log('Current tokens:', Array.from(tokens.entries()));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Security-Policy'],
  credentials: true
}));

// Add CSP headers middleware
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://platform.twitter.com https://drip.haus; " +
    "frame-src 'self' https://www.instagram.com https://platform.twitter.com https://www.youtube.com https://www.youtube-nocookie.com https://drip.haus; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://www.instagram.com https://platform.twitter.com https://drip.haus;"
  );
  next();
});

app.use(express.json());

// List videos endpoint
app.get('/api/videos', async (req, res) => {
  try {
    const videosDir = path.join(__dirname, '../public/videos');
    const files = fs.readdirSync(videosDir);
    const videoFiles = files.filter(file => file.endsWith('.mp4'));
    res.json(videoFiles);
  } catch (error) {
    console.error('Error listing videos:', error);
    res.status(500).json({ 
      error: 'Failed to list videos', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get video URL endpoint
app.get('/api/video/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const token = req.query.token;

    console.log('Getting video:', filename);
    console.log('Using token:', token);

    // Check if token is valid
    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ error: 'No token provided' });
    }

    if (!tokens.has(token)) {
      console.log('Invalid token');
      return res.status(401).json({ error: 'Invalid token' });
    }

    const expiration = tokens.get(token);
    if (expiration < Date.now()) {
      console.log('Token expired');
      tokens.delete(token); // Clean up expired token
      return res.status(401).json({ error: 'Token expired' });
    }

    // Check if file exists
    const videoPath = path.join(__dirname, '../public/videos', filename);
    if (!fs.existsSync(videoPath)) {
      console.log('File not found:', filename);
      return res.status(404).json({ error: 'Video not found' });
    }

    // Return the local URL for the video
    const url = `/videos/${filename}`;
    res.json({ url });
  } catch (error) {
    console.error('Error getting video:', error);
    res.status(500).json({ 
      error: 'Failed to get video', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get current token endpoint
app.get('/api/token', (req, res) => {
  try {
    // Find the most recent valid token
    const validTokens = Array.from(tokens.entries())
      .filter(([_, expiration]) => expiration > Date.now())
      .sort(([_, a], [__, b]) => b - a);

    if (validTokens.length === 0) {
      // Generate a new token if none are valid
      const newToken = generateToken();
      tokens.set(newToken, Date.now() + 60 * 60 * 1000);
      return res.json({ token: newToken });
    }

    res.json({ token: validTokens[0][0] });
  } catch (error) {
    console.error('Error getting token:', error);
    res.status(500).json({ 
      error: 'Failed to get token', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 