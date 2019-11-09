<template>
	<div class="w-full pl-16">
		<div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mb-5">
			<h1 class="text-2xl text-left font-light leading-tight">
				Tags
			</h1>
		</div>
		<hr class="w-full">

		<div class="text-left">
			<ul class="p-4">
				<li v-for="i in 8" :key="i" class="mr-6 cursor-pointer">
					<span class="text-teal-500 hover:text-teal-900 italic">
						Tag{{ i }}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'tags'
	]
}
</script>

<style>

</style>