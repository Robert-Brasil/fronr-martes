<template class="externalFrame">
  <div class="externalFrame__internalFrame">
    <div class="externalFrame__internalFrame__support">        
      <div class="externalFrame__internalFrame__support__image">
        <img src="../assets/BeneficiosVue/blueEllipse.svg">
        <img src="../assets/BeneficiosVue/support.svg">
      </div>
      <div class="externalFrame__internalFrame__titleSupport">Product Support</div>
      <div class="externalFrame__internalFrame__textSupport">
        Up to 3 years on-site warranty available for your peace of mind.
      </div>
    </div>
    <div class="externalFrame__internalFrame__account">
      <div class="externalFrame__internalFrame__account__image">        
        <img src="../assets/BeneficiosVue/blueEllipse.svg">
        <img src="../assets/BeneficiosVue/account.svg">
      </div>
      <div class="externalFrame__internalFrame__titleAccount">Personal Account</div>
      <div class="externalFrame__internalFrame__textAccount">
        With big discounts, free delivery and a dedicated support specialist.
      </div>
    </div>
    <div class="externalFrame__internalFrame__priceTag">
      <div class="externalFrame__internalFrame__priceTag__image">       
        <img src="../assets/BeneficiosVue/blueEllipse.svg">
        <img src="../assets/BeneficiosVue/priceTag.svg">
      </div>
      <div class="externalFrame__internalFrame__titleSavings">Amazing Savings</div>
      <div class="externalFrame__internalFrame__textSavings">
        Up to 70% off new Products, you can be sure of the best price.
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.externalFrame__internalFrame__support__image {
  position: relative;
  margin-bottom: 20px;
}

.externalFrame__internalFrame__support__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.externalFrame__internalFrame__account__image {
  position: relative;
  margin-bottom: 20px;
}

.externalFrame__internalFrame__account__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.externalFrame__internalFrame__priceTag__image {
  position: relative;
  margin-bottom: 20px;
}

.externalFrame__internalFrame__priceTag__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}




.externalFrame__internalFrame {
  display: flex;
  justify-content: center;
}

/* .externalFrame__internalFrame__support * {
  box-sizing: border-box;
} */
.externalFrame__internalFrame__support {
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  /* justify-content: flex-start; */
  /* position: relative; */
}
.externalFrame__internalFrame__titleSupport {
  color: #000000;
  text-align: center;
  font: 700 18px/132.5% "Poppins", sans-serif;
  /* position: relative; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.externalFrame__internalFrame__textSupport {
  color: #000000;
  text-align: center;
  font: 400 14px/140% "Poppins", sans-serif;
  opacity: 0.699999988079071;
  /* position: relative; */
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .externalFrame__internalFrame__account * {
  box-sizing: border-box;
} */
.externalFrame__internalFrame__account {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  /* justify-content: flex-start; */
  /* position: relative; */
}
.externalFrame__internalFrame__titleAccount {
  color: #000000;
  text-align: center;
  font: 700 18px/132.5% "Poppins", sans-serif;
  /* position: relative; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.externalFrame__internalFrame__textAccount {
  color: #000000;
  text-align: center;
  font: 400 14px/140% "Poppins", sans-serif;
  opacity: 0.699999988079071;
  /* position: relative; */
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.externalFrame__internalFrame__titleSupport {
  color: #000000;
  text-align: center;
  font: 700 18px/132.5% "Poppins", sans-serif;
  /* position: relative; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.externalFrame__internalFrame__textSupport {
  color: #000000;
  text-align: center;
  font: 400 14px/140% "Poppins", sans-serif;
  opacity: 0.699999988079071;
  /* position: relative; */
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .externalFrame__internalFrame__priceTag * {
  box-sizing: border-box;
} */
.externalFrame__internalFrame__priceTag {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  /* justify-content: flex-start; */
  /* position: relative; */
}
.externalFrame__internalFrame__titleSavings {
  color: #000000;
  text-align: center;
  font: 700 18px/132.5% "Poppins", sans-serif;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.externalFrame__internalFrame__textSavings {
  color: #000000;
  text-align: center;
  font: 400 14px/140% "Poppins", sans-serif;
  opacity: 0.699999988079071;
  /* position: relative; */
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
