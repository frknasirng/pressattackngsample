import sampleRoute from './auth';

export default [
    {
        path: '/',
        name: 'home',
        components: {
            default: () =>
                import ('./../../pages/Home.vue'),
            header: () =>
                import ('./../../components/global/NavComponent.vue')
        }
	},
	sampleRoute
]