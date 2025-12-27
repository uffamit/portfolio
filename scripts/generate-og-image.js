const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  const publicDir = path.join(__dirname, '../public');
  const outputPath = path.join(publicDir, 'og-image.png');

  console.log('🚀 Generating og-image.png for social media...\n');

  // Create OG Image SVG (1200×630 - optimal for social media)
  const ogSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#b3a5c8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b7ba8;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      
      <!-- Border accent -->
      <rect x="20" y="20" width="1160" height="590" rx="20" ry="20" 
            fill="none" stroke="#b3a5c8" stroke-width="2" stroke-opacity="0.3"/>
      
      <!-- Main Logo Text -->
      <text x="600" y="280" text-anchor="middle" fill="url(#textGrad)" 
            font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="180">AD</text>
      
      <!-- Name -->
      <text x="600" y="380" text-anchor="middle" fill="#ffffff" 
            font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="48">Amit Divekar</text>
      
      <!-- Title -->
      <text x="600" y="440" text-anchor="middle" fill="#b3a5c8" 
            font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="28">Software Engineer • Full-Stack • Cloud • DevOps</text>
      
      <!-- Website URL -->
      <text x="600" y="560" text-anchor="middle" fill="#666666" 
            font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="24">amitdevx.tech</text>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png({ quality: 100 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  const fileSize = (stats.size / 1024).toFixed(2);

  console.log('─'.repeat(50));
  console.log(`✅ og-image.png                  1200×630       ${fileSize} KB`);
  console.log('─'.repeat(50));
  console.log('\n🎉 OG Image generated successfully!\n');
  console.log('📱 This image will show when sharing on:');
  console.log('   • Facebook');
  console.log('   • Twitter/X');
  console.log('   • LinkedIn');
  console.log('   • WhatsApp');
  console.log('   • Discord');
  console.log('   • Slack\n');
}

generateOGImage().catch((err) => {
  console.error('❌ Error generating OG image:', err);
  process.exit(1);
});
