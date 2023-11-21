<template>
    <h1> producto {{id}}</h1>
    <h2>{{producto.title}}</h2>
    <h2>{{producto.price}}</h2>
    <h2>{{producto.description}}</h2>
    <h2>{{producto.category}}</h2>

</template>

<script>

import axios from 'axios';
export default {


  name: "ProductsVue",


  data() {
    return {
        id: this.$route.params.id,
        producto: ""
    };
  },
  methods: {
        getProducts() {
            axios.get(`https://fakestoreapi.com/products/1`).then(response => {
                this.producto = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    },

    mounted() {
        const parametro = this.$route.params.id;
        axios.get(`https://fakestoreapi.com/products/${parametro}`).then(response => {
                this.producto = response.data;
            }).catch((error) => {
                console.log(error);
            });
    }

};
</script>
