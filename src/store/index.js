import Vue from "vue";
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
//import moduleA from './modules/moduleA'



Vue.use(Vuex)


const state = {
    counter: 1000,
    students: [
        { id: 100, name: 'a', age: 18 },
        { id: 101, name: 'b', age: 19 },
        { id: 102, name: 'c', age: 20 },
        { id: 103, name: 'd', age: 21 }
    ],
    info: { id: 104, name: 'e', age: 33 }
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        state: {
            name: 'yyu'
        },
        getters:{
            newName(state, getters, rootState) {
                return state.name + rootState.Info.name;
            }
        },
        mutations: {
            toUpdateModuleName({ state, getters, rootState }) {
                return getters.newName + rootState.Info.id;
            }
        },
        actions :{
            aUpdateModuleName(context) {
                context.commit('toUpdateModuleName')
            }
        }
    }
})

export default store