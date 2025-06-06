const express = require('express');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');

const app = express();
app.use(cors());

// Initialize storage
const storage = new Storage();
const bucketName = 'YOUR_BUCKET_NAME'; // Replace with your bucket name
const bucket = storage.bucket(bucketName);

// Endpoint to get video URL
app.get('/api/video/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const file = bucket.file(filename);
    
    // Check if file exists
    const [exists] = await file.exists();
    if (!exists) {
      return res.status(404).json({ error: 'Video not found' });
    }

    // Generate a signed URL that expires in 1 hour
    const [url] = await file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 60 * 60 * 1000, // 1 hour
    });

    res.json({ url });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 