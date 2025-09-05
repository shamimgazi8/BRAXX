const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(
  __dirname,
  "public/images/360framesV2/CHROME_BLACK 360"
);
const outputDir = path.join(
  __dirname,
  "public/images/360framesV2/CHROME_BLACK 360 V2"
);

// Create output folder
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) return console.error("❌ Failed to read input dir:", err);

  const webpFiles = files.filter((file) =>
    file.toLowerCase().endsWith(".webp")
  );

  if (webpFiles.length === 0) {
    console.log("⚠️ No WebP files found in the folder!");
    return;
  }

  webpFiles.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const frameNumber = String(index + 1).padStart(3, "0");
    const outputPath = path.join(outputDir, `frame-${frameNumber}.webp`);

    sharp(inputPath)
      .resize({ width: 1800, withoutEnlargement: true }) // higher resolution
      .webp({ quality: 100, effort: 6 }) // good balance: ~150-200KB
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${outputPath}`))
      .catch((err) => console.error(`❌ Failed: ${inputPath}`, err));
  });
});
