<template>
	<form class="mt-7">
		<h1 class="text-center text-lg text-gray-800 m-5">Login</h1>
		<div 
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" 
			role="alert"
			v-if="errors.length">
			<strong class="font-bold">The following error(s) were encountered:</strong>
			<ul>
				<li v-for="(error, index) in errors" :key="index">{{ error }}</li>
			</ul>
			<!-- <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
				<svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
			</span> -->
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
					Email
				</label>
			</div>
			<div class="md:w-2/3">
				<input v-model="credentials.email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="email" placeholder="user@example.com">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
					Password
				</label>
			</div>
			<div class="md:w-2/3">
				<input v-model="credentials.password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-username" type="password" placeholder="******************">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3"></div>
			<label class="md:w-2/3 block text-gray-500 font-bold">
				<router-link to="/auth/forgot-password" class="text-sm underline">
					i forgot my password?
				</router-link>
			</label>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3"></div>
			<div v-if="loginLoadStatus !== 1" class="md:w-2/3">
				<button @click="login(credentials)" class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
					Login
				</button>
				<span class="text-sm text-gray-500">
					Not registered yet? 
					<router-link 
						to="/auth/register"
						class="text-teal-500">
						Click here
					</router-link>
				</span>
			</div>
			<clip-loader v-else :loading="true" color="#38b2ac" size="20px"></clip-loader>
		</div>
	</form>
</template>

<script>
import { Bus } from './../../bus';
export default {
	mounted () {

	},
	created () {

	},
	data () {
		return {
			credentials: {
				email: '',
				password: ''
			},
			errors: []
		}
	},
	computed: {
		loginLoadStatus () {
			return this.$store.getters.getLoginLoadStatus;
		},
		loginResponse () {
			return this.$store.getters.getLoginResponse;
		}
	},
	watch: {
		loginLoadStatus: function (val) {
			if (val === 1) {
				this.errors.splice(0, this.errors.length);
			} else if (val === 2) {
				this.$store.commit('setBearerToken', this.loginResponse.data.token);
				Bus.$emit('reloadApp');
				this.$router.push({
					name: 'home'
				});
			} else if (val === 3) {
				if (this.loginResponse.message) {
					console.log(this.loginResponse);
					this.errors.push("Username/Password mismatch");
				} else {
					this.errors.push("...an unknown error was encountered.");
				}
			}
		}
	},
	methods: {
		checkForm: function () {
			this.errors = [];

			if (!this.credentials.email) {
				this.errors.push('Email required.');
			} else if (!this.validEmail(this.credentials.email)) {
				this.errors.push('Valid email required.');
			}

			if (!this.credentials.password) {
				this.errors.push("Password required.");
			}

			if (!this.errors.length) {
				return true;
			} else {
				return false;
			}
		},
		validEmail: function (email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		login: function (credentials) {
			let validForm = this.checkForm();

			if (validForm && this.loginLoadStatus !== 1) {
				this.$store.dispatch('login', credentials);
			}
		}
	}
}
</script>

<style>

</style>