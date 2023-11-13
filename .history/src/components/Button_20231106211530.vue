<template>
    <button class="button" :style="{backgroundColor : backgroundcolor}">
        <p>{{text}}</p>
        <p>{{ icons }}</p>
    </button>
</template>

<script>
export default{
    name: "Button",
    props: ["backgroundcolor", "text", ]
}
</script>

<style>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    .button{
        width: 110px;
        display: inline-flex;
        /* padding: 8px 15px; */
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 12px;
        /* gap: 10px; */
        border-radius: 3px;
        border: none;
        /* box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10); */


    }
</style>