<template>
  <div id="app">
    <img src="./assets/bmt.jpeg" alt="">
    <Jumbotron id="jumbotron" />
    <List id="list" />
    <Cards id="cards" />
    <a href="#jumbotron">Back To Top</a>
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
import List from './components/List'
import Cards from './components/Cards'
export default {
  name: 'App',
  components: {
    Jumbotron,
    List,
    Cards
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

img {
  margin-bottom: 60px;
}

#jumbotron {
  margin-bottom: 120px;
}

#list { 
  width: 90%;
  margin: auto;
}

#cards {
  margin-top: 80px;
}
#app a {
     color: #FF7B15;
     padding-bottom: 34px;
 }

 #app a:hover {
    color: #bd5b0f;
  }

  @media (min-width: 780px) {
    #list {
      width: 60%;
    }
  }
</style>
