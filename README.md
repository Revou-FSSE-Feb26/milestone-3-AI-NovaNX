[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/FR3B1BQd)

# RevoShop — Milestone 3 (Next.js E‑Commerce)

RevoShop is a Next.js e‑commerce demo built for RevoU FSSE Milestone 3.
It demonstrates the Next.js App Router, file‑based routing, dynamic routes,
client‑side navigation, component composition, and React state management
through a small but realistic shopping experience.

> Live Demo: _add your Vercel URL here_
> Source Code: <https://github.com/Revou-FSSE-Feb26/milestone-3-AI-NovaNX>

---

## Overview

RevoShop is a single‑vendor storefront that lets a visitor browse a product
catalog, open a product detail page, add items to a cart, claim promotion
vouchers, and read FAQ / About content. Product data is pulled from the
[Platzi Fake Store API](https://fakeapi.platzi.com/) and the cart state is
persisted in `localStorage` so the experience survives page reloads.

The project is intentionally implemented with reusable UI primitives
(`shadcn/ui`) and small `lib/` helpers so the codebase stays easy to read and
extend.

## Features

- **Product Listing (Home)** — responsive grid, category sidebar filter,
  search via the `?search=` query param, loading and empty states.
- **Product Detail (Dynamic Route)** — `/products/[id]` page with image,
  description, category, price, and Add‑to‑Cart action.
- **Cart Page** — quantity controls, line totals, free‑shipping progress,
  voucher application (product + shipping vouchers), and persistent storage.
- **Promotions Page** — voucher catalog with category tabs, claim flow that
  writes the voucher to `localStorage` and redirects to the cart.
- **FAQ Page** — searchable, category‑tabbed accordion of frequent questions.
- **About Page** — project overview, tech stack, and portfolio highlights.
- **Sticky Navbar** — site search, navigation links, live cart badge
  (updates via a custom `cart-updated` event + the native `storage` event),
  and a mobile sheet menu.

## Tech Stack

| Layer         | Tools                                                                    |
| ------------- | ------------------------------------------------------------------------ |
| Framework     | Next.js 16 (App Router)                                                  |
| Language      | JavaScript (JSX) + React 19                                              |
| Styling       | Tailwind CSS v4                                                          |
| UI Primitives | shadcn/ui, Radix UI, lucide‑react icons                                  |
| Data          | Platzi Fake Store API (`api.escuelajs.co`)                               |
| State         | React `useState` / `useEffect` / `useSyncExternalStore` + `localStorage` |
| Tooling       | ESLint, Bun (or npm)                                                     |

## Project Structure

```
revoshop/
├── public/                  # static assets
└── src/
    ├── app/                 # Next.js App Router pages
    │   ├── layout.js        # root layout + global Navbar
    │   ├── page.js          # Home (product listing)
    │   ├── about/page.jsx
    │   ├── cart/page.jsx
    │   ├── faq/page.jsx
    │   ├── products/[id]/page.jsx   # dynamic product detail
    │   └── promotion/page.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── AddToCartButton.jsx
    │   └── ui/              # shadcn/ui primitives
    └── lib/
        ├── api.js           # Platzi API fetchers
        ├── cart.js          # cart storage keys + helpers
        └── utils.js         # cn(), cleanImageUrl(), formatCurrency()
```

## Routing & Navigation

- File‑based routing under `src/app/`.
- Dynamic route: `src/app/products/[id]/page.jsx` reads the `id` with
  `useParams()` from `next/navigation`.
- Client‑side navigation via `<Link>` from `next/link` in every page,
  card, and navbar entry — no full page reloads.
- The Home page reads the `?search=` query string with `useSearchParams()`
  (wrapped in `<Suspense>` to satisfy the App Router rules).

## State Management

- `useState` + `useEffect` are used for fetching products, search filters,
  category selection, the Add‑to‑Cart success badge, and the cart count.
- The Cart page uses `useSyncExternalStore` so it stays in sync with
  `localStorage` changes coming from other tabs, the Navbar, the
  Add‑to‑Cart button, and the voucher claim flow.
- All cart and voucher storage keys live in [`src/lib/cart.js`](revoshop/src/lib/cart.js)
  so there is a single source of truth.

## Getting Started

Prerequisites: Node.js ≥ 20 (or Bun).

```bash
cd revoshop
npm install        # or: bun install
npm run dev        # or: bun dev
```

Open <http://localhost:3000> in your browser.

### Available Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the Next.js dev server |
| `npm run build` | Production build             |
| `npm run start` | Run the production server    |
| `npm run lint`  | Lint with ESLint             |

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/). Set the
project root to `revoshop/` when importing the repository, then deploy.
The image domains used by the Platzi API are already whitelisted in
`revoshop/next.config.mjs`.

## Screenshots / Demo

> Add screenshots of the Home, Product Detail, Cart, and Promotion pages
> here, or link a short demo video.

- Home: `docs/screenshots/home.png`
- Product Detail: `docs/screenshots/product-detail.png`
- Cart: `docs/screenshots/cart.png`
- Promotions: `docs/screenshots/promotions.png`

## Acknowledgements

- [RevoU FSSE](https://revou.co/) — program & assignment brief.
- [Platzi Fake Store API](https://fakeapi.platzi.com/) — product data.
- [shadcn/ui](https://ui.shadcn.com/) — accessible component primitives.
