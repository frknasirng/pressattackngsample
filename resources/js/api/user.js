/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
	/**
	 * 
	 * @param {*} name 
	 * @param {*} email 
	 * @param {*} password 
	 * @param {*} password_confirmation 
	 */
	register: function(
		name,
		email,
		password,
		password_confirmation
	) {
		return axios.post(
			CONFIG.API_URL + '/register', {
				name: name,
				email: email,
				password: password,
				password_confirmation: password_confirmation
			}
		); 
	},

	/**
	 * 
	 * @param {*} email 
	 * @param {*} password 
	 */
	login: function(
		email,
		password
	) {
		return axios.post(
			CONFIG.API_URL + '/login', {
				email: email,
				password: password
			}
		);
	},

	logout: function() {
		return axios.post(
			CONFIG.API_URL + '/logout'
		);
	},

	/**
	 * 
	 * @param {*} email 
	 */
	sendPasswordResetLink: function (
		email
	) {
		return axios.post(
			CONFIG.API_URL + '/password/sendResetLink', {
				email: email
			}
		);
	},

	/**
	 * 
	 * @param {*} email 
	 * @param {*} token 
	 */
	confirmPasswordResetToken: function (
		email,
		token
	) {
		return axios.post(
			CONFIG.API_URL + '/password/confirmPasswordResetToken', {
				email: email,
				token: token
			}
		);
	},

	/**
	 * 
	 * @param {*} email 
	 * @param {*} password 
	 */
	resetPassword: function (
		email,
		password,
		password_confirmation
	) {
		return axios.post(
			CONFIG.API_URL + '/password/reset', {
				email: email,
				password: password,
				password_confirmation: password_confirmation
			}
		);
	},

    /**
     * GET /api/v1/users
     */
    getUsers: function(url = null) {
        url = url || CONFIG.API_URL + '/users';
        return axios.get(
            url
        );
    },

    /**
     * GET /api/v1/user
     */
    getAuthUser: function() {
        return axios.get( 
            CONFIG.API_URL + 
            '/user' 
        );
    },

    /**
     * GET /api/v1/user/{id}
     */
    getAUser: function(id) {
        return axios.get(
            CONFIG.API_URL +
            '/user/' +
            id
        );
    },

    /** 
     * POST  /api/v1/user
    */
    addUser: function ( 
        name,
        email,
        password,
        role_id
    ) {
        return axios.post( CONFIG.API_URL + '/user', {
            name: name,
            email: email,
            password: password,
            role_id: role_id
        });
    },

    /**
     * PUT /api/v1/user
     */
    updateUser: function ( 
        id,
        name,
        email,
        role_id
    ) {
        return axios.put( CONFIG.API_URL + '/user', {
            id: id,
            name: name,
            email: email,
            role_id: role_id
        });
    },

    /**
     * PUT /api/v1/user/{id}/changePassword
     */
    changeUserPassword: function(
        id,
        password
    ) {
        return axios.put(
            CONFIG.API_URL +
            '/user/' +
            id +
            '/changePassword', {
                id: id,
                password: password
            }
        );
    },

    /**
     * DELETE /api/v1/election
     */
    deleteUser: function (
        id
    ) {
        return axios.delete( CONFIG.API_URL + '/user', {
            params: {
                id: id
            }
        });
    }
};