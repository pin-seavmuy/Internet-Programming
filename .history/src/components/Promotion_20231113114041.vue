<template>
    <div class="promotion" :style="{backgroundColor: colorBackground}">
        <div class="desc-btn">
            <p class="desc">{{ description }}</p>
            <myButton class="btn" btncolor="pink" btntext="buy cat"/>
            <!-- <myButton class="btn" btncolor="backgroundColor" btntext="text"></myButton> -->
            
        </div>
        <!-- <img :src="productImages" alt="onions"> -->
        <!-- <Button class="buton" :btnColor="backgroundColor" btntext="text" >  </Button> -->

        <!-- <p><Button>dgsfgssdsfdfdgsfdgsdgf</Button></p> -->
        <!-- <i class="uil uil-arrow-right"></i> -->

    </div>
</template>

<script>
import myButton from "./Button.vue";
export default{
    name: "Promotion",
    component: {
        myButton,
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
    
</style>