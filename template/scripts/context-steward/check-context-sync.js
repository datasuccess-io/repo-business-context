#!/usr/bin/env node
/*
Context Steward check – enforce PR-as-change-record basics
- Required PR body sections
- If context files are changed, ensure last_updated is updated
*/

const requiredHeadings = [
  "## What changed",
  "## Why",
  "## Decisions",
  "## Context updates required",
];

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN || process.env.INPUT_GITHUB_TOKEN;
    const eventPath = process.env.GITHUB_EVENT_PATH;
    const repoFull = process.env.GITHUB_REPOSITORY;
    if (!token) throw new Error("GITHUB_TOKEN missing");
    if (!eventPath) throw new Error("GITHUB_EVENT_PATH missing");
    if (!repoFull) throw new Error("GITHUB_REPOSITORY missing");

    const evt = JSON.parse(require("fs").readFileSync(eventPath, "utf8"));
    const pr = evt.pull_request;
    if (!pr) throw new Error("This workflow must run on pull_request events");

    const [owner, repo] = repoFull.split("/");

    const body = pr.body || "";
    const missing = requiredHeadings.filter((h) => !body.includes(h));
    if (missing.length) {
      fail(`PR body is missing required section(s): ${missing.join(", ")}`);
    }

    // Fetch changed files
    const files = await ghPaged(
      `https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}/files`,
      token,
    );

    let touchedContext = false;
    let contextHasLastUpdatedBump = false;

    for (const f of files) {
      const filename = f.filename || "";
      const patch = f.patch || "";
      if (filename.startsWith("context/")) {
        touchedContext = true;
        if (/^\+.*last_updated:\s*\d{4}-\d{2}-\d{2}/m.test(patch)) {
          contextHasLastUpdatedBump = true;
        }
      }
    }

    if (touchedContext && !contextHasLastUpdatedBump) {
      fail(
        "One or more files under context/ changed but no last_updated field updates were detected. Please bump last_updated in modified context files.",
      );
    }

    console.log("Context Steward checks passed");
  } catch (err) {
    fail(err.message || String(err));
  }
}

async function ghPaged(url, token) {
  const results = [];
  let page = 1;
  while (true) {
    const u = new URL(url);
    u.searchParams.set("per_page", "100");
    u.searchParams.set("page", String(page));
    const res = await fetch(u, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "context-steward-check",
      },
    });
    if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
    const items = await res.json();
    results.push(...items);
    if (items.length < 100) break;
    page += 1;
  }
  return results;
}

function fail(msg) {
  console.error(`::error::${msg}`);
  process.exit(1);
}

run();
