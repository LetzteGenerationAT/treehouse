# Routes

Svelte allows us to group routes by putting directory names in parenthesis.

For example, the `applets` directory exists twice with the "my apps" overview page located in `(main)` and apps like the event planner in `(pages)`. Each group uses a different layout, so that the app overview `applets/+page.svelte` can have bottom navigation without affecting nested routes that only need a back button (`applets/**/+page.svelte`).

```
./src/routes/
├── (api)
│   ├── logout/
│   …
├── +layout.svelte
├── (main)
│   ├── applets/          ⟵
│   ├── profile/
│   ├── +layout.svelte
│   …
├── (pages)
│   ├── applets/          ⟵
│   ├── +layout.svelte
│   …
…
```

## `(api)`

Endpoints without UI

## `(main)`

UI with bottom navigation (Home, Apps, Profile, …)

## `(pages)`

Generic pages (mostly fullscreen with back button or 'action bar')
