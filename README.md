# NICAR26: First SvelteKit data app

Here's all the code you'll need to get up and running for the NICAR 2026 session on building a SvelteKit data app. 

This project uses:

- SvelteKit: UI framework, which handles the routing, code organization, and build steps
- Tailwind: Provides CSS utility classes to make the styling simple
- TheCatAPI: Provides our sample data and images
- The Noun Project: Provides cat icon


## Getting started


In the home directory, run a standard install to get the project's dependencies.

```bash
npm install
```

After that, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
