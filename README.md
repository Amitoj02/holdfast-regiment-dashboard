# Holdfast Regiment Dashboard

This repository contains a simple dashboard application composed of two main services:

- **frontend** – an Angular single page application.
- **backend** – a small Go API built with [Gin](https://github.com/gin-gonic/gin).

Both services can be run together using Docker Compose.

## Project structure

```
/             - project root and Docker Compose configuration
/backend      - Go REST API
/frontend     - Angular application
```

## Quick start

1. Copy `.env-example` to `.env` and adjust ports or database credentials if necessary.
2. Build and start all services with Docker Compose:

   ```bash
   docker compose up --build
   ```

   The frontend will be available on `http://localhost:$FRONTEND_PORT` (default `80`).
   The backend API listens on `http://localhost:$BACKEND_PORT` (default `8080`).
3. Stop the stack with `Ctrl-C` and remove containers with `docker compose down`.

## Development

- Backend can be run directly:
  ```bash
  cd backend
  go run .
  ```
- Frontend dev server:
  ```bash
  cd frontend
  npm install
  npm start
  ```

Refer to [frontend/README.md](frontend/README.md) and [backend/README.md](backend/README.md) for detailed instructions.
