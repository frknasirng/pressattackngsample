export default {
	path: '/blog',
	components: {
        default: () =>
            import ('./../../pages/Blog.vue'),
        header: () =>
            import ('./../../components/global/NavComponent.vue')
	},
	children: [
		{
			path: '/',
			name: 'BrowseBlog',
			components: {
				default: () =>
					import ('./../../components/blog/Browse.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		}
	]
}