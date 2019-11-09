import auth from './auth';
import project from './project';
import blog from './blog';

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
	auth,
	project,
	blog
]