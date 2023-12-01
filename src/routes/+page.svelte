<script>
	  import { animateScroll } from 'svelte-scrollto-element';
</script>

<div class ="mb-20">
	<div class="hero min-h-screen" style="background-image: url(https://media0.giphy.com/media/QWQ3lmJXI9QylAgrWp/giphy.gif?cid=ecf05e47ikctz6z6tj1omcs5xgtn2ys7979ot0zu1td8tto4&ep=v1_gifs_search&rid=giphy.gif&ct=g);">
	  <div class="hero-overlay bg-opacity-60"></div>
	  <div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
		  <h1 class="mb-5 text-5xl font-bold">Comet Cupboard</h1>
		  <p class="mb-5">Erupting Flavors with Comet Magic</p>
		<a  href = "#main-section" on:click={() => animateScroll.scrollTo({element: '#main-section', duration:750})}>
		  <button class="btn btn-primary">Learn More</button>
		</a>
		</div>
	  </div>
	</div>
</div>

<main id="main-section">
<section class="w-full py-12 md:py-24 lg:py-32 grid items-center justify-center px-8 ">
  <div class="container grid grid-cols-1 lg:grid-cols-3 px-4 md:px-6">
    <div class="lg:col-span-2 space-y-6 ">
      <h1 class="text-4xl font-bold tracking-tighter">Mission</h1>
      <p class="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light opacity-70">
		The Comet Cupboard is a free food pantry initiative at UT Dallas dedicated to helping students in need.
		Its primary mission is to provide necessary food and personal care items to members of the UT Dallas community while acting as a service-learning component prioritizing community over individualism. 
      </p>
      <p class="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-thin opacity-50">
		Located in room MC 1.608, in the Eugene McDermott Library basement.
      </p>
      <div class="grid grid-cols-4 gap-4 text-left">
        <div class="flex flex-col items-start">
          <h3 class="text-2xl font-bold">200% increase</h3>
          <p class="opacity-60">From Students Served From Fall 2020</p>
        </div>
        <div class="flex flex-col items-start">
          <h3 class="text-2xl font-bold">1600/week</h3>
          <p class="opacity-60">Items Distributed</p>
        </div>
        <div class="flex flex-col items-start">
          <h3 class="text-2xl font-bold">1000/week</h3>
          <p class="opacity-60">Items Received</p>
        </div>
		<div class="flex flex-col items-start">
			<h3 class="text-2xl font-bold">15% users</h3>
			<p class="opacity-60">First-Time Users</p>
		  </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-16 items center">
	<div>
		<div class="card w-52 bg-base-200 h-1/2 shadow-xl md:h-48">
		  <div class="card-body">
			<h2 class="card-title text-center">Over 12,000 students served</h2>
			<div class="card-actions justify-center">
				<img alt = "logo" src = "/heart_hands.png"> 
			</div>
		  </div>
		</div>
	</div>
	<div>
		<div class="card w-52 bg-base-200 shadow-xl h-1/2 md:h-48">
		  <div class="card-body">
			<h2 class="card-title text-center">Over 300 volunteers/year</h2>
			<div class="card-actions justify-center">
				<img alt = "logo" src = "/giving.png"> 
			</div>
		  </div>
		</div>
    </div>
</div>

</section>

<section class="w-full py-12 md:py-24 lg:py-32">
		<div class="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
			<div class="space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter">
						Get Involved
				</h2>
			<p class="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400 opacity-80">
				Join our efforts and help us make a difference. Every hand counts in creating a better world.
			</p>
		</div>
	<div class="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
		<a class="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300" href="/about">
			Join Now
		</a>
	</div>
	</div>
  </section>

</main>
