<script>
    import { fade } from 'svelte/transition';
    export let pokeman;
</script>
<a class="m-4 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-lg flex flex-col items-center" href={`/Recipe/${pokeman.id}`}>
    <img class="h-40 w-40" src={pokeman.image} alt={pokeman.image}>
    <h2 class="capitalize text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>