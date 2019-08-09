# Storyscript Dashboard

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/db988abe-5f0a-4ec5-8659-b1865035e9c9/deploy-status)](https://app.netlify.com/sites/musing-nobel-a05d19/deploys)
[![CircleCI](https://circleci.com/gh/storyscript/dashboard.svg?style=svg)](https://circleci.com/gh/storyscript/dashboard)
[![codecov](https://codecov.io/gh/storyscript/dashboard/branch/master/graph/badge.svg)](https://codecov.io/gh/storyscript/dashboard)
[![Lighthouse](./lighthouse-badges/lighthouse.svg)](https://dashboard.storyscript.io)

## Project commands

```bash
$> yarn install   # Install dependencies
$> yarn serve     # Start a dev server with HMR
$> yarn build     # Build for production
$> yarn test      # Run tests with coverage
$> yarn commit    # Commit using commitizen
$> yarn release   # Bump version and generates CHANGELOG.md
```

## Start development stack

> Requirements:
>
> - Binding authorisation (on macOS) + directories `/docker-host/storyscript/(postgres|pgadmin)`
> - Docker and Docker Compose (>`18.06.0+`)

> The first time

```bash
$> docker-compose up -d database

$> git clone git@github.com:storyscript/database.git

$> cd database    # Edit the Makefile to add args to the reset command
                  # e.g.: psql -h localhost -U postgres ${DB} ...

$> make reset

$> docker-compose up -d
```

You can now access:

- **traefik** at [`docker.localhost:8081`](http://docker.localhost:8081)
- **postgres** at `pg.docker.localhost:5432` (or `database:5432` inside the docker stack)
- **pgadmin** at [`pgadmin.docker.localhost`](http://pgadmin.docker.localhost)
- **platform-graphql** at `graphql.docker.localhost` and [`graphql.docker.localhost/graphiql`](http://`graphql.docker.localhost/graphiql`)

> The other times

```bash
$> docker-compose down    # Stop all the containers and remove them
                          # Since the data is bound to the host,
                          # you'll keep your data

$> docker-compose stop    # Stop the containers

$> docker-compose up -d   # Start all the containers in the right order
```

## Lighthouse Score

[![Lighthouse](./lighthouse-badges/lighthouse-logo.svg)](https://github.com/GoogleChrome/lighthouse)

[![Lighthouse Accessibility Badge](./lighthouse-badges/lighthouse_accessibility.svg)](https://dashboard.storyscript.io)
[![Lighthouse Best Practices Badge](./lighthouse-badges/lighthouse_best-practices.svg)](https://dashboard.storyscript.io)
[![Lighthouse Performance Badge](./lighthouse-badges/lighthouse_performance.svg)](https://dashboard.storyscript.io)
[![Lighthouse PWA Badge](./lighthouse-badges/lighthouse_pwa.svg)](https://dashboard.storyscript.io)
[![Lighthouse SEO Badge](./lighthouse-badges/lighthouse_seo.svg)](https://dashboard.storyscript.io)
