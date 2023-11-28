<template>

<div class="contenedor">
    <nav class="contenedor_nav_texto">
    <div class="contenedor_comillas">
        "
    </div>
    <div class="contendor_texto">
        My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
    </div>
    <div class="contenedor_autor">
        - Tama Brown
    </div>
    </nav>
    <nav class="contenedor_nav_leaveypuntos">
        <div class="contedor_leaveus">
        <img src="./../assets/Frame34.jpg" class="contenedor_leaveus_img_rectangulo"/>
    </div>
    <div class="contedor_puntos">
        <img src="./../assets/Component17.png" class="contenedor_leaveus_img_puntos"/>
    </div>
</nav>
</div>


</template>

<script>
export default {
  name: "leaveVue",
  props: {
    prueba: String,
  },
}
</script>


<style scoped>
.contenedor {
    width: 1160px;
    height: 310px;
    background: #F5F7FF;
    
  ;
}

.contenedor_nav_texto {
    padding: 4%;
    padding-inline: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    justify-content:space-around;
    align-items: center;
}
.contenedor_comillas {
    
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;

    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

.contendor_texto {
    display: flex;
    width: 850px;
    height: 103.5px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;

    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.contenedor_autor {
    display: flex;
    width: 922px;
    height: 36px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 30;

    color: #000;
    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.contenedor_nav_leaveypuntos {
    width: 800;
    padding-inline: 80px; 
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;

}
.contenedor_leaveus_img_rectangulo {
    display: inline-flex;
    padding: 8px 26px;
    align-items: center;
    gap: 10px;
    position: relative;
    top: -40px; left: -40px;
    
 
}
.contedor_puntos {
    display: inline-flex;
    padding: 8px 26px;
    
    position: relative;
    top: -40px
}
</style> 

    
 