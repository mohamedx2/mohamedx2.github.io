const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

(async () => {
  try {
    const svgPath = 'public/favicon.svg';
    const svg = fs.readFileSync(svgPath);

    console.log('Generating favicon PNGs from', svgPath);
    await sharp(svg).resize(32, 32).png().toFile('public/favicon-32x32.png');
    await sharp(svg).resize(16, 16).png().toFile('public/favicon-16x16.png');

    console.log('Generating favicon.ico from PNG');
    const pngBuffer = fs.readFileSync('public/favicon-32x32.png');

    // Build a minimal ICO file containing a single PNG image.
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = ICO
    header.writeUInt16LE(1, 4); // image count

    const dirEntry = Buffer.alloc(16);
    dirEntry.writeUInt8(32, 0); // width
    dirEntry.writeUInt8(32, 1); // height
    dirEntry.writeUInt8(0, 2); // color count
    dirEntry.writeUInt8(0, 3); // reserved
    dirEntry.writeUInt16LE(1, 4); // planes
    dirEntry.writeUInt16LE(32, 6); // bit count
    dirEntry.writeUInt32LE(pngBuffer.length, 8); // bytes in resource
    const imageOffset = header.length + dirEntry.length;
    dirEntry.writeUInt32LE(imageOffset, 12); // offset

    const icoBuffer = Buffer.concat([header, dirEntry, pngBuffer]);
    fs.writeFileSync('public/favicon.ico', icoBuffer);

    console.log('Favicons generated: public/favicon-32x32.png, public/favicon-16x16.png, public/favicon.ico');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();
