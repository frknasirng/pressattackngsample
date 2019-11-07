export default {
	path: '/auth',
	components: {
        default: () =>
            import ('./../../pages/Auth.vue'),
        header: () =>
            import ('./../../components/global/NavComponent.vue')
	},
	children: [
		{
			path: 'login',
			name: 'login',
			components: {
				default: () =>
					import ('./../../components/auth/Login.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		},
		{
			path: 'register',
			name: 'register',
			components: {
				default: () =>
					import ('./../../components/auth/Register.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		}
	]
}