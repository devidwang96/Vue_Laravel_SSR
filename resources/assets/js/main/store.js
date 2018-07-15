import Vue from 'vue';
import Vuex from 'vuex';
import ServerXHR from '../additional-plugins/ServerXHR';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        Laravel,
        backend_data : {},
        ServerXHR,
    },
    getters: {
        Laravel(state){
            return state.Laravel;
        },
        state(state){
            return state;
        },
    },
    mutations: {
        change_backend_data(state, data) {
            Vue.set(state.backend_data, data.route_name, data.backend_data)
        },
    },

    actions: {
        change_backend_data({commit, state}, data) {
            commit('change_backend_data', data);
        },
    }
});
