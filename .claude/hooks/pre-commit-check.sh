#!/usr/bin/env bash
# Blocks `git commit` from Claude Code unless the site builds and type-checks.
input=$(cat)
echo "$input" | grep -q 'git commit' || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
if ! out=$(npm run build 2>&1 && npx astro check 2>&1); then
  echo "Build or astro check failed; fix before committing:" >&2
  echo "$out" | tail -40 >&2
  exit 2
fi
