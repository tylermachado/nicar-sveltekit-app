<script>
  import Card from './Card.svelte';

  // Props
  let { breeds = [] } = $props();
</script>

{#if breeds.length > 0}
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Your Matching Breeds</h2>
    <p class="text-gray-600 mb-6">
      Based on your answers, here are the cat breeds that match your preferences:
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each breeds as breed}
        <li>
          <a href="/cat/{breed.id}">
            <Card
              image={breed.id}
              title={breed.name}
              subtitle={breed.temperament}
            />
          </a>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="mt-8 p-6 rounded-xl border border-border bg-yellow-50 text-center">
    <p class="text-gray-600">No breeds match all your criteria. Try adjusting your answers!</p>
  </div>
{/if}
