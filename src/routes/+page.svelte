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
		  <button class="btn glass btn-primary">Learn More</button>
		</a>
		</div>
	  </div>
	</div>
</div>

<main id="main-section">
<section class="w-full md:py-24 lg:py-24 grid items-center justify-center px-8 ">
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
		<div class="card w-52 bg-base-200 h-1/2 shadow-xl md:h-48 hover:shadow-primary duration-300">
		  <div class="card-body">
			<h2 class="card-title text-center">Over 12,000 students served</h2>
			<div class="card-actions justify-center">
				<img alt = "logo" src = "/heart_hands.png"> 
			</div>
		  </div>
		</div>
	</div>
	<div>
		<div class="card w-52 bg-base-200 shadow-xl h-1/2 md:h-48 hover:shadow-primary duration-300">
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

 <section>
   <div class="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
     <div class="text-left">
       <div class="items-center mx-auto lg:inline-flex">
         <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
           <div>
             <p class="text-2xl font-semibold tracking-tight sm:text-4xl">
				A brand new way to interact with the comet cupboard.
             </p>
           </div>
           <div class="lg:ml-auto">
             <p class="mt-4 text-lg tracking-tight lg:mt-0">
				We are striving to improve the resources and the experience of 
				using the comet cupboard one feature at a time.
             </p>
           </div>
         </div>
       </div>
     </div>
     <div>
       <div class="pt-12 mx-auto lg:max-w-7xl">
         <dl class="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
           <div>
             <div>
               <p class="text-lg font-bold leading-6">
					New Interative Recipes page
               </p>
             </div>
             <div class="mt-2 text-base ">
					A better way to pick what to eat. Choose healthier and higher value foods that you can combine with what you have at home to cook up food that lasts.
             </div>
           </div>
           <div>
             <div>
               <p class="text-lg font-bold leading-6">
					Events page
               </p>
             </div>
             <div class="mt-2 text-base ">
					Keep up with all the events that are happening relating to the Comet Cupboard.

             </div>
           </div>
           <div>
             <div>
               <p class="text-lg font-bold leading-6">
					Growing and creating your own your own food.
               </p>
             </div>
             <div class="mt-2 text-base ">
					Have all the resources that the Comet Cupboard provides when it comes to learning about growing and eating natural and healthy foods in one place.
             </div>
           </div>
         </dl>
       </div>
     </div>
   </div>
 </section>

<section>
	<div class="hero py-12 ">
	  <div class="hero-content flex-col lg:flex-row">
		<img alt ="comet cupboard staff" src="https://dygz37jdyaml.cloudfront.net/images/oue/cupboard/cupboard-02.jpg" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
		  <h1 class="text-5xl font-bold">Food shouldn't be a concern as a student</h1>
		  <p class="text-lg py-6">As a community we strive to give everyone the things that they need and should receive. Don't let hunger stop you from succeding.</p>
		<a href = "/Recipes">
		  <button class="btn btn-primary">Get Started now</button>
		</a>
		</div>
	  </div>
	</div>
</section>
</main>
