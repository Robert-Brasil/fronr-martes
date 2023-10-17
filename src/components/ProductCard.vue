<template>
  <div 
  :class="'contenedor' + ver && 'contenedorDos' " 

  @mouseover="ver = true" @mouseleave="ver = false"
  >
  <h3 v-if="ver">
    in stock
  </h3>
    <img
      :src="producto.image"
      alt="imagen"
      class="imagen"
    />
    <div class="estrellas">
      <div class="puntos" puntaje="5"></div>
      <img src="star.svg" class="estrella" />
      <img src="star.svg" class="estrella" />
      <img src="star.svg" class="estrella" />
      <img src="star.svg" class="estrella" />
      <img src="star.svg" class="estrella" />
    </div>
    <h3 class="reviews">
        {{producto.rating.rate}}
    </h3>
    <p>{{producto.title}}</p>
    <h3>${{producto.price}}</h3>
    <button
        v-if="ver"
    >
        Add To Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductoCard",
  props: {
    prueba: String,
  },
  data() {
    return {
      resultado: 0,
      numeroDeCalculo: 1,
      verCalculadora: true,
      ver: true,
      producto: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    };
  },
};
</script>

<style scoped>
.contenedor {
  width: 235px;
  height: 319px;
  padding: 0px 25px;
  gap: 10px;
  transition: 0.5s;
}

.contenedorDos {
  position: absolute;
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
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>