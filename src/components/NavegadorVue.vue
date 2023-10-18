<template>
    
    <header class="header">
        <div class="header__logo">
            <img src="./../assets/asterisco.png" class="header__logo__img" height="25"/>
           <div class="header_logo_letras">   <h1 class="header__logo__titulo">Pryde </h1> <h1> <span class="header__logo__titulo--negrita"> Beauty</span></h1>  </div>     
        </div>
        <nav>
            <a href="">
                PRODUCTS
            </a>
            <a href="">
                ABOUT US
            </a>
            <a href="">
                COLLECTION
            </a>
            <div class="logos2"> 
              <img alt="search.svg" src="../assets/search.svg">
              <img alt="user.jpg" src="../assets/user.jpg" >
              <img alt="carrito.png" src="../assets/carrito.png">
              <img alt="menu-burger.svg" src="../assets/menu-burger.svg" height="20">
           </div>
        </nav>        
    </header>
</template>

<script>



</script>

<style scoped>
    h1{
        color: #1A1A1A;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
     
        width: min-content;
    }

    nav{
        display: flex;
        flex-direction: "row";
        width: 600px;
        justify-content: flex-end;
        justify-content: space-between;
    
    }

    .header{
        display: flex;
        flex-direction: "row";
        align-items: center;
        justify-content: space-between;
       
    }
    .header__logo{
        display: flex;
        flex-direction: "row";
        width: 200px;
        justify-content: space-around;
        align-items: center;
    }
    .header__logo__titulo--negrita{
        display: flex;
        font-weight: 700;
        margin-left: 10px;
        
    }
    .header_logo_letras{
        display: flex;
        width: 150px;
       
    }
    .logos2{
      display: flex;
      flex-direction: row;
     justify-content: space-between;
     
     width: 250px;
    }
    a{
        text-decoration: none;
        
    }
</style>
