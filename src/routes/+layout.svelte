<script>
import "../app.pcss";
import { fade } from 'svelte/transition'
import Header from "./components/header.svelte";
import Footer from "./components/footer.svelte"

export let data 
$: pathname = data.pathname
</script> 

{#key pathname}
<div 
class = "h-full"
in:fade={{duration: 300, delay: 400}}
out:fade={{duration:300}}
>
	<Header />
	<main>
		<slot/>
	</main>
	<Footer />
</div>
{/key}
