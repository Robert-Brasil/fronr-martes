<template>
<!-- <NavegadorVue />
<ProductCard /> -->



<!--   <button>apretar</button>
  <MiComponente prueba="estoy probando" />
  <HelloWorld msg="Welcome to Your Vue.js App" miMensaje="chau nos vemos" />
   <CalculadoraVue />  -->
   <LeaveVue />
   <ProductsVue />
</template>

<script>
import LeaveVue from '../components/leaveVue.vue';
/* import CalculadoraVue from "./components/CalculadoraVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue"; */
// import NavegadorVue from './components/NavegadorVue.vue';
 import ProductsVue from '../components/ProductsVue.vue';




export default {
  name: "HomeVue",
  components: {
    /*     HelloWorld,
        MiComponente,
        CalculadoraVue, */
    // NavegadorVue,
    // ProductCard,
    LeaveVue,
    ProductsVue
},
};
</script>

<style>


</style>
