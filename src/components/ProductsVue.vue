<template>
    <h2>New Products</h2>
    <div class="conte">
      <div v-for="(product) in producto" :key="product.id">
        <ProductCard :producto="product" />  
      </div>  
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
.conte{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content:flex-end;
  justify-content:space-around;
  margin: 20px;
  row-gap: 10px;
}

</style>