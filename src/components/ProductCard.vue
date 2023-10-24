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
      <h3 v-if="ver">in stock</h3>
      <img :src="producto.image" alt="imagen" class="imagen" />
      <div class="estrellas">
        <div class="puntos" puntaje="5"></div>
        <img src="star.svg" class="estrella" />
        <img src="star.svg" class="estrella" />
        <img src="star.svg" class="estrella" />
        <img src="star.svg" class="estrella" />
        <img src="star.svg" class="estrella" />
      </div>
      <h3 class="reviews">
        {{ producto.rating.rate }}
      </h3>
      <p>{{ producto.title }}</p>
      <h3>${{ producto.price }}</h3>
      <button v-if="ver">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductoCard",
  props: {
    prueba: String,
    producto: Array
  },
  data() {
    return {
      resultado: 0,
      numeroDeCalculo: 1,
      verCalculadora: true,
      ver: false,
     
    };
  },
};
</script>

<style scoped>
.contenedor {
  width: 235px;
  height: 319px;
  position: relative;
}

.contenedor__variable--chico {
  transition: 0.5s;
  width: 235px;
  height: 319px;
  position: absolute;
  border: 1px solid #dddddd;
    background-color: #ffffff;
}

.contenedor__variable--grande {
  transition: 0.5s;
  position: absolute;
  top: -20px;
  width: 235px;
  height: 400px;
  border: 1px solid #dddddd;
  z-index: 1;
  background-color: #ffffff;
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
.estrellas {
  display: flex;
  flex-direction: row;
  position: relative;
  width: min-content;
}
.estrella {
  width: 13px;
  height: 13px;
  border: solid black 1px;
}
.puntos {
  position: absolute;
  background-color: yellow;
  height: 20px;
  width: 100%;
  z-index: -1;
}
</style>