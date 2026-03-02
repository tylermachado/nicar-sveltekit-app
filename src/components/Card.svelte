<script>
  import '../app.css';
  import ImageFetch from './ImageFetch.svelte';

  // 🐱 TASK 2: Fill the object below with props we need to complete this component
  let {  } = $props();
</script>

<div class="card bg-background shadow-lg rounded-xl overflow-hidden border border-border max-w-sm hover:bg-gray-100 transition-colors">
  <ImageFetch
    searchId={image}
    altText={title}
  />
  <div class="p-4">
    <h2 class="text-xl font-bold">{title}</h2>
    <p class="text-sm text-muted">{subtitle}</p>
  </div>
</div>