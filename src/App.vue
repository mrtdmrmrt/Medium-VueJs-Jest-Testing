<template>
  <div id="app">
    <div class="row">
      <img alt="Vue logo" src="./assets/vue_jest.png">
    </div>
    <div class="row">
      <MdButton class="ml-2 mt-2" size="small">Deneme</MdButton>
      <MdButton class="ml-2 mt-2" customClass="primary">Deneme</MdButton>
      <MdButton class="ml-2 mt-2" customClass="success">Deneme</MdButton>
      <MdButton class="ml-2 mt-2" customClass="warning">Deneme</MdButton>
      <MdButton class="ml-2 mt-2" customClass="danger" size="large">Deneme</MdButton>
    </div>
    
  </div>
</template>

<script>

import MdButton from './components/MdButton.vue'
export default {
  name: 'App',
  components: {
    MdButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ml-2{
  margin-left: 1rem;
}
.mt-2 {
  margin-top: 1rem;
}
</style>
