<template>
<NavegadorVue />

 

<!--   <button>apretar</button>
  <MiComponente prueba="estoy probando" />
  <HelloWorld msg="Welcome to Your Vue.js App" miMensaje="chau nos vemos" />
   <CalculadoraVue />  -->
</template>

<script>
/* import CalculadoraVue from "./components/CalculadoraVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue"; */
import NavegadorVue from './components/NavegadorVue.vue';


export default {
  name: "App",
  components: {
/*     HelloWorld,
    MiComponente,
    CalculadoraVue, */
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

a{
  color: #000;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right: 20px;
}

h3{
  color: #000;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

h4{
  color: #000;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

h5{
  color: #000;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

</style>
