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

## Answers to class tasks

...

Don't look down here unless you really want the answers!

...

No spoilers!

...

Last alert!

...

### TASK 1

```svelte
<Card
  image={breed.id}
  title={breed.name}
  subtitle={breed.temperament}
  description={breed.description}>
</Card>
```

### TASK 2

```javascript
let { image, title, subtitle, description } = $props();
```

### TASK 3

```svelte
<div class="w-full flex bg-gray-300 px-8 py-2 justify-center">
    <div>
      Country of Origin:
    </div>
    <select bind:value={$selectedCountry}>
      <option value='All'>All countries</option>
      {#each options as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
```

### TASK 4

```javascript
setContext('filteredBreeds', () => breedsList);
```