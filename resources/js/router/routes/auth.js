import { guard } from './guard';
import UserAPI from './../../api/user';

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
		},
		{
			path: 'forgot-password',
			name: 'auth.forgot-password',
			components: {
				default: () => 
					import ('./../../components/auth/ForgotPassword.vue'),
				header: () =>
					import ('./../../components/global/NavComponent.vue')
			}
		},
		{
			path: 'password/reset/:token/:email',
			name: 'auth.reset-password',
			beforeEnter: (to, from, next) => {
				UserAPI.confirmPasswordResetToken(
					to.params.email,
					to.params.token
				).then((response) => {
					if (response.status === 200) {
						next();
					} else {
						next(from.path)
					}
				}).catch((response) => {
					next(from.path)
				});
			},
			components: {
				default: () =>
					import ('./../../components/auth/ResetPassword.vue'),
				header: () => 
					import ('./../../components/global/NavComponent.vue')
			}
		}
	]
}