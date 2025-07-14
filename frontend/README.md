# Frontend

This directory contains the Angular application for the dashboard.

## Development server

Install dependencies and start the dev server:

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/` to view the app. The server reloads when you change source files.

## Building

Create an optimized production build:

```bash
ng build
```

The compiled output is placed in `dist/` and used by the Docker image.

## Testing

Run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

End-to-end tests can be executed with your preferred framework (Angular CLI does not include one by default).
