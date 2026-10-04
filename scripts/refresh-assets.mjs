import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
const assets = JSON.parse(
  await readFile(new URL("../docs/assets.json", import.meta.url), "utf8"),
);
for (const asset of assets) {
  const response = await fetch(asset.url);
  if (!response.ok) throw new Error(`${response.status}: ${asset.url}`);
  const source = Buffer.from(await response.arrayBuffer());
  if (asset.widths) {
    for (const width of asset.widths) {
      await sharp(source)
        .resize({ width })
        .webp({ quality: 82 })
        .toFile(
          new URL(
            `../public/images/${asset.name}-${width}.webp`,
            import.meta.url,
          ).pathname,
        );
    }
  } else {
    const output = asset.width
      ? await sharp(source).resize(asset.width).png().toBuffer()
      : source;
    await writeFile(
      new URL(`../public/images/${asset.file}`, import.meta.url),
      output,
    );
  }
  console.log(`Updated ${asset.name}`);
}
