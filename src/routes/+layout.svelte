<script>
import "../app.pcss";
import Header from "./components/header.svelte";
</script> 

<div class = "h-full">
	<Header />
	<main>
		<slot/>
	</main>
</div>
