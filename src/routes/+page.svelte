<script>
  import { getContext } from 'svelte';
  import Card from '$components/Card.svelte';
  const getFilteredBreeds = getContext('filteredBreeds');
  const getAllBreeds = getContext('allBreeds');
  let filteredBreeds = $derived(getFilteredBreeds?.() || getAllBreeds());
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  <!-- 🐱 TASK 1: Replace these links with a Card component, passing in props accordingly. The Card component takes props "image", "title", "subtitle", and "description" -->
  {#each filteredBreeds as breed}
    <a href="/cat/{breed.id}">
      {breed.name}
    </a>
  {/each}
</ul>
