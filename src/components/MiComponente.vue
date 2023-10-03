<template>
<h1>
        Mi componente
        {{prueba}}
</h1>
<h2>
    {{miVariable}}
</h2>

</template>

<script>
export default {
  name: 'MiComponente',
  props: {
    prueba: String
  },
data() {
        return {
            miVariable: "estoy probando"

        };
    },

}
</script>


<style scoped>
    h1{
        color: red
    }
</style>