# patrickdanielsson.se

Nuxt 4 site built for deployment on Colify.

## Development

```bash
npm install
npm run dev
```

## Building

Compile the project for production and verify it builds:

```bash
npm run build
```

Generate a static version of the site with:

```bash
npm run generate
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Run the production service with Docker Compose:

```bash
docker compose up -d
```

The Compose service exposes port `3000` to the Docker network for Coolify's reverse proxy. It does not bind port `3000` on the host, so multiple Coolify applications can run on the same server without host port conflicts.
