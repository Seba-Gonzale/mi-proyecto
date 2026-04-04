## Stack

- **SvelteKit**: v2.50.2 (Runes mode enabled)
- **Svelte**: v5.54.0
- **Tailwind CSS**: v4.1.18 (via @tailwindcss/vite)
- **Vite**: v7.3.1
- **JS/Node**: ES2022+, Node (latest LTS)
- **Adapter**: @sveltejs/adapter-vercel v6.3.1 (SSR/SSG hybrid)

## Tree

```
mi-proyecto/
├── src/
│   ├── lib/
│   │   ├── assets/          # static assets (images, fonts)
│   │   ├── components/      # UI comps (6 files)
│   │   ├── stores/          # global state (cart, ui, catalog)
│   │   └── index.js
│   ├── routes/
│   │   ├── api/             # API endpoints (if any)
│   │   ├── producto/        # product detail pages
│   │   ├── +layout.svelte   # root layout with TopBar
│   │   ├── +page.svelte     # main catalog page
│   │   ├── +page.server.js  # data load from GAS
│   │   └── layout.css       # Tailwind import
│   ├── app.css              # global Tailwind + body bg
│   └── app.d.ts
├── static/                  # public assets (portada_1200x400.webp)
└── ARCHITECTURE.md
```

## Logic

1. **SSR Data Fetch**: `+page.server.js` loads catalog from Google Apps Script API
2. **CSR UI**: `+page.svelte` renders ProductCard grid with reactive filtering/sorting
3. **State Management**:
   - `cart.js` – shopping cart (add/remove/update)
   - `ui.js` – search state (searchOpen, searchQuery)
   - `catalog.js` – cached product data fetch
4. **Flow**: GAS API → SSR load → reactive stores → filtered UI → cart ops

## Design Issues (Identified)

1. **Low contrast** between cards (`#1f2c34`) and background (`#111b21`)
2. **Insufficient bottom padding** for fixed TopBar (`pb-20` vs `min-h-[60px]`)
3. **Tight grid spacing** (`gap-2`) on mobile
4. **Missing visual separation** – no borders/shadows between items
5. **Subtle hover states** (`#1f2c34` → `#2a3942`) hard to perceive
6. **No image fallback** – empty `product.media` shows dark bg only
7. **Truncated text** may hide key info on mobile
8. **Low-contrast text** (`#8696a0` on dark backgrounds)
9. **Suboptimal responsive breakpoints** – 2 cols on tablets may waste space
10. **Minimal interaction feedback** – buttons lack clear visual feedback

## Todo

- [x] **Init** – Project scaffolding, deps, config
- [~] **UI** – Core comps built, design issues present
- [x] **Logic** – Stores, API integration, data flow
- [ ] **Deploy** – Build, test, deploy to Vercel
- [ ] **Design Fix** – Address contrast, spacing, feedback issues