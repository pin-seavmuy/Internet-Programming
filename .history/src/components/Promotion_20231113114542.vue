<template>
    
    <myButton btncolor="pink" btntext="buy cat"/>
</template>

<script>
import Button from "./Button.vue";
export default{
    name: "Promotion",
    component: {
        Button,
    },
    props: {
        colorBackground:String, 
        productImages:String, 
        description:String,
        backgroundColor:String,
        text:String,
        

    },
    // props: ["colorBackground", "productImages", "description"],
}
</script>

<style>
    .promotion{
        width: 512px;
        height: 300px;
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    
    .desc{
        /* width: 50%; */
        /* height: 100%; */
        width: 271px; 
        height: 48px;
        color: var(--NestMart-TextHeading, #253D4E);
        font-size: 24px;
        font-weight: 700;
        /* text-align: center; */
        padding: 10%  0 0 10%;
        /* margin: -220px 0 0 20px */
        /* position: absolute;
        top: 265px;
        left: 30px; */
    }
/* ============================================= */
    .desc-btn{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .btn{
        position: absolute;
        top:240px;
        left: 48px;
        border: none;
        border-radius: 3px;
    }
/* '========================================' */
    img{
        position: relative;
        width: 50%;
        height: 249px;
        border-radius: 0 0 10px 10px;
        margin: 50px 0 0 0;
        display: flex;
        object-fit: contain;
    }
    /* .buton{
        position: absolute;
        padding: 2px;

    } */
</style>