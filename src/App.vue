<template>
  <div id="app">
    <div class="header">
      <h1>¡Squares!</h1>
      <p class="text"> Remember squares. Find them all. </p>
    </div>
    <Board />
    
  </div>
</template>

<script>

import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text {
  font-size: 12px;
  font-weight: 600;
}
</style>
