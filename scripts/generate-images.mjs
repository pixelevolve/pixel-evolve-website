import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateImages() {
  console.log('Generating PNG images from SVG sources...\n');

  // Generate apple-touch-icon.png (180x180)
  try {
    const appleTouchSvg = readFileSync(join(publicDir, 'apple-touch-icon.svg'));
    await sharp(appleTouchSvg)
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png (180x180)');
  } catch (err) {
    console.error('✗ apple-touch-icon.png:', err.message);
  }

  // Generate og-image.png (1200x630)
  try {
    const ogSvg = readFileSync(join(publicDir, 'og-image.svg'));
    await sharp(ogSvg)
      .resize(1200, 630)
      .png()
      .toFile(join(publicDir, 'og-image.png'));
    console.log('✓ og-image.png (1200x630)');
  } catch (err) {
    console.error('✗ og-image.png:', err.message);
  }

  // Generate favicon.png as fallback (32x32)
  try {
    const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
    await sharp(faviconSvg)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon.png'));
    console.log('✓ favicon.png (32x32)');
  } catch (err) {
    console.error('✗ favicon.png:', err.message);
  }

  // Generate og-image-translate.png (1200x630)
  try {
    const ogTranslateSvg = readFileSync(join(publicDir, 'og-image-translate.svg'));
    await sharp(ogTranslateSvg)
      .resize(1200, 630)
      .png()
      .toFile(join(publicDir, 'og-image-translate.png'));
    console.log('✓ og-image-translate.png (1200x630)');
  } catch (err) {
    console.error('✗ og-image-translate.png:', err.message);
  }

  console.log('\nDone!');
}

generateImages();
