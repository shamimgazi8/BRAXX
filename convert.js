const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images/360frames/CHROMEBLACK";
const outputDir = "./public/images/360frames/chromeblack-optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file, index) => {
  if (file.endsWith(".png")) {
    const inputPath = path.join(inputDir, file);
    const frameNumber = String(index + 1).padStart(3, "0");
    const outputPath = path.join(outputDir, `frame-${frameNumber}.webp`);

    sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true })
      .sharpen()
      .webp({ quality: 100 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${outputPath}`))
      .catch((err) => console.error(`❌ Failed: ${inputPath}`, err));
  }
});
