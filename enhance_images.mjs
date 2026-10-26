import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');
const backupDir = path.join(__dirname, 'src', 'assets', 'images_raw');

// 1. Create backup dir if not exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir).filter((f) => f.endsWith('.jpeg') || f.endsWith('.jpg'));

console.log(`Found ${files.length} images to enhance...`);

for (const file of files) {
  const srcPath = path.join(imagesDir, file);
  const rawPath = path.join(backupDir, file);

  // Backup original if not already backed up
  if (!fs.existsSync(rawPath)) {
    fs.copyFileSync(srcPath, rawPath);
  }

  // Enhance using sharp:
  // - normalize: stretches contrast to full dynamic range
  // - modulate: boosts vibrance & corrects exposure
  // - sharpen: crisp unsharp mask bringing out crystal facets, marquee edges, and textures
  // - clahe (contrast limited adaptive histogram equalization) if available or refined tone curve
  await sharp(rawPath)
    .normalize()
    .modulate({
      brightness: 1.03,
      saturation: 1.14,
    })
    .linear(1.06, -6) // Gentle contrast curve for cinematic noir depth
    .sharpen({
      sigma: 1.5,
      m1: 1.6,
      m2: 0.6,
      x1: 2,
      y2: 10,
    })
    .jpeg({
      quality: 95,
      chromaSubsampling: '4:4:4', // Highest color resolution, zero color blur
      mozjpeg: true,
    })
    .toFile(path.join(imagesDir, `temp_${file}`));

  // Replace original with enhanced
  fs.renameSync(path.join(imagesDir, `temp_${file}`), srcPath);
  console.log(`✓ Enhanced ${file} with high-definition unsharp mask and dynamic range.`);
}

console.log('All images enhanced successfully!');
