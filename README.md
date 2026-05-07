# Project README

## 1) What this project is

- **Type**: Full-stack e-commerce style web app (electronics catalog)
- **Frontend**: Next.js (App Router) + React + TypeScript
- **Backend**: Convex (database + serverless functions) + Convex Auth
- **UI/Styling**: Tailwind CSS + Radix UI component primitives
- **Extra**: Optional AI-assisted search via Google Gemini (server-side API route)

## 2) Main features (point-by-point)

- **Product browsing**: list + product detail pages (data is currently in `lib/products.ts`)
- **Search**:
  - **Local “intelligent” search** scoring (see `lib/ai-utils.ts`)
  - **Optional Gemini query expansion** endpoint at `app/api/gemini/search/route.ts`
- **Cart**: add/update items and persist per user in Convex (`convex/cart.ts`, `cartItems` table)
- **Wishlist**: save products per user in Convex (`convex/wishlist.ts`, `wishlist` table)
- **Orders**: create & view orders in Convex (`convex/orders.ts`, `orders` table)
- **Authentication**: Convex Auth with password provider + middleware-protected routes
  - Protected routes: `/account/*`, `/checkout/*` (see `middleware.ts`)
- **Account area**: profile, orders, wishlist (`app/account/*`)

## 3) Tech stack (exactly what’s in the repo)

- **Next.js**: `next@16.2.4`
- **React**: `react@^19`
- **Convex**: `convex@^1.37.0`
- **Auth**: `@convex-dev/auth@^0.0.92`
- **UI libs**: Radix UI, `lucide-react`, `sonner`, `react-hook-form`, `zod`
- **Analytics**: `@vercel/analytics`

## 4) Database used

- **Database**: **Convex database** (cloud-hosted, transactional document database)
- **Schema location**: `convex/schema.ts`
- **Tables used**:
  - **Auth tables** (from `@convex-dev/auth/server`): `users`, `authSessions`, `authAccounts`, `authVerificationCodes`, `authRateLimits`
  - **App tables**: `cartItems`, `wishlist`, `orders`

## 5) Where it’s deployed / what you used for deployment

### Backend (DB + functions)

- **Host**: **Convex Cloud**
- **Deployment identifier (from your local env)**: `watchful-jay-493` (see `.env.local`)
- **Convex URL format**: `https://<deployment>.convex.cloud`

### Frontend (Next.js)

- **Intended host**: typically **Vercel** for Next.js (the repo includes `@vercel/analytics`)
- **Repo note**: there is **no** `vercel.json` / `netlify.toml` / `Dockerfile` committed, so the exact frontend host URL isn’t encoded in this repo.
- **What to record in README when you deploy**:
  - **Production site URL** (e.g. `https://your-app.vercel.app`)
  - Ensure environment variables are set in the hosting dashboard (see section 7).

## 6) Project structure (clear file-by-file map)

```text
task/
  app/                          # Next.js App Router routes
    api/
      gemini/
        search/
          route.ts              # GET /api/gemini/search?q=... (Gemini query expansion)
    about/page.tsx
    account/
      page.tsx                  # Account overview
      orders/page.tsx
      profile/page.tsx
      wishlist/page.tsx
    cart/page.tsx
    checkout/page.tsx
    contact/
      page.tsx
      contact-form.tsx
    deals/page.tsx
    login/page.tsx
    products/
      page.tsx                  # Product listing
      [id]/
        page.tsx                # Product details route
        product-detail-client.tsx
    register/page.tsx
    search/page.tsx
    globals.css                 # App-level styles
    layout.tsx                  # Root layout
    page.tsx                    # Home page

  components/                   # Shared UI + feature components
    ui/                         # Reusable UI components (Radix-based)
    header.tsx
    footer.tsx
    hero-section.tsx
    categories.tsx
    product-card.tsx
    featured-products.tsx
    product-recommendations.tsx
    ai-recommendations.tsx
    convex-client-provider.tsx  # Convex client provider wrapper
    theme-provider.tsx
    back-to-top.tsx

  convex/                       # Convex backend (DB schema + functions)
    _generated/                 # Convex generated types + API refs (do not edit)
    schema.ts                   # DB schema (tables + indexes)
    auth.ts                     # Convex Auth (Password provider) + user creation callback
    auth.config.ts              # JWT provider config for Convex auth integration
    http.ts                     # HTTP router (auth routes)
    cart.ts                     # cart mutations/queries
    wishlist.ts                 # wishlist mutations/queries
    orders.ts                   # orders mutations/queries
    users.ts                    # user-related functions
    tsconfig.json

  lib/                          # App-level utilities & client logic
    products.ts                 # Product catalog data + types
    ai-utils.ts                 # Search + recommendations helpers
    cart-context.tsx
    auth-context.tsx
    utils.ts

  hooks/                        # Shared React hooks
    use-mobile.ts
    use-toast.ts

  public/                       # Static assets
  styles/                       # Extra global styling

  middleware.ts                 # Route protection via Convex Auth middleware
  next.config.mjs
  postcss.config.mjs
  tsconfig.json
  package.json
  pnpm-lock.yaml
  .env.local.example            # Env template (copy -> .env.local)
  .gitignore
```

## 7) Environment variables (what to set)

Do **not** commit real secrets. Use `.env.local` for local dev and set the same values in your hosting provider’s env settings.

- **`NEXT_PUBLIC_CONVEX_URL`**: Convex deployment URL (public)
  - Example: `https://<your-deployment>.convex.cloud`
- **`CONVEX_AUTH_SECRET`**: Convex Auth secret (private)
- **`CONVEX_SITE_URL`**: issuer/domain used by Convex Auth configuration (`convex/auth.config.ts`)
  - Example: `https://<your-deployment>.convex.site` (or your configured issuer domain)
- **`NEXT_PUBLIC_CONVEX_SITE_URL`** (optional, public): some setups store the same site URL for client usage
- **`GEMINI_API_KEY`** (optional, private): enables Gemini query expansion endpoint

Template is provided in `.env.local.example`.

## 8) How to run locally (point-by-point)

1. **Install dependencies**

```bash
pnpm install
```

2. **Create env file**
   - Copy `.env.local.example` → `.env.local`
   - Fill values (at minimum `NEXT_PUBLIC_CONVEX_URL`, `CONVEX_AUTH_SECRET`, `CONVEX_SITE_URL`)

3. **Start Convex (backend)**

```bash
npx convex dev
```

4. **Start Next.js (frontend)**

```bash
pnpm dev
```

5. Open **`http://localhost:3000`**

## 9) Deployment checklist (recommended)

- **Convex**
  - Create/select a production deployment in the Convex dashboard
  - Set `CONVEX_AUTH_SECRET` and any other required env vars in Convex
- **Next.js hosting (e.g. Vercel)**
  - Set environment variables in the hosting dashboard
  - Deploy the repo
  - Verify protected routes (`/account`, `/checkout`) redirect to `/login` when logged out

## 10) Notes / gotchas

- **Secrets**: never paste real API keys or auth secrets into the README.
- **Generated code**: don’t edit `convex/_generated/*` manually.

