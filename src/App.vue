<template>
  <HidenMenu />
  <router-view />
  <footerMiguelVue />
</template>

<script>
import HidenMenu from './components/HidenMenu.vue';
import footerMiguelVue from './components/footerMiguel.vue';

export default {
  name: "App",
  components: {
    footerMiguelVue,
    HidenMenu
},
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;600&display=swap');

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
  text-align: left;
}


</style>
