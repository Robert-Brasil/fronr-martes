<template>

  <footeer class="footer">
     <div class="footer_contenedor">
        <div class="footer_parrafos">  
        <div class="contento">  
          <p class="footer_parrafo">Sign Up To Our Newsletter.</p>
          <p class="footer_parrafo1">Be the first to hear about the latest offers.</p>
        </div>
        <div class="foter">  
       <div class="footer_parrafo2">
        <p class="footer_your_email">Your Email</p>
        
        </div>
           <button>
            <div class="button_subscribe">Subscribe</div>
          </button>
      </div>
    </div>

    </div>



    
  <div class="tarjetas">  

<div class="tarjeta1">
    <h3>informacion</h3>
    
     <li>About Us</li>
     <li>About Zip</li>
     <li>Privacy Policy</li>
     <li>Search</li>
     <li>Terms</li>
     <li>Orders and Returns</li>
     <li>Contact Us</li>
     <li>Advanced Subscription</li>
    
  </div> 

  
  <div class="tarjeta2">
   <h3>PC Parts</h3>
   <li>CPUS</li>
   <li>Add On Cards</li>
   <li>Hard Drives (Internal)</li>
   <li>Graphic Cards</li>
   <li>Keyboards / Mice</li>
   <li>Cases / Power Spporlies</li>
   <li>Softwared</li>
   <li>Speakers / Headsets</li>
   <li>Motherboards</li>
  </div>

  <div class="tarjeta3">
   <h3>Desktop PCs</h3>
   <li>Custom PCs</li>
   <li>Servers</li>
   <li>MSI All-In-One PCs</li>
   <li>HP/Compaq PCs</li>
   <li>ASUS PCs</li>
   <li>Tecs PCs</li>
  </div>

  <div class="tarjeta4">
   <h3>Laptops</h3>
   <li>Everyday Use Notebooks</li>
   <li>MSI Workstation Series</li>
   <li>MSI Prestige Series</li>
   <li>Tablets and Pads</li>
   <li>Netbooks</li>
   <li>Infinity Gaming Notebooks</li>
  </div>

  <div class="tarjeta5">
   <h3>Address</h3>
   <li>Address: 1234 Street Adress City Address, 1234</li>
   <li>Phones: (00)1234 5678</li>
   <li>We are open: Monday - thursday: 9:00 AM 5:30 PM</li>
   <li>Friday: 11:00 AM - 6:00 PM</li>
   <li>Saturday: 11:00 AM - 5:00 PM</li>
   <li>E-mail: </li>
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
  position: relative;
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
  .contento{
    
    margin-left: 100px;
  }
  .footer_parrafo{
    color: #FFF;
   margin-bottom: 10px;
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
   width: 327px;
   height: 21px;
   
  margin-top: 10px;
  }
  .footer_parrafo2{
    display: flex;
    justify-content: space-between;
    background: black;
    width: 391px;
    height: 50px;
    border-radius: 4px;
    border: 2px solid #FFF;
   
  }
  .footer_your_email{
    color: #FFF;
    margin-left: 15px;
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
    align-items: center;
    width: 151px;
    height: 50px;
    border-radius: 30px;
    margin-left: 20px;
   
  }
  .button_subscribe{
   
    color: #FFF;
   font-family: Poppins;
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
  margin-left: 30px;
  }
  .foter{
    display: flex;
    margin: 70px;
    padding: 15px;
  }

  .tarjetas{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 30%;
    left: 7%;
    width: 1300px;
    border-bottom: 2px solid  rgba(255, 255, 255, 0.50);
  
  }

  li{
    list-style-type: none;
    margin-right: 80px;
    color: white;
  }
  .tarjeta1{
   display: flex;
   justify-content: flex-start;
    background: black;
    width: 168px;
    height: 233px;
    color: #FFF;
   font-family: Poppins;
   font-size: 13px;
   flex-direction: column;
  }
  .tarjeta2{
    display: flex;
   justify-content: flex-start;
   flex-direction: column;
    background: black;
    width: 230px;
    height: 255px;
    color: #FFF;
   font-family: Poppins;
   font-size: 13px;
 
  }
  .tarjeta3{
    display: flex;
   justify-content: flex-start;
   flex-direction: column;
    background: black;
    width: 180px;
    height: 167px;
    color: #FFF;
   font-family: Poppins;
   font-size: 13px;
  }
.tarjeta4{
  display: flex;
   justify-content: flex-start;
   flex-direction: column;
    background: black;
    width: 188px;
    height: 167px;
    color: #FFF;
   font-family: Poppins;
   font-size: 13px;
}
.tarjeta5{
  display: flex;
   justify-content: flex-start;
   flex-direction: column;
    background: black;
    width: 301px;
    height: 185px;
    color: #FFF;
   font-family: Poppins;
   font-size: 13px;
}
  h3{
    color: rgba(255, 255, 255, 0.50);
    margin-right: 80px;
  }

</style>