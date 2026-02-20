<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import selectedCountry from "$stores/countryStore";  
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';

  // Props
  let { data, children } = $props();
  let countries = data.countries;
  let breeds = data.breeds;

  let filteredBreeds = $derived(
    $selectedCountry && $selectedCountry !== "All"
      ? breeds.filter((breed) => breed.origin === $selectedCountry)
      : breeds
  );

  $effect(() => {
    filteredBreedsStore.set(filteredBreeds);
  });
</script>

<Header options={countries} />

<main class="container flex justify-center w-full mx-auto mt-40 mb-8">
  {@render children()}
</main>

<Footer />