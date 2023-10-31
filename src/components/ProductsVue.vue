<template>
    <h2>New Products</h2>
    <div v-for="(product) in producto" :key="product.id" class="contenedor">
      <ProductCard :producto="product" />  
    </div>   
</template>

<script>
import ProductCard from './ProductCard.vue'
import axios from 'axios';

export default {
  name: 'ProductsVue',
    components: {
        ProductCard
    },
  data() {
    return {
      producto: []
    };
  },
  methods: {
        getProducts() {
            axios.get(`https://fakestoreapi.com/products`).then(response => {
                this.producto = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    },

    mounted() {
        this.getProducts();
    }


}

</script>

<style scoped>
.contenedor{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: red;
}
</style>