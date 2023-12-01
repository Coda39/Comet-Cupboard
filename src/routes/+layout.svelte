<script>
import "../app.pcss";
import Header from "./components/header.svelte";
import Footer from "./components/footer.svelte"
</script> 

<div class = "h-full">
	<Header />
	<main>
		<slot/>
	</main>
	<Footer />
</div>
