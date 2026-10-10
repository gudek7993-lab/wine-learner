// Workaround for Next.js 16 static export: segment prefetch files are written as
//   out/grapes/__next.grapes/__PAGE__.txt
// but the client requests the flattened name
//   out/grapes/__next.grapes.__PAGE__.txt
// Static hosts (GitHub Pages) then return 404 for every prefetch. Copy each nested
// file to its flattened name next to the `__next.*` directory.
import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(dir, full);
    else walk(full);
  }
}

function flatten(parent, segDir) {
  const stack = [segDir];
  while (stack.length) {
    const d = stack.pop();
    for (const name of readdirSync(d)) {
      const full = join(d, name);
      if (statSync(full).isDirectory()) stack.push(full);
      else {
        const flat = relative(parent, full).split(sep).join(".");
        copyFileSync(full, join(parent, flat));
        copied++;
      }
    }
  }
}

walk(OUT);
console.log(`flatten-rsc: copied ${copied} prefetch files`);
