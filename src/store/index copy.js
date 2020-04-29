import Vue from "vue";
import Vuex from 'vuex'
import * as types from "./mutation_types";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 100, name: 'a', age: 18},
            { id: 101, name: 'b', age: 19 },
            { id: 102, name: 'c', age: 20 },
            { id: 103, name: 'd', age: 21 }
        ],
        info: {id: 104, name: 'e', age: 33}
    },
    getters: {
        olderThan20(state){
            return state.students.filter(s => s.age >= 20);
        },
        olderThan20Length(state, getters){
            return getters.olderThan20.length;
        },
        olderThanAge(state){
            return function (age) { //定义一个函数用于外部传入参数
                return state.students.filter(s => s.age >= age);
            }
        }
    },
    mutations: {
        [types.INCREMENT](state){
            state.counter++;
        },
        [types.SUBSTRACT](state) {
            state.counter--;
        },
        [types.UPDATEINFO](state, payload){
            state.students[0].age = payload.age;
        },
        updateName(state, payload){
            state.info.name = payload.name;
        }
    },
    actions: {
        aUpdateName(context, payload){  //注意这个方法里的context是store
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    context.commit('updateName', payload)
                    resolve('hahahhh')
                }, 1000);
            })
        }
    },
    modules: {

    }
})

export default store