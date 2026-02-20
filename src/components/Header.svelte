<script>
  import "../app.css";

  // Stores
  import selectedCountry from '$stores/countryStore';

  // Props
  export let options;  
</script> 

<div class="header-container fixed w-full z-10 py-0 my-0 top-0">
  <div class="w-full flex justify-between items-center bg-black px-4 py-8">
    <span class="text-xl font-bold text-white	">First SvelteKit Data App</span>
    <div class="flex items-center">
      <a href="/" class="text-white hover:text-gray-300">Home</a>
      <a href="/charts" class="ml-4 text-white hover:text-gray-300">Charts</a>
    </div>
  </div>

  <!-- 🐱 Uncomment lines 18-28 below to enable the countries filter -->

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
</div>