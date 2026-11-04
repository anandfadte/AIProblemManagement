import fs from "fs";
import path from "path";
import archiver from "archiver";

const ACTIVITIES_DIR = path.join(process.cwd(), "activities");
const OUTPUT_DIR = path.join(process.cwd(), "public", "downloads");

async function buildZip(slug: string): Promise<void> {
  const sourceDir = path.join(ACTIVITIES_DIR, slug);
  const outputPath = path.join(OUTPUT_DIR, `${slug}.zip`);

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      console.log(`  ${slug}.zip (${archive.pointer()} bytes)`);
      resolve();
    });

    archive.on("error", reject);
    archive.pipe(output);
    archive.directory(sourceDir, slug);
    archive.finalize();
  });
}

async function main() {
  console.log("Building activity ZIPs...\n");

  if (!fs.existsSync(ACTIVITIES_DIR)) {
    console.log("No activities directory found, skipping ZIP build.");
    return;
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const slugs = fs
    .readdirSync(ACTIVITIES_DIR)
    .filter((entry) =>
      fs.statSync(path.join(ACTIVITIES_DIR, entry)).isDirectory()
    );

  for (const slug of slugs) {
    await buildZip(slug);
  }

  console.log(`\nDone. ${slugs.length} ZIPs written to public/downloads/`);
}

main().catch((err) => {
  console.error("Failed to build ZIPs:", err);
  process.exit(1);
});
