import axios from "axios"

const citiesModule = {
    namespaced: true,



    state() {
        return {
            isLoaded: false,
            api_url: "https://api.weatherapi.com/v1/forecast.json?",
            api_key: import.meta.env.VITE_API_URL,
            api: [],

            days:[
                {day: "ორშაბათი", min_temp: null},
                {day: "სამშაბათი", min_temp: null},
                {day: "ოთხშაბათი", min_temp: null},
                {day: "ხუთშაბათი", min_temp: null},
                {day: "პარასკევი", min_temp: null},
                {day: "შაბათი", min_temp: null},
                {day: "კვირა", min_temp: null},
            ],

            activeCity: 0,

            showCities: false,
            georgianCities: [
                { id: 0, name: 'Tbilisi' },
                { id: 1, name: 'Batumi' },
                { id: 2, name: 'Kutaisi' },
                { id: 3, name: 'Rustavi' },
                { id: 4, name: 'Gori' },
                { id: 5, name: 'Zugdidi' },
                { id: 6, name: 'Samtredia' },
                { id: 7, name: 'Senaki' },
                { id: 8, name: 'Signagi' },
                { id: 9, name: 'Borjomi' },
                { id: 10, name: 'Marneuli' },
                { id: 11, name: 'Sokhumi' },
                { id: 12, name: 'Gagra' },
            ]
        }
    },

    mutations: {
        changeCity(state, payload) {
            state.activeCity = +payload

        },
        toggle(state) {
            state.showCities = !state.showCities
        },

        SAVE_DATA(state, api) {
            state.api.push(api)
            console.log(state.api)
        }


    },


    actions: {

        fetchData({ commit, state }) {
            for (let a = 0; a < state.georgianCities.length; a++) {

                axios.get(state.api_url + state.api_key + `=${state.georgianCities[a].name}&days=7`)
                    .then(result => commit("SAVE_DATA", {
                        id: a, data: result.data
                    })
                    )

            }
            state.isLoaded = true
        }

    },

    getters: {

        days(state){

            return state.days

        },

        isLoaded(state) {
            return state.isLoaded
        },
        activeCity(state) {
            return state.activeCity
        },
        cities(state) {
            return state.georgianCities
        },
        toggle(state) {
            return state.showCities
        },
        api(state) {
            return state.api
        }
    },

}

export default citiesModule