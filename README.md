# Dean Student Wellbeing — IIT Kharagpur

A website for the Office of the Dean, Student Wellbeing at IIT Kharagpur. It provides information about campus initiatives, support services, emergency contacts, and resources, along with a complaint form that emails submissions to the configured administration address.

## Development

### Libraries / Frameworks Used

- [React](https://react.dev/) — user interface.
- [Vite](https://vite.dev/) — development server and production frontend build.
- [React Router](https://reactrouter.com/) — page navigation.
- [Motion](https://motion.dev/) — animations.
- [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) — icons.
- [Node.js](https://nodejs.org/) — production HTTP server and complaint API.
- [Nodemailer](https://nodemailer.com/) — server-side SMTP email delivery.
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) — code checks.
- [Docker](https://docs.docker.com/) and Docker Compose — container deployment.

### File Structure

```text
.
├── public/                    # Static images and other public assets
├── src/
│   ├── assets/                # Assets imported by React
│   ├── components/            # Navbar, footer, complaint modal, etc.
│   ├── hooks/                 # Reusable React hooks
│   ├── pages/                 # Home, events, support, contacts, resources
│   ├── App.jsx                # Shared layout and routes
│   ├── main.jsx               # React entry point
│   └── index.css              # Global and responsive styling
├── server/
│   ├── app.js                 # Production static serving and API routing
│   ├── complaints.js          # Shared validation and SMTP delivery
│   └── index.js               # Production server entry point
├── scripts/
│   ├── viteComplaintApi.js    # Complaint API adapter for development
│   └── check-server.test.js   # Server and complaint delivery checks
├── .env.example               # Single configuration template
├── .dockerignore              # Excludes credentials and local files
├── Dockerfile                 # Build and production runtime stages
├── docker-compose.yml         # Website + SMTP backend on port 9500
├── index.html                 # HTML entry point
├── package.json               # Dependencies and commands
├── package-lock.json          # Locked dependency versions
└── vite.config.js             # Development and frontend build settings
```

The production server serves the built React website and `/api/complaints` from the same origin. The frontend never receives SMTP credentials. Complaint content is sent by email; the application does not store it in a database.

### Setting Up Locally

**Prerequisites:** Node.js 24+ and npm. Use Node.js 24 for consistency with Docker.

```bash
git clone https://github.com/HardikChittora/deanswbwebsite2.git
cd deanswbwebsite2
npm ci
cp .env.example .env
```

Edit `.env` with the SMTP credentials and recipient, then start development:

```bash
npm run dev
```

The website and complaint API will be available at **http://localhost:9500**. Restart the server after changing `.env`. If port 9500 is already occupied, stop the existing process before starting another instance.

### Environment Configuration

Keep one local configuration file named `.env`, created from `.env.example`. Both npm and Docker Compose use this file. `.env` is excluded from Git and the Docker build context; Compose injects its values at runtime.

| Variable | Purpose |
| --- | --- |
| `PORT` | Local server port; defaults to `9500`. Compose fixes the container and published port at `9500`. |
| `SMTP_HOST` | SMTP server hostname, for example `smtp.gmail.com`. |
| `SMTP_PORT` | SMTP port, usually `465` for implicit TLS or `587` for STARTTLS. |
| `SMTP_SECURE` | `true` for port 465; `false` for port 587, where STARTTLS is required. |
| `SMTP_USER` | SMTP login username. |
| `SMTP_PASS` | SMTP password or Gmail app password. |
| `SMTP_FROM` | Sender email address; leave blank to use `SMTP_USER`. Must be permitted by the mail server. |
| `COMPLAINT_EMAIL_TO` | One administration email address or a comma-separated list of recipients. |

For Gmail, use an app password associated with the sending account. For the institute, replace these values with the official SMTP settings supplied by its IT team. Quote environment values containing spaces, `#`, or `$` as appropriate. Do not use `VITE_` prefixes for SMTP secrets, since those variables may be included in browser code.

For multiple complaint recipients, set this value in `.env`:

```dotenv
COMPLAINT_EMAIL_TO=first@example.com,second@example.com
```

Whitespace around addresses is ignored and duplicate addresses are removed. Every entry must be a valid email address; use commas as separators and avoid empty entries. All recipients appear in the email's To field. Restart the local server after changing `.env`, or run `docker compose up --build -d --force-recreate` to rebuild the container and reload the configuration.

The website can start without mail credentials, but complaint delivery will return a configuration error until they are supplied. The Docker image itself contains no SMTP credentials.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start React development and the complaint API on port 9500 using `.env`. |
| `npm run build` | Create the production frontend in `dist/`. |
| `npm start` | Serve `dist/` and the SMTP API on port 9500 using `.env` or runtime variables. |
| `npm run preview` | Same production server as `npm start`; build first. |
| `npm run lint` | Run Oxlint checks. |
| `npm test` | Verify production routes and complaint behavior using a simulated mail transport; build first. |

To verify the production build locally:

```bash
npm run build
npm run lint
npm test
npm start
```

## Docker Deployment

**Prerequisites:** Docker Engine or Docker Desktop with the Docker Compose plugin (`docker compose`). No local Node.js installation is required for Docker deployment.

From the repository root, create `.env` if you have not already done so:

```bash
cp .env.example .env
```

Fill in the SMTP settings, then build and start the application:

```bash
docker compose up --build -d
```

Open **http://localhost:9500**. One container serves the website and complaint API. It runs as a non-root user, uses a read-only filesystem, and checks `/api/health` periodically. The health check confirms the HTTP server is available; it does not send mail or verify SMTP credentials.

### Useful Docker Commands

```bash
docker compose ps
docker compose logs -f website
docker compose down
```

After a code change, rebuild:

```bash
docker compose up --build -d
```

After changing `.env`, recreate the container to reload its configuration:

```bash
docker compose up -d --force-recreate
```

### Deploying on the Institute Domain

1. Clone the repository onto the institute's server and install Docker with Compose.
2. Create `.env` from `.env.example` and fill in the official SMTP settings and recipient.
3. Start the application with `docker compose up --build -d`.
4. Configure the institute's HTTPS reverse proxy to forward the official domain to `http://127.0.0.1:9500`. Keep `/api/complaints` on the same domain as the website.
5. Configure the official domain's DNS and HTTPS certificate through the institute's infrastructure team.
6. Submit a clearly labeled test complaint and confirm it arrives at the configured recipient.

The server needs outbound access to the configured SMTP host and port. If the reverse proxy runs on a different machine, use the application server's private address instead of `127.0.0.1`. If only a local reverse proxy should access the app, bind the Compose published port as `127.0.0.1:9500:9500`.

The complaint endpoint is publicly accessible and includes a honeypot and request/field size validation. Configure request rate limits on the institute's reverse proxy before opening public complaint submission.

## Contributing

1. Fork or clone the repository and create a branch for your change.
2. Follow the local setup steps above; use your own `.env` and test recipient.
3. Keep page components in `src/pages`, reusable UI in `src/components`, backend logic in `server`, and reusable development or verification tools in `scripts`.
4. Check mobile and desktop layouts when changing the UI. For backend changes, build and run the server checks.
5. Run `npm run build`, `npm run lint`, and `npm test` before opening a pull request. Document relevant warnings or limitations.
6. Describe the change, include screenshots for visible changes, and list the checks you ran.

Never commit `.env`, passwords, app passwords, generated builds, or `node_modules`. Use `.env.example` for configuration changes and keep this README up to date. Avoid adding temporary scripts or additional Compose files.

## Troubleshooting

- **Complaint service is not configured:** verify `.env` values, especially `SMTP_FROM`/`SMTP_USER` and `COMPLAINT_EMAIL_TO`, then restart the local server or recreate the container.
- **Complaint delivery fails:** check the server or container logs for SMTP error codes. Check credentials, sender permissions, and outbound connectivity. Use port 465 with `SMTP_SECURE=true`, or port 587 with `SMTP_SECURE=false`.
- **Production build is missing:** run `npm run build` before `npm start` or `npm test`.
- **Port 9500 is occupied:** stop the existing local server or container before starting another.
- **An official-domain page or complaint endpoint returns 404:** make sure the reverse proxy forwards both page routes and `/api/*` to the Node.js server, rather than serving `dist/` alone.
