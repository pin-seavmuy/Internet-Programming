<template>
    <button class="button" :style="{backgroundColor: btncolor}">
        <p>{{ btntext}}</p>
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
        btncolor: "red",
        
    }
}
</script>

<style>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    .button{
        width: 110px;
        display: flex;
        /* padding: 8px 15px; */
        /* background-color: blueviolet; */
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 12px;
        /* gap: 10px; */
        border-radius: 3px;
        border: none;
        /* box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10); */


    }
</style>