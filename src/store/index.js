import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		userId: '',
		token: '',
		communityId: '',
		roleId: '',
	},
	mutations: {
		SET_USERID: (state, userId) => {
			state.userId = userId
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_COMMUNITYID: (state, communityId) => {
			state.communityId = communityId
		},
		SET_ROLEID: (state, roleId) => {
			state.roleId = roleId
		},
	},
	actions: {

	}
})
export default store
