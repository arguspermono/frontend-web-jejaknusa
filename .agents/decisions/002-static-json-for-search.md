# ADR 002: Static JSON for Search

**Date:** 2026-05-21
**Status:** Accepted

## Context
The Destination page requires a search and filter feature. As a frontend-only MVP without a backend API, we need a way to mock this functionality.

## Decision
We will use a static `destinations.json` file loaded via `fetch()` (or directly imported via a bundler) to populate the UI and perform client-side filtering.

## Rationale
- Keeps the MVP strictly frontend.
- Simulates real API behavior, making it easy to swap out the URL for a real API endpoint later.
- Fast and reliable for initial prototyping.
