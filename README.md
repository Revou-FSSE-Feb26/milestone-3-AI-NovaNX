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

RevoShop is a single‑vendor storefront that lets visitors browse a product
catalog, open a product detail page, add items to a cart, claim promotion
vouchers, and read FAQ / About content. Authentication is required to complete
checkout, while admin authentication is required for product management.
Product data is pulled from the
[Platzi Fake Store API](https://fakeapi.platzi.com/), with an optional in-memory
mock source available from the Admin dashboard. Cart and voucher state are
persisted in `localStorage` so the shopping experience survives page reloads.

The project is intentionally implemented with reusable UI primitives
(`shadcn/ui`) and small `lib/` helpers so the codebase stays easy to read and
extend.

## Features

- **Authentication (`/login`)** — login is handled through internal API Route
  Handlers backed by the Platzi Fake Store API. The server stores the access
  token and user profile in a secure HttpOnly session cookie. A safe profile
  snapshot is also stored in `localStorage` for reactive client-side UI state.
- **Protected Routes** — `src/proxy.js` redirects unauthenticated checkout and
  admin visitors to `/login`, and restricts `/admin` to the `admin` role.
- **Product Listing (Home)** — responsive grid, category sidebar filter,
  search via the `?search=` query param, loading skeleton, error handling, and
  empty states.
- **Product Detail (Dynamic Route)** — `/products/[id]` page with image,
  description, category, price, and Add‑to‑Cart action. Product data is fetched
  client-side with `useEffect()` and the Fetch API through `src/lib/api.js`,
  with loading skeleton, error, and not-found states.
- **Cart Page** — React Context-powered quantity controls, line totals,
  free‑shipping progress, voucher application, persistent storage, and a
  checkout button. A hydration skeleton is displayed while the stored cart is
  restored from `localStorage`.
- **Checkout Page (`/checkout`)** — protected checkout route with order items,
  shipping details, React Hook Form validation, payment form, final summary,
  and order confirmation flow.
- **Promotions Page** — voucher catalog with category tabs, claim flow that
  writes the voucher to `localStorage` and redirects to the cart.
- **FAQ Page** — static-prerendered FAQ with a searchable, category-tabbed
  client interface. A footer timestamp records when the static page was
  generated during the production build.
- **About Page** — project overview, tech stack, and portfolio highlights,
  implemented as a static Server Component.
- **Sticky Navbar** — site search, navigation links, live cart badge
  connected to the global Cart Context, authentication-aware navigation, and a
  mobile sheet menu.
- **Admin Dashboard (`/admin`)** — product management page for viewing,
  searching, adding, editing, and deleting products. Admins can switch between
  the Platzi API and an in-memory mock source. Includes role-based access
  control, React Hook Form validation, server-side payload validation,
  success/error feedback, loading skeletons, and manual data reload.
- **Secure Product API Routes** — internal Route Handlers implement product
  `GET`, `POST`, `PUT`, and `DELETE`. Mutating requests verify the current
  Platzi admin token, validate request payloads, and return appropriate HTTP
  error responses.
- **Auth API Routes** — `/api/auth/login`, `/api/auth/me`, and
  `/api/auth/logout` handle token login, profile validation, session lookup,
  and cookie cleanup.

## Tech Stack

| Layer         | Tools                                                                    |
| ------------- | ------------------------------------------------------------------------ |
| Framework     | Next.js 16 (App Router)                                                  |
| Language      | JavaScript (JSX) + React 19                                              |
| Styling       | Tailwind CSS v4                                                          |
| UI Primitives | shadcn/ui, Radix UI, lucide‑react icons                                  |
| Forms         | React Hook Form                                                          |
| Data          | Platzi Fake Store API (`api.escuelajs.co`)                               |
| Auth          | Next.js Route Handlers, Platzi Auth, HTTP-only cookies                   |
| State         | React Context, `useReducer`, `useEffect`, `useMemo`, `useCallback`        |
| Persistence   | `localStorage` for cart, vouchers, auth UI snapshot, and source choice   |
| Tooling       | ESLint, Bun (or npm)                                                     |

## Project Structure

```
revoshop/
├── public/                  # static assets
└── src/
    ├── app/                 # Next.js App Router pages
    │   ├── layout.js        # root layout + global Navbar
    │   ├── page.tsx         # Home (product listing)
    │   ├── about/page.jsx
    │   ├── admin/page.jsx           # admin product CRUD dashboard
    │   ├── api/auth/login/route.js  # login API route
    │   ├── api/auth/logout/route.js # logout API route
    │   ├── api/auth/me/route.js     # current-session user route
    │   ├── api/products/route.js    # product GET + POST
    │   ├── api/products/[id]/route.js # product GET + PUT + DELETE
    │   ├── cart/page.jsx
    │   ├── checkout/page.jsx        # protected checkout page
    │   ├── faq/page.jsx              # static FAQ server wrapper + timestamp
    │   ├── faq/FaqContent.jsx        # interactive FAQ client component
    │   ├── login/page.jsx           # Platzi authentication form
    │   ├── products/[id]/page.jsx   # dynamic product detail
    │   └── promotion/page.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── AddToCartButton.jsx
    │   └── ui/              # shadcn/ui primitives
    ├── context/
    │   └── CartContext.jsx  # global cart and voucher state
    ├── lib/
    │   ├── api.js           # client data-access helpers + mock source
    │   ├── auth.js          # auth helpers + localStorage session snapshot
    │   ├── auth-constants.js
    │   ├── cart.js          # cart storage keys + helpers
    │   ├── fetch-with-retry.js # shared retry helper for Platzi READ requests
    │   ├── product-validation.js # server product payload validation
    │   ├── session.js       # session parsing + admin token verification
    │   └── utils.js         # cn(), cleanImageUrl(), formatCurrency()
    └── proxy.js             # protected-route proxy
```

## Routing & Navigation

- File‑based routing under `src/app/`.
- Login route: `src/app/login/page.jsx` submits credentials to
  `src/app/api/auth/login/route.js`.
- `/checkout` and `/admin` are protected by `src/proxy.js`. The proxy redirects
  unauthenticated visitors to `/login` and redirects non-admin users away from
  `/admin`.
- Dynamic route: `src/app/products/[id]/page.jsx` reads the `id` with
  `useParams()` from `next/navigation`, then fetches the matching product in
  `useEffect()`.
- Internal page navigation uses `<Link>` from `next/link` in cards, pages, and
  navbar entries, while same-page section jumps use a normal anchor.
- The Home page reads the `?search=` query string with `useSearchParams()`
  (wrapped in `<Suspense>` to satisfy the App Router rules).
- When there is no session cookie, protected pages redirect the visitor to
  `/login`. After a successful login, the user is redirected back to Home.

## Rendering Strategy

The production build output uses `○` for static prerendered routes and `ƒ` for
routes evaluated on demand:

| Route | Rendering model |
| ----- | --------------- |
| `/about` | SSG / static Server Component |
| `/faq` | SSG + client hydration |
| `/promotion` | SSG + client hydration |
| `/cart` | SSG shell + client hydration + `localStorage` |
| `/` | SSG shell + client hydration + client-side product fetch |
| `/admin` | SSG shell + client hydration + protected client-side fetch |
| `/checkout` | SSG shell + client hydration, protected by proxy |
| `/login` | SSG shell + client hydration |
| `/products/[id]` | Dynamic route shell + client-side product fetch |
| `/api/*` | Dynamic Route Handlers that return JSON, not HTML pages |

`"use client"` does not automatically mean pure CSR. Next.js can still
prerender the initial HTML during the build and then hydrate the page in the
browser to enable state, events, Context, Tabs, Sheets, and other interactions.

The FAQ demonstrates this split explicitly:

- `faq/page.jsx` is a static Server Component that creates `generatedAt` during
  the production build.
- `faq/FaqContent.jsx` is a Client Component that handles search, tabs,
  accordion interactions, and displays the build timestamp in the footer.
- Closing or reopening the browser does not change the timestamp; it changes
  only after a new production build or deployment.

The current project does not use ISR or a full SSR page. Product Detail remains
client-fetched because the selected Platzi/Mock source is stored in browser
`localStorage`. If it is later converted to ISR, Platzi should become the
server-side primary source and file-based Mock data should be the fallback.

## Data Fetching & Loading Experience

- The Home page loads products client-side in `useEffect()` through
  `getProducts()`, which uses the Fetch API. It handles loading, API errors,
  empty results, and invalid response shapes.
- The dynamic product detail page uses `useParams()` to read the product ID,
  then calls `getProductById(id)` inside `useEffect()`. It provides dedicated
  loading, error, and product-not-found states.
- The Admin page fetches products and categories in `useEffect()` with
  `Promise.all()`, and manages loading and API errors through React state.
- Product requests use `src/lib/api.js`: Platzi mode calls internal Next.js
  Product API Routes, while Mock mode reads and mutates an in-memory store.
- Platzi READ requests use a shared retry helper: the initial request is
  followed by up to two retries with a short increasing delay. If all attempts
  fail, product lists, product details, and categories fall back to Mock data;
  an error is shown only when neither source is available.
- Fetching effects on Home, Product Detail, Login, Navbar, and Admin use
  `AbortController` cleanup so obsolete requests are cancelled when a
  component unmounts or its fetching dependency changes.
- Loading skeletons mirror the final page layouts on Home, Product Detail,
  Cart, and Admin to reduce layout shifts and provide clearer visual feedback.
- Home also uses the same skeleton as its `<Suspense>` fallback while
  `useSearchParams()` is being resolved.

### Team Leader Feedback Improvements

- **Request cancellation** — fetch operations started by React effects receive
  an `AbortSignal`. Their cleanup functions call `controller.abort()` when the
  component unmounts or the dependency changes, preventing obsolete responses
  from updating state.
- **Universal retry** — `src/lib/fetch-with-retry.js` performs one initial
  Platzi READ request plus a maximum of two retries, waiting 500 ms and then
  1 second between attempts.
- **Mock fallback** — after every Platzi READ attempt fails, product lists,
  product details, and categories use their corresponding Mock data. The UI
  shows an error only when both Platzi and Mock data are unavailable.
- **Safe retry scope** — automatic retry is intentionally limited to READ
  requests. Create, update, delete, login, and checkout actions are not retried
  automatically to avoid duplicate mutations or submissions.

## Login Accounts

This project uses the Platzi Fake Store API for user authentication. The login
Route Handler calls `POST /auth/login`, fetches the authenticated user through
`GET /auth/profile`, then stores the access token and safe user profile in an
HTTP-only cookie named `session`. `GET /api/auth/me` reads the current session
user for client-side authentication state. Product mutation routes separately
verify the stored token against the Platzi profile endpoint before permitting
admin actions. A safe profile snapshot is also stored in `localStorage` under
`revoshop-auth-session` for reactive client-side role UI.

| RevoShop access | Platzi role | Normalized role |
| --------------- | ----------- | --------------- |
| Admin           | `admin`     | `admin`         |
| Customer        | `customer` or any non-admin role | `user` |

Only the normalized `admin` role can access `/admin`; all non-admin Platzi
roles are treated as `user` and redirected to the storefront.

Demo credentials verified against the Platzi API:

| Access | Email | Password |
| ------ | ----- | -------- |
| Admin | `admin@mail.com` | `admin123` |
| User | `john@mail.com` | `changeme` |

## Protected Checkout

The checkout flow is split from the cart:

| Route       | Purpose                                      | Access                         |
| ----------- | -------------------------------------------- | ------------------------------ |
| `/cart`     | Review items, quantities, vouchers, summary  | Public                         |
| `/checkout` | Enter shipping/payment details, place order  | Authenticated users only       |
| `/admin`    | Product management                           | Admin role only                |

Opening `/checkout` without a valid `session` cookie redirects to
`/login`. Completing checkout clears cart and voucher data from `localStorage`.

## Admin Dashboard

The `/admin` route provides a complete product-management workflow:

| Action | Client helper | Internal API Route | UI update |
| ------ | ------------- | ------------------ | --------- |
| List   | `getProducts()` | `GET /api/products` | Replaces the product list |
| Create | `createProduct()` | `POST /api/products` | Prepends the created product |
| Update | `updateProduct()` | `PUT /api/products/[id]` | Replaces the matching product |
| Delete | `deleteProduct()` | `DELETE /api/products/[id]` | Removes the matching product |

The Product Data Source selector supports:

- **Platzi mode** — product CRUD goes through internal Next.js API Routes,
  which forward requests to the Platzi Fake Store API.
- **Mock mode** — CRUD operates on an in-memory copy of local mock products.
  Mock changes last for the current browser runtime and reset after a full
  application reload or server restart.

The selected source is stored under `revoshop:product-data-source`, so the
dashboard remembers whether Platzi or Mock was selected. Changing the source
automatically reloads products and categories; **Reload Data** manually fetches
the currently selected source again.

Add and Edit forms use separate React Hook Form instances so their field values
and validation errors do not overlap. Validation runs both in the browser and
again in the Product API Routes. `POST`, `PUT`, and `DELETE` also verify that
the session belongs to a valid Platzi admin before forwarding the request.
Upstream API failures are returned with appropriate HTTP status codes and
displayed as form or dashboard feedback.

Because Platzi is a shared fake API, mutation responses are reflected
immediately in the current Admin UI but should not be treated as permanent
production database storage.

## State Management

- `CartProvider` and `useCart()` provide global cart and voucher state to the
  Navbar, product detail, promotions, cart, and checkout pages.
- A reducer handles explicit cart actions such as `ADD_ITEM`, `REMOVE_ITEM`,
  `UPDATE_QUANTITY`, `CLEAR_CART`, voucher actions, and checkout cleanup.
- Cart actions include add, update quantity, remove, clear, apply/remove
  voucher, and clear checkout.
- The add-to-cart notification is also managed by the Context and clears
  automatically after two seconds.
- The Context persists its state in `localStorage` and listens to the native
  `storage` event to synchronize changes between browser tabs.
- The Context exposes a `hydrated` state so the Cart page can display a
  skeleton until stored cart and voucher data has finished loading, avoiding a
  temporary and incorrect empty-cart screen.
- `useMemo` and memoized Context actions reduce unnecessary calculations and
  avoid recreating action functions on each render.
- Product search results on Home and Admin are memoized and only recalculated
  when their product, query, or category dependencies change.
- All cart and voucher storage keys live in [`src/lib/cart.js`](revoshop/src/lib/cart.js).

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
| `bun run dev`   | Start the Next.js dev server with Bun |
| `npm run build` | Production build             |
| `npm run start` | Run the production server    |
| `npm run lint`  | Lint with ESLint             |

## Deployment

The project is deployed on [Vercel](https://vercel.com/) at
<https://revoshop.ai-novanx.online/>. The Vercel project root is `revoshop/`,
and the image domains used by the Platzi API are whitelisted in
`revoshop/next.config.mjs`.

## Screenshots / Demo

### Login

![Login](revoshop/src/assets/Login.png)

### Home

![Home](revoshop/src/assets/Home.png)

### Product Detail

![Product Detail](revoshop/src/assets/ProductDetail.png)

### Cart

![Cart](revoshop/src/assets/Cart.png)

### Checkout

Checkout is available at `/checkout` after login.

### Promotions

![Promotions](revoshop/src/assets/Promotion.png)

### Product Management (Admin Page)

![Product Management Admin Page](revoshop/src/assets/Admin.png)


## Acknowledgements

- [Platzi Fake Store API](https://fakeapi.platzi.com/) — product data.
- [shadcn/ui](https://ui.shadcn.com/) — accessible component primitives.
