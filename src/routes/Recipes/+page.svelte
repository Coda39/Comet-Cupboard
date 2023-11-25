<!--
// v0 by Vercel.
// https://v0.dev/t/spsdm12oIQN
-->
<script>
    import {pokemon} from "../../api/recipesAPI";
    import PokemanCard from "../components/pokemanCard.svelte";
    
    let searchRecipe = "";
    let filteredRecipe = [];

    $:{
        console.log(searchRecipe);
        if(searchRecipe){
            filteredRecipe = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchRecipe.toLowerCase()));
        }
        else{
            filteredRecipe = [...$pokemon]
        }
    }
</script>
<section class="w-full pt-12 pb-12 ">
    <div class="container space-y-10 xl:space-y-16 mx-auto">
        <div class="flex flex-col items-center space-y-4 text-center">
            <div class="space-y-2">
                <h1 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">Recipe Collection</h1>
                <p class="mx-auto max-w-[700px] text-zinc-500 md:text-lg dark:text-zinc-400">Explore the best recipes from around the world</p>
                <img class="mx-auto" src="/down-arrow.png" alt="down arrow">
            </div>
        </div>
    </div>
</section>

<div class="mx-10 grid grid-cols-5 grid gap-8">
    <div class="col-span-1 shadow-lg">
        <input class="w-full rounded-md text-lg p-2 border-2 border-gray-200" type="text" bind:value={searchRecipe} placeholder="Search Recipe">
        <ul class="menu menu-sm bg-base-200 w-full rounded-box">
            <li>
                <a><img class="w-10 h-10" src="/book-icon.png" alt="book">All Recipes</a>
            </li>
            <li>
                <a><img class="w-10 h-10" src="/heart-icon.png" alt="book">Favorites</a>
            </li>
            <li>
                <a><img class="w-10 h-10" src="/category-icon.png" alt="book">Ingredients</a>
            </li>
            <li>
                <a><img  src="/stopwatch-icon.png" alt="book">Duration</a>
            </li>
        </ul>
    </div>
    <div class="col-span-4 grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {#each filteredRecipe as pokeman}
            <PokemanCard pokeman={pokeman}/>
        {/each}
    </div>
</div>

<div class="grid md:grid-cols-3 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="p-6">
            <img alt="Recipe Image" class="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800" height="600" src="/placeholder.svg" width="600">
            <div class="space-y-2">
                <h2 class="text-lg font-semibold text-center">Recipe Title</h2>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Brief description of the recipe goes here</p>
                <div class="flex justify-center space-x-2 flex-wrap">
                    <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Button 1</button>
                    <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Button 2</button>
                    <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Button 3</button>
                </div>
                <div class="flex justify-center space-x-2">
                    <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Button 4</button><button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Button 5</button>
                </div>
            </div>
        </div>
    </div>
</div>