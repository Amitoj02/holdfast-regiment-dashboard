# Backend

This folder contains the Go API for the dashboard. It exposes a single endpoint for now and is intended to run behind Docker or as a standalone service during development.

## Development

Run the API directly with Go:

```bash
cd backend
go run .
```

The server listens on port `8080` by default. Visit `http://localhost:8080/api/hello` to verify it is running.

## Docker image

To build a production container:

```bash
docker build -t holdfast-backend .
```

## API

- `GET /api/hello` – returns a greeting message.
