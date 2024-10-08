import { readFile, writeFile } from "fs/promises";
import { minify } from "terser";

const input = await readFile("ki.js", "utf8");
const packageData = JSON.parse(await readFile("package.json", "utf8"));

const result = await minify(input, {
  compress: {
    unused: false, // Keep undefined aliases to reduce size
  },
  output: {
    comments: false,
    preamble: `/*!
 * ${packageData.name} v${packageData.version} - ${
      new Date().toISOString().split("T")[0]
    }
 * Copyright (c) 2015 ${packageData.author.name} (${packageData.author.url})
 * License: ${packageData.license}
 */`,
  },
});

await writeFile(`public/ki-${packageData.version}.min.js`, result.code);
await writeFile(`public/ki-latest.min.js`, result.code);

console.log(`Build successful!`);
