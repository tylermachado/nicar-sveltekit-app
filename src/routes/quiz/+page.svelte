<script>
  import QuizQuestion from '$components/QuizQuestion.svelte';
  import QuizResult from '$components/QuizResult.svelte';

  // Stores
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';
  let allBreeds = $derived($filteredBreedsStore);

  // Quiz questions and answers using $state
  let questions = [
    { key: 'affectionate', text: 'Do you want an affectionate, cuddly cat?' },
    { key: 'highEnergy', text: 'Do you want a high-energy, playful cat?' },
    { key: 'childFriendly', text: 'Do you need a child-friendly cat?' },
    { key: 'indoorOnly', text: 'Will this be an indoor-only cat?' },
    { key: 'hypoallergenic', text: 'Do you need a hypoallergenic cat?' }
  ];

  // Store answers using $state
  let answers = $state({
    affectionate: null,
    highEnergy: null,
    childFriendly: null,
    indoorOnly: null,
    hypoallergenic: null
  });

  // Check if quiz is complete using $derived
  let isComplete = $derived(
    Object.values(answers).every(answer => answer !== null)
  );

  // Filter breeds based on answers using $derived
  let matchingBreeds = $derived(() => {
    if (!isComplete) return [];
    
    return allBreeds.filter(breed => {
      // Affectionate: if YES, keep breeds with affection_level >= 3
      if (answers.affectionate === true && breed.affection_level < 3) return false;

      // High energy: if YES, keep breeds with energy_level >= 3
      if (answers.highEnergy === true && breed.energy_level < 3) return false;

      // Child friendly: if YES, keep breeds with child_friendly >= 3
      if (answers.childFriendly === true && breed.child_friendly < 3) return false;

      // Indoor only: if YES, keep breeds where indoor === 1
      if (answers.indoorOnly === true && breed.indoor !== 1) return false;

      // Hypoallergenic: if YES, keep breeds where hypoallergenic === 1
      if (answers.hypoallergenic === true && breed.hypoallergenic !== 1) return false;

      return true;
    });
  });

  // Reset function
  function resetQuiz() {
    answers = {
      affectionate: null,
      highEnergy: null,
      childFriendly: null,
      indoorOnly: null,
      hypoallergenic: null
    };
  }
</script>

<div class="w-full max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold mb-4">Breed Compatibility Quiz</h1>
  <p class="text-gray-600 mb-8">
    Answer these 5 questions to find your perfect cat breed match.
  </p>

  <!-- Questions -->
  {#each questions as q}
    <QuizQuestion
      question={q.text}
      bind:answer={answers[q.key]}
    />
  {/each}

  <!-- Results -->
  {#if isComplete}
    <QuizResult breeds={matchingBreeds()} />
    
    <button
      class="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      onclick={resetQuiz}
    >
      Start Over
    </button>
  {:else}
    <div class="p-6 rounded-xl border border-border bg-gray-50 text-center">
      <p class="text-gray-500">
        Answer all questions to see your matching breeds.
      </p>
    </div>
  {/if}
</div>
