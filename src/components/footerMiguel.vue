<template>

  <footeer class="footer">
     <div class="footer_contenedor">
        <div class="footer_parrafos">  
        <div>  
          <p class="footer_parrafo">Sign Up To Our Newsletter.</p>
          <p class="footer_parrafo1">Be the first to hear about the latest offers.</p>
        </div>
       <div class="footer_parrafo2">
         <p class="footer_your_email">Your Email</p>
         <button>
            <div class="button_subscribe">Subscribe</div>
        </button>
    </div>
      </div>
    </div>
  </footeer>

</template>

<script setup>

</script>

<style scoped>
  
  .footer{
    display: flex;
   
    background: black;
    width: 1500px;
    height: 520px;
    flex-shrink: 0;
    border-style: solid;
  
  }
  .footer_contenedor{
    display: flex;
 
  
  }
  .footer_parrafos{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    width: 1500px;
  }
  .footer_parrafo{
    color: #FFF;

   font-family: Poppins;
   font-size: 38px;
   font-style: normal;
   font-weight: 500;
   line-height: 132.5%;
  }
  .footer_parrafo1{
    color: #FFF;
   text-align: center;
   font-family: Poppins;
   font-size: 16px;
   font-style: normal;
   font-weight: 300;
   line-height: 132.5%;
  }
  .footer_parrafo2{
    width: 391px;
    height: 50px;
    border-radius: 4px;
    border: 2px solid #FFF;
   
   
   background: black;
  }
  .footer_your_email{
    color: #FFF;
    
   text-align: center;
   font-family: Poppins;
   font-size: 14px;
   font-style: normal;
   font-weight: 300;
   line-height: 20px;
  }
  button{
    background: blue;
    display: flex;
    width: 151px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 30px;
  }
  .button_subscribe{
    color: #FFF;

text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }
</style>