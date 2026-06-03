[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/FR3B1BQd)

# RevoShop — Milestone 3 (Next.js E‑Commerce)

RevoShop is a Next.js e‑commerce demo built for RevoU FSSE Milestone 3.
It demonstrates the Next.js App Router, file‑based routing, dynamic routes,
client‑side navigation, component composition, and React state management
through a small but realistic shopping experience.

> Live Demo: https://revoshop.ai-novanx.online/
> Source Code: <https://github.com/Revou-FSSE-Feb26/milestone-3-AI-NovaNX>

---

## Overview

RevoShop is a single‑vendor storefront that lets a logged-in visitor browse a product
catalog, open a product detail page, add items to a cart, claim promotion
vouchers, and read FAQ / About content. Product data is pulled from the
[Platzi Fake Store API](https://fakeapi.platzi.com/) and the cart state is
persisted in `localStorage` so the experience survives page reloads.

The project is intentionally implemented with reusable UI primitives
(`shadcn/ui`) and small `lib/` helpers so the codebase stays easy to read and
extend.

## Features

- **Local Login (`/login`)** — simple private routing with `localStorage`,
  user/admin role sessions, invalid-login feedback, and automatic redirect
  from Home to Login when no session exists.
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
- **Admin Dashboard (`/admin`)** — full product CRUD against the Platzi
  Fake Store API: list all products in a responsive card grid, search,
  create a new product via a side sheet form (title, price, category,
  description, image URLs), edit any product in the same sheet, and
  delete with an `AlertDialog` confirmation. Includes role-based access
  control, loading, validation, and success/error feedback states.

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
    │   ├── admin/page.jsx           # admin product CRUD dashboard
    │   ├── cart/page.jsx
    │   ├── faq/page.jsx
    │   ├── login/page.jsx           # localStorage-based login page
    │   ├── products/[id]/page.jsx   # dynamic product detail
    │   └── promotion/page.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── AddToCartButton.jsx
    │   └── ui/              # shadcn/ui primitives
    └── lib/
        ├── api.js           # Platzi API client (GET/POST/PUT/DELETE)
        ├── auth.js          # login credentials + localStorage auth session
        ├── cart.js          # cart storage keys + helpers
        └── utils.js         # cn(), cleanImageUrl(), formatCurrency()
```

## Routing & Navigation

- File‑based routing under `src/app/`.
- Login route: `src/app/login/page.jsx` validates fixed user/admin
  credentials and stores the session in `localStorage`.
- Dynamic route: `src/app/products/[id]/page.jsx` reads the `id` with
  `useParams()` from `next/navigation`.
- Client‑side navigation via `<Link>` from `next/link` in every page,
  card, and navbar entry — no full page reloads.
- The Home page reads the `?search=` query string with `useSearchParams()`
  (wrapped in `<Suspense>` to satisfy the App Router rules).
- When there is no local auth session, opening Home redirects the visitor to
  `/login`. After a successful login, the user is redirected back to Home.

## Login Accounts

This project uses a simple local login flow for assignment purposes. No API,
JWT, or backend token is used; the authenticated session is stored in
`localStorage` under the key `revoshop-auth-session`.

| Role  | Email               | Password   | Access                                      |
| ----- | ------------------- | ---------- | ------------------------------------------- |
| User  | `user@example.com`  | `user123`  | Can use the storefront, cart, and vouchers  |
| Admin | `admin@example.com` | `admin123` | Can access the storefront and `/admin` CRUD |

If a logged-in user account opens `/admin`, the app shows an Admin-only access
card. Invalid login credentials show a rejection card on the login page.

## Admin Dashboard

The `/admin` route provides product management with a **localStorage
override layer** on top of the Platzi Fake Store API. Because the Platzi
API is a shared sandbox, the override layer makes every change persist
locally in the browser:

| Action | Trigger             | Persistence Behavior                                                        |
| ------ | ------------------- | --------------------------------------------------------------------------- |
| List   | Page load + Refresh | `GET /products` + `GET /categories`, then deletes filtered & updates merged |
| Create | "Add Product" sheet | New product stored locally with id `local-<timestamp>`, prepended to list   |
| Update | Per‑card "Edit"     | Patch saved in `localStorage`; merged on top of remote product on read      |
| Delete | Per‑card "Delete"   | Remote id added to a `deleted` set; locally created products removed        |
| Reset  | "Reset local data"  | Clears all overrides — list falls back to pure API data                     |

All overrides live under the key `revoshop:product-overrides` and follow
the shape `{ created: Product[], updated: Record<id, Patch>, deleted: number[] }`.
Categories are cached under `revoshop:categories-cache` so locally
created/updated products can resolve their category object without
re‑fetching. A `products-updated` custom event is dispatched whenever
overrides change so the dashboard summary stays live.

This layering means the dashboard behaves like a real CRUD admin — your
changes survive page reloads — while still demonstrating the full Platzi
API surface (`GET / POST / PUT / DELETE /products`) through the
`request()` helper in [`src/lib/api.js`](revoshop/src/lib/api.js).

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
