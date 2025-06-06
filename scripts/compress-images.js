const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const MAX_WIDTH = 1920; // Maximum width for images
const QUALITY = 80; // JPEG quality (0-100)
const PNG_QUALITY = 80; // PNG quality (0-100)

// Directories to process
const directories = [
    'public/images/art',
    'public/images/photography',
    'public/images/profile'
];

// Create backup directory
const backupDir = 'public/images_backup';
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

async function compressImage(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const fileName = path.basename(filePath);
        const backupPath = path.join(backupDir, fileName);

        // Create backup
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(filePath, backupPath);
            console.log(`Created backup: ${backupPath}`);
        }

        // Get original file size
        const originalStats = fs.statSync(filePath);
        const originalSize = originalStats.size / (1024 * 1024); // Convert to MB

        // Read the file into a buffer first
        const imageBuffer = fs.readFileSync(filePath);
        
        let processedImage;
        if (ext === '.png') {
            processedImage = await sharp(imageBuffer)
                .resize(MAX_WIDTH, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .png({ quality: PNG_QUALITY })
                .toBuffer();
        } else if (ext === '.jpg' || ext === '.jpeg') {
            processedImage = await sharp(imageBuffer)
                .resize(MAX_WIDTH, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({ quality: QUALITY })
                .toBuffer();
        } else {
            console.log(`Skipping unsupported file: ${filePath}`);
            return;
        }

        // Write compressed image
        fs.writeFileSync(filePath, processedImage);

        // Get new file size
        const newStats = fs.statSync(filePath);
        const newSize = newStats.size / (1024 * 1024); // Convert to MB
        const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);

        console.log(`Compressed: ${fileName}`);
        console.log(`Original size: ${originalSize.toFixed(2)}MB`);
        console.log(`New size: ${newSize.toFixed(2)}MB`);
        console.log(`Reduction: ${reduction}%\n`);

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        // If backup exists, restore it
        const backupPath = path.join(backupDir, path.basename(filePath));
        if (fs.existsSync(backupPath)) {
            try {
                fs.copyFileSync(backupPath, filePath);
                console.log(`Restored original file from backup: ${filePath}`);
            } catch (restoreError) {
                console.error(`Failed to restore backup for ${filePath}:`, restoreError.message);
            }
        }
    }
}

async function processDirectory(dir) {
    try {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else {
                const ext = path.extname(file).toLowerCase();
                if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                    await compressImage(filePath);
                }
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dir}:`, error.message);
    }
}

async function main() {
    console.log('Starting image compression...\n');
    
    for (const dir of directories) {
        if (fs.existsSync(dir)) {
            console.log(`Processing directory: ${dir}`);
            await processDirectory(dir);
        } else {
            console.log(`Directory not found: ${dir}`);
        }
    }
    
    console.log('Compression complete!');
    console.log('Original images have been backed up to:', backupDir);
}

main().catch(console.error); 