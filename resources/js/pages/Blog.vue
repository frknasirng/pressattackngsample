<template>
	<div class="container w-4/5 mx-auto pt-16">
		<topics-component></topics-component>

		<div class="w-full h-64 rounded overflow-hidden shadow-lg">
			<div class="px-6 py-4 bg-transparent absolute text-white">
				<div class="font-bold text-xl mb-2">
					The Coldest Sunset
				</div>
				<p class="text-white w-1/2 mb-16">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Voluptatibus quia, nulla! Maiores et perferendis eaque, 
					exercitationem praesentium nihil.
				</p>
				<a class="relative mt-16" href="#">Continue Reading...</a>
			</div>
			<img 
				class="w-full" 
				src="https://tailwindcss.com/img/card-top.jpg" 
				alt="Sunset in the mountains">
		</div>

		<div class="flex pt-8">
			
			<div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
				<div class="xl:flex mx-6">
					<router-view></router-view>
				</div>
			</div>

			<div class="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
				<tags-component></tags-component>
			</div>

		</div>

	</div>
</template>

<script>
import TopicsComponent from './../components/blog/TopicsComponent.vue';
import TagsComponent from './../components/blog/TagsComponent.vue';

export default {
	components: {
		TopicsComponent,
		TagsComponent
	}
}
</script>

<style>

</style>