# TMS Website

Marketing site for **TMS — Technology for Manufacturing Solutions**, Egypt's industrial
steel & stainless-steel manufacturing partner. Bilingual (English / Arabic RTL).

Built with **React 18 + Vite + React Router**. Contact form sends email via **EmailJS**.

---

## Quick start

```bash
npm ci          # install exact locked dependencies (use this, not `npm install`)
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

Requires **Node 20+** (pinned in `.nvmrc` to 22). If you use nvm: `nvm use`.

---

## Environment variables (contact form)

The contact form reads EmailJS settings from environment variables — **no secrets are
committed**. Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | What it is |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS email service ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key (safe to expose in browser) |
| `VITE_EMAILJS_TEMPLATE_ID` | Template for the **team notification** email |
| `VITE_EMAILJS_TO_EMAIL` | Inbox that receives notifications (its template's To Email = `{{to_email}}`) |
| `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` | Template for the **customer thank-you** auto-reply (To Email = `{{email}}`) |

> Only the EmailJS **public key** is used client-side — it is designed to be public.
> Never add a private key or any mailbox password. `.env` is gitignored.

On Vercel, add these same variables under **Project → Settings → Environment Variables**
(re-add on Vercel; the local `.env` is not uploaded).

---

## Deployment (Vercel, auto-deploy on push)

One-time setup:

1. Go to <https://vercel.com/new> and **Import** this GitHub repo.
2. Framework preset is auto-detected as **Vite** (build `npm run build`, output `dist`).
   `vercel.json` already pins these.
3. Add the environment variables from the table above.
4. Deploy.

After that, **every push to `main` auto-deploys to production**, and every pull request
gets its own **preview URL**.

`vercel.json` handles two important things:
- **SPA routing** — all paths rewrite to `index.html` so React Router routes like
  `/contact` don't 404 on refresh/direct-load.
- **Cache strategy** — content-hashed assets are cached immutably for a year, while HTML
  is never cached, so visitors always get the latest build with no stale-cache breakage.

---

## Monitoring, errors & rollback

- **Build breakage** — GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci && npm run build`
  on every push and PR. A red ✗ pinpoints the commit that broke the build before it deploys.
- **Runtime errors** — a React `ErrorBoundary` (`src/components/ErrorBoundary.jsx`) catches
  render errors and shows a recoverable "Reload page" screen instead of a blank page. Errors
  are logged to the console and to Vercel's runtime logs. (An optional Sentry hook is marked
  in that file.)
- **Roll back a bad deploy** — in Vercel, open **Deployments**, find the last good one, and
  click **⋯ → Promote to Production** (instant rollback). Every deploy is kept, so you can
  always return to a known-good version. In git, `git revert <sha>` + push does the same.
- **Cache refresh** — handled automatically by the headers above. An optional scheduled
  redeploy (`.github/workflows/scheduled-redeploy.yml`) can force a periodic clean rebuild;
  see that file's header to enable it with a Vercel deploy hook.

---

## Security

This is a **static site** — there is no server, database, admin panel, or user login to
break into. The attack surface is the browser delivery and the public contact form, and
both are hardened:

**HTTP security headers** (`vercel.json`, applied to every response):
- **Content-Security-Policy** — locks resource loading to this origin only. Scripts run
  from `'self'` (no inline scripts), the form may talk only to `https://api.emailjs.com`,
  and `frame-ancestors 'none'` blocks clickjacking.
- **Strict-Transport-Security (HSTS)** — forces HTTPS for a year.
- **X-Content-Type-Options: nosniff**, **X-Frame-Options: DENY**,
  **Referrer-Policy: strict-origin-when-cross-origin**,
  **Permissions-Policy** (camera/mic/geolocation/payment disabled),
  **Cross-Origin-Opener-Policy: same-origin**.

> After the first deploy, open DevTools → Console and confirm there are **no CSP violation
> warnings**. If you later add a new external resource (analytics, a map embed, a CDN font),
> you must add its domain to the matching CSP directive in `vercel.json` or it will be blocked.

**Contact form abuse protection:**
- A **honeypot** field silently rejects bots.
- A **submit throttle** blocks rapid repeat sends.
- The EmailJS **public key is the only exposed credential and is safe by design** — it can
  only trigger your specific template, never read your account.

**Required EmailJS dashboard hardening** (do these — code can't set them):
1. **Account → Security → Allow list**: add your production domain(s) so the public key only
   works from your site, not from someone else's page.
2. **Template → enable reCAPTCHA** (or EmailJS's built-in bot check) to stop automated sends.
3. Set/confirm the account **rate limit** so a flood of requests is capped.

**Dependencies:**
- `package-lock.json` pins exact versions; CI installs with `npm ci` (no drift).
- **Dependabot** (`.github/dependabot.yml`) opens PRs for vulnerable/outdated packages weekly.
- The current `npm audit` warnings are **dev-only** (esbuild/vite dev server) and do **not**
  affect the deployed static files.

**Secrets:** none are committed. `.env` is gitignored; on Vercel the values live in
Environment Variables. Never commit a private key or mailbox password.

---

## Project structure

```
src/
  pages/        Home, About, Products, ProductDetail, Projects, ProjectCategory,
                Services, Sectors, Quality, News, Contact
  components/   Header, Footer, Utbar, FloatingActions, Logo, PageLoader,
                ErrorBoundary, ui (shared)
  data/         content.js (EN), content_ar.js (AR), galleries.js
  i18n.jsx      language provider / RTL switching
  emailjs.config.js   reads EmailJS env vars
public/gallery/ product photos by category
```
