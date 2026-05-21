# ADR 001: Use Tailwind CSS over Bootstrap

**Date:** 2026-05-21
**Status:** Accepted

## Context
The project requires matching a custom Figma design for a tourism website. We need a CSS framework that allows rapid development and high customizability.

## Decision
We will use Tailwind CSS instead of Bootstrap.

## Rationale
- Bootstrap's pre-defined components often require significant overriding to match custom designs, leading to bloated CSS and `!important` tags.
- Tailwind provides utility classes that map directly to design tokens (spacing, typography, colors), making it easier to translate a Figma file directly to code without leaving the HTML.
- Tailwind's JIT compiler ensures the final CSS bundle is extremely small by only including the classes actually used.
