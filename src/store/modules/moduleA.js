const state = {
    name:  'yyu'
}

const getters = {
    newName(state, getters, rootState){
        return state.name + rootState.Info.name;
    }
}
const mutations = {
    toUpdateModuleName({ state, getters, rootState}){
        return getters.newName + rootState.Info.id;
    }
}

const actions = {
    aUpdateModuleName(context){
        context.commit('toUpdateModuleName')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}