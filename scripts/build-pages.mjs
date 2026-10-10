// Builds the static site for GitHub Pages (served at https://<user>.github.io/wine-learner/).
import { execSync } from "node:child_process";

execSync("next build", {
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "/wine-learner" },
});
execSync("node scripts/flatten-rsc.mjs", { stdio: "inherit" });
