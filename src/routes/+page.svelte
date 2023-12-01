<script>
	  import { animateScroll } from 'svelte-scrollto-element';
	  import InfoCard from '../routes/components/infoCard.svelte';

	  let cardData1 = {
		number: 1,
		header: 'Card Header',
		subtitle: 'Card Subtitle',
		image: 'https://placehold.co/600x400', // Provide your image URL
	  };

</script>

<div class ="mb-12">
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
<section class="w-full md:py-24 lg:py-32 grid items-center justify-center px-8 ">
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

<div class="divider lg:mb-24"></div> 

<section>
	<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	  <li>
		<div class="timeline-middle">
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
		</div>
		<div class="timeline-start md:text-end mb-10">
		  <div class="text-lg font-black">First Macintosh computer</div>
		  The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
		</div>
		<hr/>
	  </li>
	  <li>
		<hr />
		<div class="timeline-middle">
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
		</div>
		<div class="timeline-end mb-10">
		  <div class="text-lg font-black">iMac</div>
		  iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
		</div>
		<hr />
	  </li>
	  <li>
		<hr />
		<div class="timeline-middle">
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
		</div>
		<div class="timeline-start md:text-end mb-10">
		  <div class="text-lg font-black">iPod</div>
		  The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
		</div>
		<hr />
	  </li>
	  <li>
		<hr />
		<div class="timeline-middle">
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
		</div>
		<div class="timeline-end mb-10">
		  <div class="text-lg font-black">iPhone</div>
		  iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
		</div>
		<hr />
	  </li>
	  <li>
		<hr />
		<div class="timeline-middle">
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
		</div>
		<div class="timeline-start md:text-end mb-10">
		  <div class="text-lg font-black">Apple Watch</div>
		  The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
		</div>
	  </li>
	</ul>
</section>
</main>
