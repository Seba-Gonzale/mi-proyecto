## Stack

- **SvelteKit**: v2.50.2 (Runes mode enabled)
- **Svelte**: v5.54.0
- **Tailwind CSS**: v4.1.18 (via @tailwindcss/vite)
- **JS/Node**: ES2022+, Node (latest LTS)
- **Adapter**: @sveltejs/adapter-vercel (SSR/SSG hybrid)

## Tree

```
mi-proyecto/
├── src/
│   ├── lib/
│   │   ├── assets/     # static assets (images, fonts)
│   │   ├── components/ # reusable UI comps (PascalCase)
│   │   ├── stores/     # global state (writable/derived)
│   │   └── utils/      # pure functions, helpers
│   └── routes/         # +page.svelte, +layout.svelte
├── static/             # public assets
└── ARCHITECTURE.md     # this file
```

## Logic

1. **CSR** (Client‑Side Rendering) for dynamic UI
2. **Svelte Stores** (`$:`, runes, custom stores) manage app state
3. **Google Apps Script API** for backend data ops
   - Fetch from GAS endpoints via `fetch` in `+page.ts` load()
   - Store responses in reactive state
   - Handle auth via URL params or API keys

## Todo

- [ ] **Init** – Project scaffolding, deps, config
- [ ] **UI** – Core comps, layout, Tailwind theme
- [ ] **Logic** – Stores, API integration, data flow
- [ ] **Deploy** – Build, test, deploy to Vercel