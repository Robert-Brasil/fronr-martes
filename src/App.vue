<template>
<NavegadorVue />
<ProductsVue />
<LeaveVue />
  <div >hola</div>

<!--   <button>apretar</button>
  <MiComponente prueba="estoy probando" />
  <HelloWorld msg="Welcome to Your Vue.js App" miMensaje="chau nos vemos" />
   <CalculadoraVue />  -->
</template>

<script>
import LeaveVue from './components/LeaveVue.vue';
/* import CalculadoraVue from "./components/CalculadoraVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue"; 
import NavegadorVue from './components/NavegadorVue.vue';
import ProductsVue from './components/ProductsVue.vue';



export default {
  name: "App",
  components: {
/*     HelloWorld,
    MiComponente,
    CalculadoraVue, */
    NavegadorVue,
    ProductsVue,
    LeaveVue
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
/*titulo*/
h1{
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
/*subTitulo*/
h2{
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
/*navegacion*/
h3{
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
/*texto general*/
p{
  color: #000;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>
