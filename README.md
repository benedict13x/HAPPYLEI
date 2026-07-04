# Happy Birthday, Lei! 🎀

A pink, dependency-free birthday greeting website with a **brochure-style**
unfolding page transition.

## Flow

1. **Welcome** — greeting + "Open" button
2. **Menu** — three buttons: **Memory**, **Message**, **Wish**
   - **Memory** — a gallery of Lei's photos with captions
   - **Message** — a heartfelt note
   - **Wish** — birthday wishes

Panels fold open/closed on a left hinge (a brochure/leaflet unfold effect).

## Files

- `index.html` — panels and content
- `styles.css` — pink theme and the 3D brochure-fold transition
- `script.js` — panel navigation
- `images/` — Lei's photos

## Run it

No build step or dependencies:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
