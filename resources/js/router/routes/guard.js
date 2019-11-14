import store from './../../store';

export const guard = {
	/*
		This will cehck to see if the user is authenticated or not.
	*/
	requireAuth: function (to, from, next) {
		/*
			Determines where we should send the user.
		*/
		function proceed () {
			/*
				If the user has been loaded determine where we should
				send the user.
			*/
			if (store.getters.getBearerToken) {
				next();
			} else {
				//user is not logged in
				console.log('you are not logged in');
			}
		}

		proceed ();
	},
	/**
	 * 
	 * @param {*} to 
	 * @param {*} from 
	 * @param {*} next 
	 */
	notAuthenticated: function (to, from, next) {
		/**
		 * Determine if the user is already logged in
		 */
		function proceed () {
			if (!store.getters.getBearerToken) {
				next ();
			} else {
				console.log('Already logged in');
			} 
		}

		proceed();
	}
}