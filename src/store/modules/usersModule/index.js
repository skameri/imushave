const usersModule = {
    namespaced: true,
    state() {
        return {
            usersData: [
                {
                    id: 1,
                    name: "",
                    email: "",
                    password: ""
                }

            ],
            authenticated: null
        }
    },
    getters: {
        authenticated(state) {
            return state.authenticated //
        }

    },
    mutations: {
        authentication(state, payload) {
            let user = state.usersData.filter(e => e.email === payload.email)
            if (user.password === payload.password) {
                state.authenticated = user
            }else{
                console.log("wrong password")
            }
        },
        newUser(state, payload) {
            state.usersData.push(payload)
        },
        updateUserInfo(state,payload){
            state.usersData.find(e => state.authenticated.id === e.id).name = payload.name
            state.usersData.find(e => state.authenticated.id === e.id).email = payload.email
            state.usersData.find(e => state.authenticated.id === e.id).password = payload.password
        }
    },
    actions: {
        authenticate({commit},payload){
            commit("authenticate",payload)
        },
        registerUser({ commit }, payload) {
            commit("newUser", payload)
            commit("authentication", payload)
        },

        updateInfo({ commit }, payload){
            commit("update_user_info",payload)
        },
        

    }
}