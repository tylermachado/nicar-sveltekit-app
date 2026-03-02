<script>
  import "../app.css";
  import { setContext } from "svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import selectedCountry from "$stores/countryStore";  

  // Props
  let { data, children } = $props();
  let countries = data.countries;
  let breeds = data.breeds;

  let breedsList = $derived(
    $selectedCountry && $selectedCountry !== "All"
      ? breeds.filter((breed) => breed.origin === $selectedCountry)
      : breeds
  );

  // 🐱 TASK 4: Set a context called filteredBreeds
  setContext('filteredBreeds', () => breedsList);
</script>

<Header options={countries} />

<main class="container flex justify-center w-full mx-auto mt-40 mb-8">
  {@render children()}
</main>

<Footer />