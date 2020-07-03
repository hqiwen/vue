<template>
  <div id="app">
    <Header />
    <content class="mainContainer">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </content>
    <footer>

    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0
}

body {
    font-size: 16px;
    color: #292929;
    line-height: 1.7em;
    font-weight: 400;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-family: "Open Sans", sans-serif;
}

#app mainContainer{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
