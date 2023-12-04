<template>

    <div class="barrasup">
         <div class="textobarra">
         <p class="fecha">Lunes a viernes de &nbsp;<label class="fecha2"> 9:00 a 17:30&nbsp;
             <img src="./../assets/HidenSearch/hs_flecha.png" class="hsflecha_img"/></label></p>
         <p class="dire"> Visite nuestro showroom en 1234 Street Adress City Address, 1234 &nbsp;<span style="color: #fff;">Contáctenos</span></p>   
         <p class="llamenos">Call Us: (00) 1234 5678
                 <img src="./../assets/HidenSearch/hs_face.png" class="hsface_img"/>
                 <img src="./../assets/HidenSearch/hs_insta.png" class="hsinsta_img"/></p>
          </div>    
     </div>
      
    <div class="hidenmenu">
     <div class="boxmenu">
         <div class="logo">
         <img src="./../assets/HidenSearch/hs_logo.png" class="hslogo_img"/>
         </div>
         <div class="contenedorMenu">
                <div class="menup1">Laptops</div> 
                <div class="menup2">Mochilas</div> 
                <div class="menup3">bijouterie</div> 
                <div class="menup4">Tegnologia</div> 
                <div class="menup5">Camperas</div> 
                <div class="menup6">Electródomesticos</div> 

                <div class="bottondeal">
                    <botton name="button">Our Deals</botton>
                </div>
                
                <div class="contenedorbuscar">
                    <input type="search" class="buscador" placeholder="Search entiere store here...">
                </div> 
                <!-- 
                <div id="container">
                <form role="search" method="get" id="searchform" action="">
                    <label for="s">
                        <img for ="check" src="img/nav/hamburger-menu.png" alt="" class="header__menu"> 
                    <i class="icon-search" ></i>
                    </label>
                    <input type="text" value="" placeholder="Buscar" class="" id="s" />
                </form>
                </div>-->
             
                <div class="carcontenedor">
                    <div class="carrito">
                    <img src="./../assets/HidenSearch/hs_carrito.png" class="hscarrito_img"/>
                    </div>
                </div>
         
            <div class="ucontenedor">
                <div class="usuario"> 
                <img src="./../assets/HidenSearch/hs_usuario.png" class="hsusuario_img"/>
                </div>
            </div>
       </div>
     </div>
    </div>
     </template>
 
 
 <style scoped>
 .barrasup{
    display: flex;
    justify-content: center;
    width: 1920px;
    height: 44px;
    flex-shrink: 0;
    background: #020202;
 }
 
.textobarra{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.fecha{
    display: flex;
    width: 450px;
    height: 27px;
    flex-shrink: 0;
    color: var(--Color---5, #A2A6B0);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    align-items: baseline;
}

.fecha2{
    display: flex;
    width: 300px;
    height: 27px;
    flex-shrink: 0;
    color: var(--Color---5, #ffffff);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
}
.hsflecha_img{
    width: 16px;
    height: 14.769px;
    flex-shrink: 0;
}

.dire{
    display: flex;
    width: 750px;
    height: 44px;
    flex-shrink: 0;
    color: #ACACAC;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.contacto{
    display: flex;
    width: 457px;
    height: 44px;
    /*flex-direction: row;*/
    /*justify-content: space-around;*/
    flex-shrink: 0;
    color: #faf0f0;
    stroke-width: 2px;
    stroke: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.hsvector7_img{
    width: 73px;
    height: 2px;
    flex-shrink: 0;
}
.llamenos{
    display: flex;
    /*justify-content: flex-end;*/
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.hsface_img{
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    padding: 0px 4px 14px 8px;
    justify-content: center;
    align-items: center;
}
.hsinsta_img{
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    padding: 0px 4px 14px 8px;
    justify-content: center;
    align-items: center;
}
.boxmenu{
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  width: 1920px;
  height: 92px;

  }
.hidenmenu{
    display: flex;
    width: 1920px;
    height: 136px;

    /*top: -1095px;
    left: -16506px;*/
}

.contenedorMenu{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

.menup1 {
    display: flex;
    width: 65px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.menup2 {
    display: flex;
    width: 80px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.menup3 {
    display: flex;
    width: 85px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.menup4 {
display: flex;
    width: 85px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.menup5 {
    display: flex;
    width: 100px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.menup6 {
    display: flex;
    width: 140px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

body{
  font-size:20px;
}

#container{
  margin:auto;
  padding:0em 0 0;
  text-align:center;
  justify-content: center;
 
  }

#searchform{
  display:inline;
  font-size:1em;
  border-radius: 8em;
  border:0.1em solid rgba(243, 239, 239, 0.966);
  box-shadow:0 0 0.3em rgba(60,60,60,0.4);
  padding:0.3em;
  background:white;
}
#s{
  transition:all 0.2s ease-out;
  width:1px;
  border-radius:0;
  box-shadow:none;
  outline: none;
  padding:0;
  margin:2px;
  border:0;
  background-color: transparent;
  opacity:0;
}
#s:focus{
  width:20em;
  opacity:1;
}
label{
  padding-left: 1px;
  display:inline-block;
  margin-top:0.3em;
  color:rgb(240, 234, 234);
  text-shadow:0 0 0.1em rgba(0, 0, 0, 0.3);
  position: relative;
  left:0.1em;
  ;
}

.buscador{
    width: 300px; 
    height: 50px;
    border-radius: 31px;
    flex-shrink: 0;
    background: var(--Color---1, #F5F7FF);
    
}
.bottondeal{
    display: inline-flex; 
    margin-right: 50px;
    margin-left: 20px;
    padding: 8px 26px;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 2px solid var(--Color---3, #0156FF);
    color: var(--Color---3, #0156FF);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.hssearch_img{
    width: 19px;
    height: 19px;
    flex-shrink: 0;
}

.hslogo_img{
    display: flex;
    width: 85px;
    height: 69px;
    padding: 13.945px 26.231px 15px 25.297px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.xcontenedor{
    width: 62.419px;
    height: 92px;
    flex-shrink: 0;
}
.hsx_img{
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    align-content: center;
    padding: 40px 20px;    
}

.carcontenedor {
    width: 62.419px;
    height: 92px;
    flex-shrink: 0;

}

.hscarrito_img{
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    align-content: center;
    padding: 40px 20px;  
    
}

.hscarrito_img{
    width: 33px;
    height: 32px;
    top: 72px;
    left: 1563px;
    align-content: center;
    padding: 35px 20px;  
}

.usuario{
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 36px;
    align-content: center;
    padding: 35px 20px;  
    }

.ucontenedor {
    width: 62.419px;
    height: 92px;
    flex-shrink: 0;
}
 
 </style>