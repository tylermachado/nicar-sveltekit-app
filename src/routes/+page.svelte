<script>
  import Card from '$components/Card.svelte';
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';
  $: filteredBreeds = $filteredBreedsStore;
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each filteredBreeds as breed}
  <a 
    href="/cat/{breed.id}"
    >
    <Card
      image={breed.id}
      title={breed.name}
      subtitle={breed.temperament}
      description={breed.description}>
    </Card>
</a>
  {/each}
</ul>
