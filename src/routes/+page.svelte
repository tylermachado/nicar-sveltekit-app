<script>
  import Card from '$components/Card.svelte';
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';
  let filteredBreeds = $derived($filteredBreedsStore);
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  <!-- 🐱 TASK 1: Replace these links with a Card component, passing in props accordingly. The Card component takes props "image", "title", "subtitle", and "description" -->
  {#each filteredBreeds as breed}
    <a href="/cat/{breed.id}">
      {breed.name}
    </a>
  {/each}
</ul>
