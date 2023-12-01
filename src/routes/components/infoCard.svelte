<script>
  export let number;
  export let header;
  export let subtitle;
  export let image;
</script>

<!--
  // v0 by Vercel.
  // https://v0.dev/t/7rnqL48OLQU
-->
<div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-transform hover:scale-105" >
  <div class="flex flex-col items-center space-y-4 p-6">
    <h2 class="text-4xl font-bold rounded-full border bg-green-500 px-4 py-2" >
	{number}
	</h2>
    <h3 class="text-lg font-bold">
	{header}
    </h3>
    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
	{subtitle}
    </p>
    <div class="w-full overflow-hidden">
      <img alt="Card" class="transition-transform duration-500 hover:scale-110 rounded-md" height="200" src="{image}" width="200" style="aspect-ratio: 200 / 200; object-fit: cover;">
    </div>
  </div>
</div>
