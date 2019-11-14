import { guard } from './guard';

export default {
	path: '/auth',
	components: {
        default: () =>
            import ('./../../pages/Auth.vue'),
        header: () =>
            import ('./../../components/global/NavComponent.vue')
	},
	beforeEnter: guard.notAuthenticated,
	children: [
		{
			path: 'login',
			name: 'auth.login',
			components: {
				default: () =>
					import ('./../../components/auth/Login.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		},
		{
			path: 'register',
			name: 'auth.register',
			components: {
				default: () =>
					import ('./../../components/auth/Register.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		}
	]
}