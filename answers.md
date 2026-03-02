TASK 1

<Card
  image={breed.id}
  title={breed.name}
  subtitle={breed.temperament}
  description={breed.description}>
</Card>



TASK 2

let { image, title, subtitle, description } = $props();


TASK 3

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


TASK 4

setContext('breedsList', {
    get breeds() { return filteredBreeds; }
  });