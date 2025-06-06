const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const QUALITY = 80;
const MAX_WIDTH = 1920;
const SOURCE_DIR = 'public/images';
const OUTPUT_DIR = 'public/optimized';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH) {
      height = Math.round((height * MAX_WIDTH) / width);
      width = MAX_WIDTH;
    }

    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    console.log(`✓ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // Create corresponding output directory
      const relativePath = path.relative(SOURCE_DIR, inputPath);
      const outputDir = path.join(OUTPUT_DIR, relativePath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      await processDirectory(inputPath);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const relativePath = path.relative(SOURCE_DIR, inputPath);
        const outputPath = path.join(
          OUTPUT_DIR,
          relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        );
        await optimizeImage(inputPath, outputPath);
      }
    }
  }
}

console.log('Starting image optimization...\n');
processDirectory(SOURCE_DIR)
  .then(() => console.log('\nOptimization complete!'))
  .catch(console.error); 