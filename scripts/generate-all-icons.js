const { execSync } = require('child_process');
const path = require('path');

console.log('═'.repeat(50));
console.log('🎨 FAVICON GENERATION SUITE');
console.log('═'.repeat(50));
console.log('');

try {
  // Generate favicons
  console.log('📦 Step 1/2: Generating favicon PNGs...\n');
  execSync('node scripts/generate-favicons.js', { stdio: 'inherit' });

  // Generate OG image
  console.log('📦 Step 2/2: Generating OG image...\n');
  execSync('node scripts/generate-og-image.js', { stdio: 'inherit' });

  console.log('═'.repeat(50));
  console.log('✅ ALL ICONS GENERATED SUCCESSFULLY!');
  console.log('═'.repeat(50));
  console.log('');
  console.log('📁 Generated files in /public/:');
  console.log('   • favicon-16x16.png');
  console.log('   • favicon-32x32.png');
  console.log('   • favicon-96x96.png');
  console.log('   • apple-touch-icon.png');
  console.log('   • android-chrome-192x192.png');
  console.log('   • android-chrome-512x512.png');
  console.log('   • og-image.png');
  console.log('');
  console.log('🚀 Next steps:');
  console.log('   1. Update src/app/layout.tsx with new metadata');
  console.log('   2. Deploy to Vercel');
  console.log('   3. Clear social media caches');
  console.log('');
} catch (error) {
  console.error('❌ Error during generation:', error.message);
  process.exit(1);
}
