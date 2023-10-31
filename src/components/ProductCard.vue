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

      <img :src="producto.image" alt="imagen" class="imagen" />
      <p>{{ producto.title }}</p>
      <h3>${{ producto.price }}</h3>
      <button v-if="verBotones" class="contenedor__variable__add">Add To Cart</button>
        <RatingVue :rate="producto.rating.rate * 20 + '%'" ></RatingVue>

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
        }, 500);
      } else {
        this.verBotones = false;
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
  transition: 0.2s;
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
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 300px;
}

.contenedor__variable--chico {
  transition: 0.5s;
  width: 235px;
  height: 319px;
  position: absolute;
  top: 0px;
  border: 1px solid #dddddd;
    padding-top: 0px;

}

.contenedor__variable--grande {
  transition: 0.5s;
  position: absolute;
  top: -40px;
  width: 235px;
  height: 400px;
  border: 1px solid #dddddd;
  z-index: 1;
  background-color: #ffffff;
  padding-top: 26px;
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
}

@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
.imagen {
  width: 150px;
  height: 150px;
}
</style>