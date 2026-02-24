<script>
  // Props
  let { question, answer = $bindable(), onAnswer } = $props();
</script>

<div class="mb-6 p-6 rounded-xl border border-border bg-white">
  <p class="text-lg font-medium mb-4">{question}</p>
  <div class="flex gap-4">
    <button
      class="px-6 py-2 rounded-lg border-2 transition-colors {answer === true ? 'bg-green-500 text-white border-green-500' : 'border-gray-300 hover:border-green-500'}"
      onclick={() => { answer = true; onAnswer?.(); }}
    >
      Yes
    </button>
    <button
      class="px-6 py-2 rounded-lg border-2 transition-colors {answer === false ? 'bg-red-400 text-white border-red-400' : 'border-gray-300 hover:border-red-400'}"
      onclick={() => { answer = false; onAnswer?.(); }}
    >
      No
    </button>
  </div>
</div>
