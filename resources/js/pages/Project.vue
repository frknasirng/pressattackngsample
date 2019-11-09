<template>
	<div class="container w-2/3 mx-auto">

		<div class="flex mt-16 pt-8">
			<div class="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
				<side-bar></side-bar>
			</div>

			<div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
				<div class="xl:flex -mx-6">
					<router-view></router-view>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import SideBar from './../components/project/SideBar.vue';

export default {
	components: {
		SideBar
	}
}
</script>

<style>

</style>