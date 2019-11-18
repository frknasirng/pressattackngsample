<template>
	<div class="container w-full mx-auto">

		<div class="w-full max-w-screen-xl static mx-auto px-6 pt-16 pb-40 md:pb-24 mt-24">
			<div class="xl:flex -mx-6">
				<div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
					<h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">
						...a citizen-oriented solution for 
						<span class="sm:block text-teal-500 font-normal">
							tracking government projects.
						</span>
					</h1>
					<p class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600">
						A platform designed to hold the Nigerian government and 
						lawmakers accountable for how funds released for capital 
						projects are spent.
					</p>
					<div class="flex mt-6 justify-start md:justify-center xl:justify-start">
						<a href="/docs/installation" class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md">
							Get Started
						</a>
						<a href="#what-is-tailwind" class="ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md">
							Why Udeme?
						</a>
					</div>
				</div>
				<div class="mt-12 xl:mt-0 px-6 flex-shrink-0 hidden md:block border-l border-gray-500">
					<router-view class="border-0 mx-auto" style="width: 40rem; height: auto;"></router-view>
				</div>
			</div>
		</div>



	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>