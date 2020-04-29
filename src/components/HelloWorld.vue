<template>
  <div class="hello">
    <h2>------hello--------</h2>
    <h2>all students: {{$store.state.students}}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>超过20岁的：{{ $store.getters.olderThan20}}</h2>
    <h2>有几个：{{ $store.getters.olderThan20Length}}</h2>
    <h2>超过{{age}}的：{{$store.getters.olderThanAge(age)}}</h2>
    <h2>info: {{$store.state.info}}</h2>
    <button @click="updateAge(32)">修改年龄</button>
    <button @click="updateName('shx')">修改名字</button>
    <!-- <h2>模块A中的名字：{{$store.state.a.name}}</h2>
    <h2>模块A中的getters:{{$store.getters.newName}}</h2>
    <button @click="updateModuleName">修改模块A中的名字</button> -->
  </div>
</template>

<script>
import * as types from "../store/mutation_types"; //定义的常量别名
export default {
  name: 'HelloWorld',
  data () {
    return {
      age: 18,
    }
  },
  methods:{
    updateAge(age){
      this.$store.commit({  //mutations的另一种提交方式
        type: '' + [types.UPDATEINFO], //定义的常量别名
        age: age
      })
    },
    updateName(name){
      this.$store.dispatch('aUpdateName', {
        name: name,
        success: () => console.log("修改成功")
      }).then(res => console.log(res))     //dispatch对应的aUpdateName里有返回promise, 谁（此处是updateName）调了dispatch, 谁就接收返回的promise.  所以可以直接使用.then
    },
    updateModuleName(){
      this.$store.commit('aUpdateModuleName')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
