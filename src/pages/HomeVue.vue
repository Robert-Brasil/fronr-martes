<template>
<!-- <NavegadorVue />
<ProductCard /> -->



<!--   <button>apretar</button>
  <MiComponente prueba="estoy probando" />
  <HelloWorld msg="Welcome to Your Vue.js App" miMensaje="chau nos vemos" />
  -->
   <ProductsVue />     
   <CalculadoraVue /> 
   <LeaveVue />
   <BeneficiosVue />
</template>

<script>
import LeaveVue from '../components/leaveVue.vue';
/* 
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue"; */
// import NavegadorVue from './components/NavegadorVue.vue';
 import ProductsVue from '../components/ProductsVue.vue';
 import BeneficiosVue from '../components/BeneficiosVue.vue';

import CalculadoraVue from "../components/CalculadoraVue.vue";


export default {
  name: "HomeVue",
  components: {
    /*     HelloWorld,
        MiComponente,
         */
    // NavegadorVue,
    // ProductCard,
    LeaveVue,
    CalculadoraVue,
    ProductsVue,
    BeneficiosVue
},
};
</script>

<style>


</style>
