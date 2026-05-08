#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("../public/images", import.meta.url));
const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 82;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let totalIn = 0;
let totalOut = 0;
let converted = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const { dir, name, ext } = parse(file);
  if (!SOURCE_EXT.has(ext.toLowerCase())) continue;

  const out = join(dir, `${name}.webp`);
  if (existsSync(out)) {
    skipped++;
    continue;
  }

  await sharp(file).webp({ quality: QUALITY, effort: 5 }).toFile(out);

  const inSize = (await stat(file)).size;
  const outSize = (await stat(out)).size;
  totalIn += inSize;
  totalOut += outSize;
  converted++;

  const ratio = ((1 - outSize / inSize) * 100).toFixed(0);
  console.log(
    `  ${file.replace(ROOT, "images")} → ${name}.webp (-${ratio}%)`,
  );
}

const fmt = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;
console.log(
  `\n${converted} converted, ${skipped} skipped (already exists)\n` +
    `${fmt(totalIn)} → ${fmt(totalOut)} (saved ${fmt(totalIn - totalOut)})`,
);
