<script>
  // Stores
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';
  let filteredBreeds = $derived($filteredBreedsStore);
</script>

<div class="w-full max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold mb-4">Breed Compatibility Quiz</h1>
  <p class="text-gray-600 mb-8">
    Find out which cat breed is the perfect match for your lifestyle.
  </p>

  <div class="p-8 rounded-xl border border-border bg-gray-50 text-center">
    <p class="text-gray-500">Content</p>
  </div>
</div>
