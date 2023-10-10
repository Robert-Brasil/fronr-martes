<template>
    
    <header class="header">
        <div class="header__logo">
            <img src="./../assets/asterisco.png" class="header__logo__img" />
            <h1 class="header__logo__titulo">Pryde <span class="header__logo__titulo--negrita"> Beauty</span></h1>            
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
        background-color: #ff0000;
        width: min-content;
    }

    nav{
        display: flex;
        flex-direction: "row";
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
    }
    .header__logo__titulo--negrita{
        font-weight: 700;

    }
</style>
