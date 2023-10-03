<template>
    <button @click="()=> verCalculadora = !verCalculadora">
        {{ verCalculadora ? "cerrar calculadora" : "abrir calculadora"}}
    </button>

    <div v-if="verCalculadora">
        <h1>Mi calculadora </h1>
        <input type="number" v-model="numeroDeCalculo"/>
        <button @click="()=> resultado = resultado + numeroDeCalculo">sumar</button>
        <button @click="()=> resultado = resultado - numeroDeCalculo">restar</button>
        <button @click="()=> resultado = resultado / numeroDeCalculo">dividir</button>
        <button @click="()=> resultado = resultado * numeroDeCalculo">multiplicar</button>
        <h2>resultado {{resultado}}</h2>        
    </div>
    <div v-else>
        <h2>Calculadora cerrada</h2>
    </div>

</template>

<script>
export default {
  name: "CalculadoraVue",
  props: {
    prueba: String,
  },
  data() {
    return {
        resultado: 0,
        numeroDeCalculo: 1,
        verCalculadora: true
    };
  },
};
</script>
