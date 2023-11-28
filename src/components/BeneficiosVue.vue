<template>
  <div class="externalFrame">
    <div class="externalFrame__internalFrame">
      <div class="externalFrame__support">
        <div class="externalFrame__internalFrame__image">
          <img src="../assets/BeneficiosVue/blueEllipse.svg" class="ellipse">
          <img src="../assets/BeneficiosVue/support.svg" class="supportIcon">
        </div>
        <div class="externalFrame__internalFrame__title">Product Support</div>
        <div class="externalFrame__internalFrame__text">
          Up to 3 years on-site warranty available for your peace of mind.
        </div>
      </div>
      <div class="externalFrame__account">
        <div class="externalFrame__internalFrame__image">
          <img src="../assets/BeneficiosVue/blueEllipse.svg" class="ellipse">
          <img src="../assets/BeneficiosVue/account.svg" class="accountIcon">
        </div>
        <div class="externalFrame__internalFrame__title">Personal Account</div>
        <div class="externalFrame__internalFrame__text">
          With big discounts, free delivery and a dedicated support specialist.
        </div>
      </div>
      <div class="externalFrame__priceTag">
        <div class="externalFrame__internalFrame__image">
          <img src="../assets/BeneficiosVue/blueEllipse.svg" class="ellipse">
          <img src="../assets/BeneficiosVue/priceTag.svg" class="priceTagIcon">
        </div>
        <div class="externalFrame__internalFrame__title">Amazing Savings</div>
        <div class="externalFrame__internalFrame__text">
          Up to 70% off new Products, you can be sure of the best price.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.externalFrame {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 273px;
  background: #F5F7FF;
}

.externalFrame__internalFrame {
  padding: 20px;
  display: flex;
  justify-content: space-around; /* Espacio uniforme entre los elementos internos */
}

/* Estilos comunes para las imágenes */
.externalFrame__internalFrame__image {
  position: relative;
  margin-bottom: 20px;
  text-align: center;
}

.externalFrame__internalFrame__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
}

/* Estilos específicos para cada sección */
.externalFrame__support,
.externalFrame__account,
.externalFrame__priceTag {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 20px;
}

.externalFrame__internalFrame__title {
  color: #000000;
  font: 700 18px/132.5% "Poppins", sans-serif;
  padding: 20px;
}

.externalFrame__internalFrame__text {
  color: #000000;
  font: 400 14px/140% "Poppins", sans-serif;
  opacity: 0.7;
  width: 265px;
}
</style>
