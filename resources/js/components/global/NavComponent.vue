<template>
	<nav class="flex bg-white border-b border-gray-200 z-50000 fixed top-0 inset-x-0 h-16 items-center">
		<div class="w-full max-w-screen-xl relative mx-auto px-12">
			<div class="flex items-center">
				<div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
					<div class="flex items-center">
						<router-link 
							to="/"
							class="block lg:mr-4 text-gray-500 hover:text-gray-800 font-medium">
							U D E M E
						</router-link>
					</div>
				</div>

				<div class="flex flex-grow lg:w-1/4 xl:w-4/5">

					
					<div class="w-full lg:px-3 xl:w-3/4 xl:px-6">
						<div class="relative">
							<input class="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal" type="text" placeholder="Search the projects">
							<div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
								<svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" 
									xmlns="http://www.w3.org/2000/svg" 
									viewBox="0 0 20 20">
									<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
								</svg>
							</div>
						</div>
					</div>


					<button type="button" id="sidebar-open" class="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
						<svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>


					<button type="button" id="sidebar-close" class="hidden flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
						<svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
					</button>

					
					<div class="hidden lg:flex lg:items-center lg:justify-between xl:w-3/4 px-6">
						<div class="relative mr-4">
							<ul class="flex">
								<li class="mr-6">
									<router-link class="text-gray-500 hover:text-gray-800" to="/blog">
										Blog
									</router-link>
								</li>
								<li class="mr-6">
									<router-link class="text-gray-500 hover:text-gray-800" to="/project">
										Projects
									</router-link>
								</li>
								<li class="mr-6" v-if="bearerToken">
									<a v-if="logoutLoadStatus !== 1" class="text-gray-500 hover:text-gray-800 cursor-pointer" @click="logout">
										Logout
									</a>
									<clip-loader v-else :loading="true" color="#38b2ac" size="20px"></clip-loader>
								</li>
								<li class="mr-6" v-else>
									<router-link class="text-gray-500 hover:text-gray-800" to="/auth/login">
										Login
									</router-link>
								</li>
								<li class="mr-6">
									<a href="/docs/installation" class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md">
										Donate
									</a>
								</li>
							</ul>
						</div>
						<div class="flex justify-start items-center text-gray-500">
							<a class="block flex items-center hover:text-gray-700 mr-5" href="#">
								<svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/></svg>
							</a>
							<a class="block flex items-center hover:text-gray-700 mr-5" href="#">
								<svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"/></svg>
							</a>
							<a class="block flex items-center hover:text-gray-700" href="/discord">
								<svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 146"><title>Discord</title><path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fill-rule="nonzero"/></svg>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</nav>
</template>

<script>
import { Bus } from './../../bus';

export default {
	created () {
		this.$store.dispatch('loadAuthUser');
	},
	mounted () {

	},
	data () {
		return {

		}
	},
	computed: {
		logoutLoadStatus () {
			return this.$store.getters.getLogoutLoadStatus;
		},
		logoutResponse () {
			return this.$store.getters.getLogoutResponse;
		}
	},
	watch: {
		logoutLoadStatus: function (val) {
			if (val === 2 || val === 3) {
				this.$store.commit('setBearerToken', '');
				Bus.$emit('reloadApp');
			}
		}
	},
	methods: {
		logout () {
			this.$store.dispatch('logout');
		}
	}
}
</script>

<style>

</style>