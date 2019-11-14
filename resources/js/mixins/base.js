export const base = {
	created () {
		
	},

	mounted () {
		
	},

	data () {
		return {

		}
	},

    computed: {
        bearerToken: function (val) {
			if (val) {
				window.axios.defaults.headers.common = {
					'Authorization': `Bearer ${val}`,
					Accept: "application/json, text/plain, */*",
  					"Content-Type": "application/json"
				}
			}
		}
    },

    methods: {
        
    }
};