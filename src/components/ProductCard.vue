/* 
condicion ? true : false

condicion && true 
*/

<template>
  <div class="contenedor">

    <div
      :class="{
        'contenedor__variable--chico': !ver,
        'contenedor__variable--grande': ver,
      }"
      @mouseover="ver = true"
      @mouseleave="ver = false"
    >

      <h3
        :class="{
          contenedor__variable__stock: true,
          borrar: !verBotones,
          mostrar: verBotones,
        }"
      >
      <img src="../assets/ProductCard/ok.svg" alt="">
        in stock
      </h3>
      <img src="../assets/ProductCard/corazon.svg" 
      :class="{
          contenedor__variable__corazon: true,
          borrar: !verBotones,
          mostrar: verBotones,
        }"
      alt="">
      <img src="../assets/ProductCard/grafica.svg"
      :class="{
          contenedor__variable__grafica: true,
          borrar: !verBotones,
          mostrar: verBotones,
        }"
       alt="">
      <img :src="producto.image" alt="imagen" class="imagen" />
      <p>{{ producto.title }}</p>
      <h3>${{ producto.price }}</h3>
      <button 
              :class="{
          contenedor__variable__add: true,
          borrar: !verBotones,
          mostrar: verBotones,
        }"
      >
            <img src="../assets/ProductCard/carrito.svg"
       alt="">
      Add To Cart
      </button>
      <RatingVue :rate="producto.rating.rate" :count="producto.rating.count" :id="producto.id" />

    </div>
  </div>
</template>

<script>
import RatingVue from './RatingVue.vue';

export default {
  name: "ProductoCard",
  props: {
    prueba: String,
    producto: Array,
  },
    components: {
        RatingVue
    },
  data() {
    return {
      resultado: 0,
      numeroDeCalculo: 1,
      verCalculadora: true,
      ver: false,
      verBotones: false,
    };
  },
  methods: {
    mostrarBotones() {
      if (this.ver) {
        setTimeout(() => {
          this.verBotones = true;
        }, 300);
      } else {
        setTimeout(() => {
          this.verBotones = false;
        }, 300);
      }
    },
  },
  watch: {
    ver() {
      this.mostrarBotones();
    },
  }, 
};
</script>

<style scoped>
.borrar {
  visibility: hidden;
  opacity: 0%;
  transition: 0.1s;
}

.mostrar {
  visibility: visible;
  opacity: 100%;
  transition: 0.5s;
}

.contenedor__variable__stock {
  margin: auto;
  width: 200px;
  height: 20px;
  transition: 0.5s;
  position: absolute;
  left: -50px;
  top: 10px;
  
}

.contenedor {
  width: 235px;
  height: 319px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  background-color: white;
  padding: 25px auto;
}

.contenedor__variable--chico {
  transition: 0.5s;
  width: 235px;
  height: 319px;
  position: absolute;
  top: 0px;
  padding: 25px 0px 25px 0px;
  box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.75);

}

.contenedor__variable--grande {
  transition: 0.5s;
  position: absolute;
  top: -40px;
  width: 235px;
  height: 400px;
  z-index: 1;
  background-color: #ffffff;
  padding-top: 26px;
box-shadow: 0px 0px 9px 3px rgba(125,123,123,0.48);
-webkit-box-shadow: 0px 0px 9px 3px rgba(125,123,123,0.48);
-moz-box-shadow: 0px 0px 9px 3px rgba(125,123,123,0.48);
}

.contenedor__variable__add{
  position: absolute;
  border-radius: 50px;
border: 2px solid var(--Color---3, #0156FF);
color: var(--Color---3, #0156FF);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 8px 20px;
bottom: 17px;
left: 32px;
width: 161px;
z-index: 1;
display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
}

.imagen {
  width: 150px;
  height: 150px;
}

.contenedor__variable__corazon{
  position: absolute;
  top: 51px;
  right: 12px;
  width: 30px;
  height: 30px;
  transition: 0.5s;
}

.contenedor__variable__grafica{
  position: absolute;
  top: 16px;
  right: 12px;
  width: 30px;
  height: 30px;
  transition: 0.5s;
}
</style>