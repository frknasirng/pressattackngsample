<template>
	<div class="w-full pl-16">
		<div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mb-5">
			<h1 class="text-2xl text-left font-light leading-tight float-left">
				Latest Posts...
			</h1> 
			<div class="inline-flex float-right">
				<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
					Prev
				</button>
				<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
					Next
				</button>
			</div>
			<div class="clearfix"></div>
		</div>
		<hr class="w-full">

		<post-card v-for="i in 10" :key="i" :post="{}"></post-card>


		<div class="inline-flex float-left mt-16">
			<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
				Prev
			</button>
			<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
				Next
			</button>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import PostCard from './PostCard.vue';

export default {
	components: {
		PostCard
	}
}
</script>

<style>

</style>