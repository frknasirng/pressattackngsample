<template>
	<div>
		<router-view name="header" :key="header_key"></router-view>
		<router-view :key="default_key"></router-view>
		<router-view name="footer" :key="footer_key"></router-view>
	</div>
</template>

<script>
import { Bus } from './bus';

export default {
	data () {
		return {
			header_key: 0,
			default_key: 1,
			footer_key: 2
		}
	},
	created () {
		Bus.$on('reloadApp', () => {
			this.header_key++;
			this.default_key++;
			this.footer_key++;
		});
	}
}
</script>

<style>

</style>