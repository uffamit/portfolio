const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const FAVICON_SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  
  // Check if favicon.svg exists
  if (!fs.existsSync(svgPath)) {
    console.error('❌ Error: public/favicon.svg not found!');
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(svgPath);

  console.log('🚀 Generating favicon PNGs from favicon.svg...\n');
  console.log('─'.repeat(50));

  // Generate all favicon sizes
  for (const { name, size } of FAVICON_SIZES) {
    const outputPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png({ quality: 100 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const fileSize = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${name.padEnd(30)} ${String(size + '×' + size).padEnd(12)} ${fileSize} KB`);
  }

  console.log('─'.repeat(50));
  console.log('\n🎉 All favicon PNGs generated successfully!\n');
}

generateFavicons().catch((err) => {
  console.error('❌ Error generating favicons:', err);
  process.exit(1);
});
