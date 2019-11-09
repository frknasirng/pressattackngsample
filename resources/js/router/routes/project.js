export default {
	path: '/project',
	components: {
        default: () =>
            import ('./../../pages/Project.vue'),
        header: () =>
            import ('./../../components/global/NavComponent.vue')
	},
	children: [
		{
			path: '/',
			name: 'BrowseProject',
			components: {
				default: () =>
					import ('./../../components/project/Browse.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		}
	]
}