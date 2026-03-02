<script>
  // Props
  let { searchId, altText } = $props();

  // Variables for fetching data
  let data = $state(null);
  let loading = $state(true);
  let error = $state(null);

  // Backup image
  import CatIcon from '$lib/svg/cat.svg?component';
  let fillColorOptions = ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"];
  let fill = fillColorOptions[Math.floor(Math.random() * fillColorOptions.length)];

  $effect(() => {
    async function fetchData() {
      try {
        const apiKey = null;
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchId}`, {
          headers: {
            'x-api-key': `${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        data = await response.json();
      } catch (err) {
        error = err.message;
      } finally {
        loading = false;
      }
    }
    fetchData();
  });

</script>

<div class="relative w-full aspect-w-4 aspect-h-3 flex items-center justify-center">
  {#if loading}
  <div class="absolute inset-0 flex items-center justify-center">
    <CatIcon fill={fill} width="50%" height="50%" />
  </div>
  {:else if error}
    <p class="text-center">Error: {error}</p>
  {:else}
    <img src={data[0].url} alt="{altText}" class="object-cover w-full h-full" />
  {/if}
</div>
