/*
|-------------------------------------------------------------------------------
| VUEX modules/user.js
|-------------------------------------------------------------------------------
| The Vuex data store for the user
*/

import UserAPI from '../api/user.js';

export const user = {
    state: {
		loginLoadStatus: 0,
		loginResponse: {},
		registerLoadStatus: 0,
		registerResponse: {},
		logoutLoadStatus: 0,
		logoutResponse: {},
        users: {},
        usersLoadStatus: 0,
        userPagination: {},
        user: {},
        userLoadStatus: 0,
        aUser: {},
        aUserLoadStatus: 0,
        addUserLoadStatus: 0,
        addUserResponse: {},
        updateUserLoadStatus: 0,
        updateUserResponse: {},
        changeUserPasswordLoadStatus: 0,
        changeUserPasswordResponse: {},
        deleteUserLoadStatus: 0,
		deleteUserResponse: {},
		bearerToken: ''
    },
    actions: {
		register({ commit }, data) {
			alert(JSON.stringify(data))
			commit('setRegisterLoadStatus', 1);

			UserAPI.register(
				data.name, 
				data.email,
				data.password,
				data.password_confirmation
			).then((response) => {
				commit('setRegisterLoadStatus', 2);
				commit('setRegisterResponse', response);
			}).catch((response) => {
				commit('setRegisterLoadStatus', 3);
				commit('setRegisterResponse', response);
			});
		},
		login({ commit }, data) {
			commit('setLoginLoadStatus', 1);

			UserAPI.login(
				email,
				password
			).then((response) => {
				commit('setLoginLoadStatus', 2);
				commit('setLoginResponse', response);
			}).catch((response) => {
				commit('setLoginLoadStatus', 3);
				commit('setLoginResponse', response);
			});
		},
		logout({ commit }, data) {
			commit('setLogoutLoadStatus', 1);

			UserAPI.logout().then((response) => {
				commit('setLogoutLoadStatus', 2);
				commit('setLogoutResponse', response);
			}).catch((response) => {
				commit('setLogoutLoadStatus', 3);
				commit('setLogoutResponse', response);
			});
		},
        loadUsers({ commit }, data) {
            commit('setUsersLoadStatus', 1);

            UserAPI.getUsers(
                data.url
            ).then(function (response) {
                commit('setUsersLoadStatus', 2);
                commit('setUsers', response.data.data);
                commit('setUserPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function () {
                commit('setUsersLoadStatus', 3);
                commit('setUsers', {});
            });
        },
        loadAuthUser({ commit }) {
            commit('setUserLoadStatus', 1);

            UserAPI.getAuthUser()
                .then(function (response) {
                    commit('setUserLoadStatus', 2);
                    commit('setUser', response.data.data);
                })
                .catch(function () {
                    commit('setUserLoadStatus', 3);
					commit('setUser', {});
					// commit('setBearerToken', '');
                });
        },
        loadAUser({ commit }, data) {
            commit('setAUserLoadStatus', 1);

            UserAPI.getAUser(
                data.id
            ).then(function (response) {
                commit('setAUserLoadStatus', 2);
                commit('setAUser', response.data.data);
            }).catch(function () {
                commit('setAUserLoadStatus', 3);
                commit('setAUser', {});
            });
        },
        addUser({ commit }, data) {
            commit('setAddUserLoadStatus', 1);

            UserAPI.addUser(
                data.name,
                data.email,
                data.password,
                data.role_id
            ).then(function (response) {
                commit('setAddUserLoadStatus', 2);
                commit('setAddUserResponse', response.data);
            }).catch(function () {
                commit('setAddUserLoadStatus', 3);
                commit('setAddUserResponse', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        updateUser({ commit }, data) {
            commit('setUpdateUserLoadStatus', 1);

            UserAPI.updateUser(
                data.id,
                data.name,
                data.email,
                data.role_id
            ).then(function (response) {
                commit('setUpdateUserLoadStatus', 2);
                commit('setUpdateUserResponse', response.data);
            }).catch(function () {
                commit('setUpdateUserLoadStatus', 3);
                commit('setUpdateUserResponse', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        changeUserPassword({ commit }, data) {
            commit('setChangeUserPasswordLoadStatus', 1);

            UserAPI.changeUserPassword(
                data.id,
                data.password
            ).then(function (response) {
                commit('setChangeUserPasswordLoadStatus', 2);
                commit('setChangeUserPasswordResponse', response.data);
            }).catch(function () {
                commit('setChangeUserPasswordLoadStatus', 3);
                commit('setChangeUserPasswordResponse', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        deleteUser({ commit }, data) {
            commit('setDeleteUserLoadStatus', 1);

            UserAPI.deleteUser(
                data.id
            ).then(function (response) {
                commit('setDeleteUserLoadStatus', 2);
                commit('setDeleteUserResponse', response.data);
            }).catch(function () {
                commit('setDeleteUserLoadStatus', 3);
                commit('setDeleteUserResponse', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
		setLoginLoadStatus(state, status) {
			state.loginLoadStatus = status;
		},
		setLoginResponse(state, response) {
			state.loginResponse = response;
		},
		setRegisterLoadStatus(state, status) {
			state.registerLoadStatus = status;
		},
		setRegisterResponse(state, response) {
			state.registerResponse = response;
		},
		setLogoutLoadStatus(state, status) {
			state.logoutLoadStatus = status;
		},
		setLogoutResponse(state, response) {
			state.logoutResponse = response;
		},
        setUsers(state, users) {
            state.users = users;
        },
        setUsersLoadStatus(state, status) {
            state.usersLoadStatus = status;
        },
        setUserPagination(state, data) {
            let meta = data.meta;
            let links = data.links;

            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                to: meta.to,
                total: meta.total,
                next_page_url: links.next,
                prev_page_url: links.prev
            };

            state.userPagination = pagination;
        },

        setUser(state, user) {
            state.user = user;
        },
        setUserLoadStatus(state, status) {
            state.userLoadStatus = status;
        },
        setAUser(state, user) {
            state.aUser = user;
        },
        setAUserLoadStatus(state, status) {
            state.aUserLoadStatus = status
        },
        setAddUserLoadStatus(state, status) {
            state.addUserLoadStatus = status;
        },
        setAddUserResponse(state, Response) {
            state.addUserResponse = Response;
        },
        setUpdateUserLoadStatus(state, status) {
            state.updateUserLoadStatus = status;
        },
        setUpdateUserResponse(state, Response) {
            state.updateUserResponse = Response;
        },
        setChangeUserPasswordLoadStatus(state, status) {
            state.changeUserPasswordLoadStatus = status;
        },
        setChangeUserPasswordResponse(state, Response) {
            state.changeUserPasswordResponse = Response;
        },
        setDeleteUserLoadStatus(state, status) {
            state.deleteUserLoadStatus = status;
        },
        setDeleteUserResponse(state, Response) {
            state.setDeleteUserResponse = Response;
		},
		setBearerToken(state, token) {
			state.bearerToken = token;
		}
    },
    getters: {
		getLoginLoadStatus(state) {
			return state.loginLoadStatus;
		},
		getLoginResponse(state) {
			return state.loginResponse;
		},
		getRegisterLoadStatus(state) {
			return state.registerLoadStatus;
		},
		getRegisterResponse(state) {
			return state.registerResponse;
		},
		getLogoutLoadStatus(state) {
			return state.logoutLoadStatus;
		},
		getLogoutResponse(state) {
			return state.logoutResponse;
		},
        getUsers(state) {
            return state.users;
        },
        getUsersLoadStatus(state) {
            return state.usersLoadStatus;
        },
        getUserPagination(state) {
            return state.userPagination;
        },
        getUser(state) {
            return state.user;
        },
        getUserLoadStatus(state) {
            return state.userLoadStatus;
        },
        getAUser(state) {
            return state.aUser;
        },
        getAUserLoadStatus(state) {
            return state.aUserLoadStatus;
        },
        getAddUserLoadStatus(state) {
            return state.addUserLoadStatus;
        },
        getAddUserResponse(state) {
            return state.addUserResponse;
        },
        getUpdateUserLoadStatus(state) {
            return state.updateUserLoadStatus;
        },
        getUpdateUserResponse(state) {
            return state.updateUserResponse;
        },
        getChangeUserPasswordLoadStatus(state) {
            return state.changeUserPasswordLoadStatus;
        },
        getChangeUserPasswordResponse(state) {
            return state.changeUserPasswordResponse;
        },
        getDeleteUserLoadStatus(state) {
            return state.deleteUserLoadStatus;
        },
        getDeleteUserResponse(state) {
            return state.setDeleteUserResponse;
        },
		getBearerToken(state) {
			return state.bearerToken;
		}
    }
};