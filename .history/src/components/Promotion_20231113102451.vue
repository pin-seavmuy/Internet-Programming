<template>
    <div class="promotion" :style="{backgroundColor: colorBackground}">
    <div class="desc-btn">
        <p class="desc">{{ description }}</p>
        <myButton :btnColor="backgroundColor" btntext="text"></myButton>
        <h2
    </div>
        <img :src="productImages" alt="onions">
        <!-- <Button class="buton" :btnColor="backgroundColor" btntext="text" >  </Button> -->

        <!-- <p><Button>dgsfgssdsfdfdgsfdgsdgf</Button></p> -->
        <!-- <i class="uil uil-arrow-right"></i> -->

    </div>
</template>

<script>
import myButton from "./Button.vue";
export default{
    name: "Promotion",
    component: {myButton},
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
    .desc-btn{
        display: flex;
        flex-direction: column;
        background-color: gray;
    }
    img{
        position: relative;
        width: 50%;
        height: 249px;
        border-radius: 0 0 10px 10px;
        margin: 50px 0 0 0;
        display: flex;
        object-fit: contain;
    }
    .buton{
        position: absolute;
        padding: 2px;

    }
</style>