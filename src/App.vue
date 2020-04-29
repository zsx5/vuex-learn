<template>
  <div id="app">
    <h2>-------App---------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import * as types from "./store/mutation_types";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    add(){
      this.$store.commit(types.INCREMENT);
    },
    sub(){
      this.$store.commit(types.SUBSTRACT);
    }
  }
}
</script>

<style>
</style>
