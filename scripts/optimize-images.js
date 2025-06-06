const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PHOTOGRAPHY_DIR = path.join(__dirname, '../public/images/photography');
const OPTIMIZED_DIR = path.join(PHOTOGRAPHY_DIR, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    // If image is too large, resize it
    if (width > 1600) {
      height = Math.round((height * 1600) / width);
      width = 1600;
    }
    
    // Optimize the image
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 80,
        progressive: true
      })
      .toFile(outputPath);
      
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(PHOTOGRAPHY_DIR);
  
  for (const file of files) {
    if (file === 'optimized') continue;
    
    const inputPath = path.join(PHOTOGRAPHY_DIR, file);
    const outputPath = path.join(OPTIMIZED_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
    
    if (fs.statSync(inputPath).isFile()) {
      await optimizeImage(inputPath, outputPath);
    }
  }
}

processImages().then(() => {
  console.log('Image optimization complete!');
}); 