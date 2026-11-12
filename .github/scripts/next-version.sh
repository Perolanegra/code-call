#!/usr/bin/env bash
# Next release version from the latest vX.Y.Z tag and a title in our commit format:
#   "(feat): …"                       → minor (0.2.1 → 0.3.0)
#   "(bugfix|hotfix|chore|…): …" or anything else → patch (0.2.1 → 0.2.2)
# Usage: next-version.sh "<PR title or commit subject>" [latest-tag]
set -euo pipefail
title="${1:-}"
latest="${2:-$(git tag -l 'v[0-9]*.[0-9]*.[0-9]*' --sort=-v:refname | head -1)}"
latest="${latest:-v0.0.0}"
IFS=. read -r major minor patch <<<"${latest#v}"
if [[ "$title" =~ ^\(feat\) ]]; then
  minor=$((minor + 1)); patch=0
else
  patch=$((patch + 1))
fi
echo "${major}.${minor}.${patch}"
