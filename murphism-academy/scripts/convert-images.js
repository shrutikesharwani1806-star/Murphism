const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const coursesDir = path.join(publicDir, 'courses');

const pngFiles = [
  { src: path.join(publicDir, '3d-computer.png'), dest: path.join(publicDir, '3d-computer.webp'), resize: 800 },
  { src: path.join(coursesDir, '3d-modelling.png'), dest: path.join(coursesDir, '3d-modelling.webp'), resize: 600 },
  { src: path.join(coursesDir, 'ai-courses.png'), dest: path.join(coursesDir, 'ai-courses.webp'), resize: 600 },
  { src: path.join(coursesDir, 'bsc-animation.png'), dest: path.join(coursesDir, 'bsc-animation.webp'), resize: 600 },
  { src: path.join(coursesDir, 'digital-marketing.png'), dest: path.join(coursesDir, 'digital-marketing.webp'), resize: 600 },
  { src: path.join(coursesDir, 'graphic-design.png'), dest: path.join(coursesDir, 'graphic-design.webp'), resize: 600 },
  { src: path.join(coursesDir, 'specialization.png'), dest: path.join(coursesDir, 'specialization.webp'), resize: 600 },
  { src: path.join(coursesDir, 'vfx.png'), dest: path.join(coursesDir, 'vfx.webp'), resize: 600 },
  { src: path.join(coursesDir, 'video-editing.png'), dest: path.join(coursesDir, 'video-editing.webp'), resize: 600 },
  { src: path.join(coursesDir, 'web-development.png'), dest: path.join(coursesDir, 'web-development.webp'), resize: 600 }
];

async function convert() {
  for (const item of pngFiles) {
    if (fs.existsSync(item.src)) {
      console.log(`Converting ${path.basename(item.src)}...`);
      try {
        await sharp(item.src)
          .resize(item.resize) // resize near rendered dimensions
          .webp({ quality: 80 }) // convert to webp and compress
          .toFile(item.dest);
        console.log(`Saved optimized WebP to ${path.basename(item.dest)}`);
      } catch (err) {
        console.error(`Error converting ${item.src}:`, err);
      }
    } else {
      console.log(`File not found: ${item.src}`);
    }
  }
}

convert();
