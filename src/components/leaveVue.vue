<template>

<div class="contenedor">
    <div class="contenedor_comillas">
        "
    </div>
    <div class="contendor_texto">
        My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
    </div>
    <div class="contenedor_autor">
        - Tama Brown
    </div>
    <div class="contedor_leaveus">
        <img src="./../assets/Frame34.jpg" class="contenedor_leaveus_img"/>
    </div>
    <div class="contedor_puntos">
        <img src="./../assets/Component17.png" class="contenedor_leaveus_img"/>
    </div>
</div>

</template>

<script>
export default {
  name: "Componente_Leave",
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
}

.contenedor_comillas {
    display: flex;
    width: 46px;
    height: 69px;
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
    flex-shrink: 0;

    color: #000;
    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style> 

    
 