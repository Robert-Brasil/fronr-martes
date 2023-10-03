<template>
<NavegadorVue />

  <div class="hola">hola</div>

  <button>apretar</button>
  <MiComponente prueba="estoy probando" />
  <HelloWorld msg="Welcome to Your Vue.js App" miMensaje="chau nos vemos" />
   <CalculadoraVue /> 
</template>

<script>
import CalculadoraVue from "./components/CalculadoraVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue";
import NavegadorVue from './components/NavegadorVue.vue';


export default {
  name: "App",
  components: {
    HelloWorld,
    MiComponente,
    CalculadoraVue,
    NavegadorVue
  },
};
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
button {
  background-color: blue;
}

.hola {
  border: 5px red solid;
}
</style>
