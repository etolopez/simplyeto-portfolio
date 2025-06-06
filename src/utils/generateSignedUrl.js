const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Initialize storage with your credentials
const storage = new Storage({
  keyFilename: path.join(__dirname, '../../gcp-credentials.json'), // Path to your downloaded JSON key
  projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
});

const bucketName = 'YOUR_BUCKET_NAME'; // Replace with your bucket name
const bucket = storage.bucket(bucketName);

// Function to generate a signed URL
async function generateSignedUrl(fileName) {
  try {
    const [url] = await bucket.file(fileName).getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 24 * 60 * 60 * 1000, // URL expires in 24 hours
    });
    return url;
  } catch (error) {
    console.error('Error generating signed URL:', error);
    throw error;
  }
}

module.exports = { generateSignedUrl }; 