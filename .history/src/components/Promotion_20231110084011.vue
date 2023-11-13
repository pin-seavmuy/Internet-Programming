<template>
    <div class="promotion" :style="{backgroundColor: colorBackground}">
        <p class="desc">{{ description }}</p>
        <img :src="productImages" alt="onions">
        <Button></Button>
        <!-- <p><Button>dgsfgssdsfdfdgsfdgsdgf</Button></p> -->
        <!-- <i class="uil uil-arrow-right"></i> -->

    </div>
</template>

<script>
import Button from "./Button.vue";
export default{
    name: "Promotion",
    component: ()
    props: {
        colorBackground:String, 
        productImages:String, 
        description:String,
        Button:String
    },
    // props: ["colorBackground", "productImages", "description"],
}
</script>

<style>
    .promotion{
        width: 512px;
        height: 300px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    
    .desc{
        width: 50%;
        height: 100%;
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
    img{
        /* position: relative; */
        width: 50%;
        height: 249px;
        border-radius: 0 0 10px 10px;
        margin: 50px 0 0 0;
        display: flex;
        object-fit: contain;
    }
</style>