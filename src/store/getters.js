export default  {
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
}