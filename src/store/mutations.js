import * as types from "./mutation_types";
export default  {
    [types.INCREMENT](state) {
        state.counter++;
    },
    [types.SUBSTRACT](state) {
        state.counter--;
    },
    [types.UPDATEINFO](state, payload) {
        state.students[0].age = payload.age;
    },
    updateName(state, payload) {
        state.info.name = payload.name;
    }
}