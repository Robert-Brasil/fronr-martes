<template>

  <div class="hola">
      hola
  </div>

  <button>apretar</button>
    <MiComponente />
  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MiComponente
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
button{
  background-color: blue;
}

.hola{
  border: 5px red solid;
}
</style>
