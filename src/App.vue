<template>
<NavegadorVue />
<<<<<<< HEAD
<ProductsVue />
=======
<ProductCard />
<Componente_Leave />
>>>>>>> b641a911a81aa16d63d696d10befe8fd7ceb1220
  <div >hola</div>

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
<<<<<<< HEAD
import ProductsVue from './components/ProductsVue.vue';

=======
import ProductCard from './components/ProductCard.vue';
import Componente_Leave from './components/leaveVue.vue';
>>>>>>> b641a911a81aa16d63d696d10befe8fd7ceb1220

export default {
  name: "App",
  components: {
/*     HelloWorld,
    MiComponente,
    CalculadoraVue, */
    NavegadorVue,
<<<<<<< HEAD
    ProductsVue
=======
    ProductCard,
    Componente_Leave
>>>>>>> b641a911a81aa16d63d696d10befe8fd7ceb1220
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
