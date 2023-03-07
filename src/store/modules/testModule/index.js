import axios from "axios";

const testModule = {
    namespaced: true,
    state() {
        return {

            api: [

            ]



        }
    },
    getters: {

        api(state){
            return state.api
        }


    },
    mutations: {

        SAVE_DATA(state,api){
            state.api = api
            console.log(state.api)

        }




    },
    actions: {
        callApi({commit}){
            axios.get("https://items.magischer.de/api/users")
                .then(result => commit("SAVE_DATA", result.data.data)
                )
        }


    }
}
export default testModule