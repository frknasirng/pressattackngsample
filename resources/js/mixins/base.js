import store from './../store';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export const base = {
	components: {
		ClipLoader
	},
	created () {
		if (store.getters.getBearerToken) {
			let t = store.getters.getBearerToken;
			window.axios.defaults.headers.common['Authorization'] = `Bearer ${t}`;
		}
	},

	mounted () {
		
	},

	data () {
		return {

		}
	},

    computed: {
        user () {
			return store.getters.getUser;
		},
		userLoadStatus () {
			return store.getters.getUserLoadStatus;
		},
		bearerToken () {
			return store.getters.getBearerToken;
		}
    },

    methods: {
        
    }
};