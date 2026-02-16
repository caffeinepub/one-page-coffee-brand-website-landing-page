# Specification

## Summary
**Goal:** Replace the existing frontend with a single minimal full-screen reference page featuring a generated background image, a gradient overlay, centered reference text, and one primary link button.

**Planned changes:**
- Remove the current multi-section UI (including any top nav/footer) and render a single full-viewport page.
- Add a layered background: static generated image at the bottom with a semi-transparent color-gradient overlay above it.
- Center one text element reading exactly: "Reference #: CSN-8403D-PDF-18932" and display one primary CTA button above the fold.
- Make the primary button link to https://hollywooddiqitalblueprint.com/hjvdhuidv/wsoft.html.
- Place and reference the generated background image as a static file under `frontend/public/assets/generated`.

**User-visible outcome:** Visiting the app shows one full-screen page with a background image + gradient overlay, centered reference text, and a single button that navigates to the provided external URL.
