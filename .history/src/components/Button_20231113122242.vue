<template>
    <button :style="{backgroundColor: btncolor}">
        <p class="text">{{btntext}}</p>
        <p>jgkgnjh</p>
        <!-- <p>{{ icons }}</p> -->
        <!-- <i class="uil uil-arrow-right"></i> -->
    </button>
</template>

<script>
export default{
    name: "myButton",
    // props: ["backgroundcolor", "btntext", "icons"]
    props: {
        btntext: String,
        btncolor: String,
        
    }
}
</script>

<style>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    button{
        width: 110px;
        display: flex;
        flex-direction: row;
        /* padding: 8px 15px; */
        
        /* justify-content: center; */
        align-items: center;
        color: black;
        font-size: 12px;
        /* gap: 10px; */
        border-radius: 3px;
        border: none;
        /* box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10); */


    }
    .text{
        font-size: 12px;
        font-weight: 700;
    }
</style>