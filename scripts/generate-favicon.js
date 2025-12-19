const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const icoPath = path.join(__dirname, '../public/favicon.ico');
  
  console.log('🔄 Generating favicon.ico from favicon.svg...');
  
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate multiple PNG sizes for ICO
    const sizes = [16, 32, 48];
    const pngBuffers = [];
    
    console.log('✅ Generating multiple icon sizes...');
    
    for (const size of sizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      pngBuffers.push(pngBuffer);
      console.log(`   ✓ Created ${size}x${size} icon`);
    }
    
    // Generate the ICO file with multiple sizes
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('✅ favicon.ico generated successfully!');
    console.log('📍 Location:', icoPath);
    console.log('📏 Size:', (icoBuffer.length / 1024).toFixed(2), 'KB');
    
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
