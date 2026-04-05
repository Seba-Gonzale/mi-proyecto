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
│   │   ├── components/      # UI comps (Cart, CatalogHeader, ProductCard, SearchBar, SortBar, TopBar)
│   │   ├── stores/          # global state (cart.js, ui.js, catalog.js)
│   │   └── index.js
│   ├── routes/
│   │   ├── api/             # API endpoints
│   │   ├── producto/        # product detail pages
│   │   ├── +layout.svelte   # root layout with fixed TopBar
│   │   ├── +page.svelte     # main catalog page (grid, filtering, sorting)
│   │   └── +page.server.js  # SSR data load from Google Apps Script
│   ├── app.css              # global Tailwind + body bg (#111b21)
│   └── app.d.ts
├── static/                  # public assets (portada_1200x400.webp)
├── .vercel/                 # Vercel deployment config (empty)
└── ARCHITECTURE.md
```

## Logic

1. **SSR Data Fetch**: `+page.server.js` loads catalog from Google Apps Script API (POST to GAS endpoint)
2. **CSR UI**: `+page.svelte` renders ProductCard grid with reactive filtering/sorting based on searchQuery and sort state
3. **State Management**:
   - `cart.js` – shopping cart (add/remove/update, derived stores for count/total)
   - `ui.js` – search state (searchOpen, searchQuery writable stores)
   - `catalog.js` – cached product data fetch with singleton cache
4. **Flow**: GAS API → SSR load → reactive stores → filtered UI → cart operations → local state persistence (via beforeunload)

## Design Issues (Identified)

1. **Low contrast** between cards (`#1f2c34`) and background (`#111b21`) – minimal visual separation
2. **Insufficient bottom padding** for fixed TopBar (`pb-20` vs `min-h-[60px]`) – content may hide behind bar
3. **Tight grid spacing** (`gap-2`) on mobile – items appear stacked without clear separation
4. **Missing visual separation** – no borders, shadows, or elevation between cards
5. **Subtle hover states** (`#1f2c34` → `#2a3942`) – hard to perceive especially on low‑brightness screens
6. **No image fallback** – empty `product.media` shows only dark bg (`bg-[#2a3942]`), no placeholder
7. **Truncated text** (`truncate` on product names) – may hide key info on mobile with no expand option
8. **Low‑contrast text** (`#8696a0` on dark backgrounds) – difficult to read in low‑light conditions
9. **Suboptimal responsive breakpoints** – `sm:grid‑cols‑2` on tablets may waste lateral space
10. **Minimal interaction feedback** – buttons (cart +/-) lack clear visual feedback (color change only)

## Todo

- [x] **Init** – Project scaffolding, deps, config (package.json, svelte.config.js, vite.config.js)
- [~] **UI** – Core components built (6), layout functional, design issues present
- [x] **Logic** – Stores (cart, ui, catalog), API integration (GAS), reactive data flow
- [ ] **Deploy** – Build, test, deploy to Vercel (adapter configured, .vercel folder empty)
- [ ] **Design Fix** – Address contrast, spacing, feedback issues identified above