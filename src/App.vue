<template>
  <div id="app">
    <HelloWorld :gold="gold" :text="text" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import store from '@/store';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return store.quantity;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
