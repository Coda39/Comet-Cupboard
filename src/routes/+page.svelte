<script >
	  import { animateScroll } from 'svelte-scrollto-element';
</script>

<div class ="mb-20">
	<div class="hero min-h-screen" style="background-image: url(https://media0.giphy.com/media/QWQ3lmJXI9QylAgrWp/giphy.gif?cid=ecf05e47ikctz6z6tj1omcs5xgtn2ys7979ot0zu1td8tto4&ep=v1_gifs_search&rid=giphy.gif&ct=g);">
	  <div class="hero-overlay bg-opacity-60"></div>
	  <div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
		  <h1 class="mb-5 text-5xl font-bold">Comet Cupboard</h1>
		  <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		<a  href = "#main-section" on:click={() => animateScroll.scrollTo({element: '#main-section', duration:750})}>
		  <button class="btn btn-primary">Learn More</button>
		</a>
		</div>
	  </div>
	</div>
</div>

<main id="main-section">
	<section class="min-h-screen">
		<div class="stats shadow">
		  <div class="stat">
			<div class="stat-figure text-secondary">
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			</div>
			<div class="stat-title">Downloads</div>
			<div class="stat-value">31K</div>
			<div class="stat-desc">Jan 1st - Feb 1st</div>
		  </div>
		  
		  <div class="stat">
			<div class="stat-figure text-secondary">
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
			</div>
			<div class="stat-title">New Users</div>
			<div class="stat-value">4,200</div>
			<div class="stat-desc">↗︎ 400 (22%)</div>
		  </div>
		  
		  <div class="stat">
			<div class="stat-figure text-secondary">
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
			</div>
			<div class="stat-title">New Registers</div>
			<div class="stat-value">1,200</div>
			<div class="stat-desc">↘︎ 90 (14%)</div>
		  </div>
		  
		</div>
	</section>
</main>
