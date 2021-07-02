<template>
  <div id="app">
    <Jumbotron />
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
export default {
  name: 'App',
  components: {
    Jumbotron
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
</style>
