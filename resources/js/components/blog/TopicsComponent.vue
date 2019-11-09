<template>
	<div class="text-lg text-center">
		<ul class="p-4">
			<li v-for="i in 10" :key="i" class="mr-6 cursor-pointer inline">
				<span class="text-gray-700 hover:text-gray-900">
					Topic{{ i }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: [
		'topics'
	]
}
</script>

<style>

</style>