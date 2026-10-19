// Publishes ./out to the gh-pages branch as a normal (non-force) commit.
// Replaces the gh-pages npm package, which fails on Windows with ENAMETOOLONG
// once the site has a few hundred files.
import { execSync } from "node:child_process";
import { cpSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = join(root, "out");
const remote = execSync("git remote get-url origin", { cwd: root }).toString().trim();
const dir = mkdtempSync(join(tmpdir(), "wine-learner-pages-"));
const git = (cmd) => execSync(`git ${cmd}`, { cwd: dir, stdio: "inherit" });

try {
  git("init -q");
  git(`remote add origin ${remote}`);
  git("fetch -q --depth 1 origin gh-pages");
  git("checkout -q -b gh-pages FETCH_HEAD");
  // Keep old _next/ chunks (hashed, immutable) so tabs opened before a deploy, e.g. a running
  // 2-hour mock exam, can still load them. ponytail: never pruned; prune if the branch gets large.
  for (const name of readdirSync(dir)) if (name !== ".git" && name !== "_next") rmSync(join(dir, name), { recursive: true, force: true });
  cpSync(out, dir, { recursive: true });
  git("add -A");
  const changed = execSync("git status --porcelain", { cwd: dir }).toString().trim();
  if (!changed) {
    console.log("publish-pages: no changes to deploy");
  } else {
    git(`commit -q -m "Deploy ${new Date().toISOString()}"`);
    git("push -q origin gh-pages");
    console.log("publish-pages: Published");
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
