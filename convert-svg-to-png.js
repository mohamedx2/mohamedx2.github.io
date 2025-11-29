const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

// List of files that need conversion (SVGs saved as PNG)
const filesToConvert = [
    'html.png', 'css.png', 'js.png', 'react.png', 'redux.png',
    'reactquery.png', 'ts.png', 'next.png', 'tailwind.png', 'mui.png',
    'framer.png', 'stripe.png', 'node-js.png', 'express.png',
    'mongodb.png', 'Firebase.png', 'postger.png', 'mysql.png',
    'prisma.png', 'graphql.png', 'ReactNative.png', 'figma.png', 'go.png'
];

async function convertSvgToPng(filename) {
    const filePath = path.join(publicDir, filename);
    const tempPath = filePath + '.tmp';

    try {
        // Read the file
        const content = fs.readFileSync(filePath, 'utf8');

        // Check if it's actually an SVG
        if (!content.startsWith('<svg') && !content.startsWith('<?xml')) {
            console.log(`✓ ${filename} is already a PNG`);
            return;
        }

        console.log(`Converting ${filename}...`);

        // Save as temporary SVG
        fs.writeFileSync(tempPath, content);

        // Convert SVG to PNG using sharp
        await sharp(tempPath)
            .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(filePath + '.new');

        // Replace original with converted
        fs.unlinkSync(filePath);
        fs.renameSync(filePath + '.new', filePath);
        fs.unlinkSync(tempPath);

        console.log(`✓ Converted ${filename}`);
    } catch (error) {
        console.error(`✗ Failed to convert ${filename}:`, error.message);
        // Clean up temp files
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        if (fs.existsSync(filePath + '.new')) fs.unlinkSync(filePath + '.new');
    }
}

async function convertAll() {
    console.log('Converting SVG icons to PNG format...\n');

    for (const file of filesToConvert) {
        await convertSvgToPng(file);
    }

    console.log('\nConversion complete!');
}

convertAll().catch(console.error);
