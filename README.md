# React + Vite

## Complaint email configuration

Complaint submissions are handled by the Cloudflare Worker in `worker/index.js`, which routes `/api/complaints` to the SMTP handler in `functions/api/complaints.js`.

Deploy the full Worker and its static assets with:

```bash
npm run deploy
```

After the first Worker-backed deployment, open the Worker in the Cloudflare dashboard and add these values under **Settings > Variables and Secrets**:

- `SMTP_USER`: Gmail address used to send complaints
- `SMTP_PASS`: Google app password for the sending account
- `COMPLAINT_EMAIL_TO`: Address that receives complaint submissions

Use `.env.example` as the local configuration template. Never commit a real SMTP password.

The Worker configuration in `wrangler.jsonc` sets the required compatibility date, serves the Vite build from `dist`, preserves SPA routing, and sends only `/api/*` requests through Worker code. Uploading only the `dist` directory creates a static-only Worker and will not support secrets or complaint submission.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
