# Treehouse

> TODO: Description

> TODO: Demo

> TODO: Screenshots

## Development

### Technology Overview / Attributions

- [Bun.sh][bun] - Package manager & Javascript runtime `(LGPL-2, MIT)`
- [ESLint](https://eslint.org/) - Linter `(BSD-2-Clause, MIT)`
- [Lucia](https://lucia-auth.com/) - Auth library `(MIT)`
- [Podman][podman] - OCI Container Manager `(Apache 2.0)`
- [PostCSS](https://postcss.org/) - Transforming CSS with JavaScript `(CC0-1.0, MIT, MIT-0)`
- [Prettier](https://prettier.io/) - Code formatter `(Apache, BSD, ISC, MIT)`
- [Prisma](https://www.prisma.io/) - ORM `(Apache, Apache-2.0)`
- [Remix Icon](https://remixicon.com/) - Icon library `(Apache, Apache 2.0)`
- [SvelteKit](https://kit.svelte.dev/) - App framework `(MIT)`
- [Svelte](https://svelte.dev/) - UI/Component framework `(MIT)`
- [TypeScript](https://www.typescriptlang.org/) - Programming language `(Apache, Apache-2.0, OBSD)`
- [Vite](https://vitejs.dev/) - Build tool `(Apache, ISC, MIT)`

### Setting up a local dev environment

First, make sure you have [Bun][bun] and [Podman][podman] installed, then:

```bash
# Clone repo
git clone https://codeberg.org/mint/treehouse.git

# Set up environment variables
cp .env.example .env

# Install dependencies
bun install

# Run and setup Authentik
podman kube play --replace ./infra/pods/authentik.yml
##
## 1. Go to http://localhost:10011/if/flow/initial-setup/
## 2. Create a new *OAuth2/OpenID* provider
##     - Name: Baumhaus
##     - Authorization flow: default-provider-authorization-implicit-consent
##     - Client type: Confidential
## 3. Create a new application
##     - Name: Baumhaus
##     - Slug: baumhaus
##     - Provider: Baumhaus
## 4. Set OAUTH_* environment variables in .env
##

# Run Postgres
podman kube play --replace ./infra/pods/baumhaus.yml

##
## No migrations have been set up yet because of frequent schema schanges. Just
## push the current schema to the DB instead and create the admin user manually
## through the signup page
##
## See also: Issue #5
##
# # Run migration history
# bunx prisma migrate dev
bunx prisma db push

# Start dev server
bun run dev
```

### Bun

Bun is used as a package manager and Javascript runtime

```bash
# Start dev server
bun run dev

# Start dev server using Bun runtime
bun --bun run dev
```

### Kubernetes

Podman can be used to _play_ K8s YAML files

```bash
# Start
podman kube play ./k8s/pods/MY_POD.yml

# Recreate pods and start
podman kube play --replace ./k8s/pods/MY_POD.yml

# Stop
podman kube play --down ./k8s/pods/MY_POD.yml

# Regenerate

```

Currently this is only used for local development, but it makes transitioning to a _proper_ K8s setup easier.

### Prisma

```bash
# (Re-)Generate Prisma client
bunx prisma generate

# Push state of Prisma schema to database without using migrations
bunx prisma db push

# Seed database (see `package.json`)
bunx prisma db seed

# Run Prisma studio
bunx prisma studio

# (Re-)Run migration history
bunx prisma migrate dev
```

See also:

- [Conceptual overview of `db push` and when to use it over Prisma Migrate ][prisma-migrate-push]
- [Schema prototyping with `db push`][prisma-prototyping-oush]
- [Conceptual overview of `migrate`][prisma-migrate]

## Deployment

> TODO: Instructions

## License

    Treehouse Activist Platform
    Copyright (C) 2023 Mint <m1n7mail@proton.me>, The Treehouse Developers

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>.

[bun]: https://bun.sh/
[kind]: https://kind.sigs.k8s.io/
[metallb]: https://metallb.universe.tf/installation/#installation-by-manifest
[podman]: https://podman.io/
[prisma-migrate-push]: https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push
[prisma-prototyping-oush]: https://www.prisma.io/docs/guides/migrate/prototyping-schema-db-push
[prisma-migrate]: https://www.prisma.io/docs/concepts/components/prisma-migrate
