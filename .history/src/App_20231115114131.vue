<template>
  <div class="wrapper">
    <Category v-for="i in Category" 
            :key="i.Category"
            :bgcolor="i.bgcolor" 
            :image="i.image" 
            :Product="i.Product"
            :quantity="i.quantity"></Category>

  
  </div>

  <br>

  <div class="promotion-container">
    <Promotion v-for="i in Promotion" :key="i.Promotion"
            :colorBackground="i.colorBackground" 
            :description="i.description"
            :productImages="i.productImages"
            :btnbgcolor="i.btnbgcolor"
            :btntext="i.btntext">

    </Promotion>

  </div>
  
  <br>
  
  <!-- <p class="btn-container"><Button>dfdsfs</Button></p> -->
  
  <!-- <div class="btn-container">
    <Button v-for="i in Button" 
            :key="i.Button"
            :btnbgcolor="i.btnbgcolor" 
            :btntext="i.btntext" >
    </Button>

  
  </div> -->
 

 
  

</template>

<script>
import Category from "./components/Category.vue";
import Button from "./components/Button.vue";
import Promotion from "./components/Promotion.vue";

export default{
  name: "App",
  components:{
    Category,
    Button,
    Promotion,
    
  },

  data(){
    return{
      Category: [
        {
          bgcolor: "#F2FCE4",
          // image: "./src/assets/burger.png",
           image: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "14 items"
        },
        {
          bgcolor: "#FFFCEB",
          // image: "./src/assets/persimmon.png",
          Product: "Peach",
          quantity: "17 items"
        },
        {
          bgcolor: "#ECFFEC",
          image: "./src/assets/kiwi.png",
          Product: "Oganic Kiwi",
          quantity: "21 items"
        },
        {
          bgcolor: "#FEEFEA",
          image: "./src/assets/apple.png",
          Product: "Red Apple",
          quantity: "68 items"
        },
        {
          bgcolor: "#FFF3EB",
          image: "./src/assets/snack.png",
          Product: "Snack",
          quantity: "34 items"
        },
        {
          bgcolor: "#FFF3FF",
          image: "./src/assets/plum.png",
          Product: "Black plum",
          quantity: "25 items"
        },
        {
          bgcolor: "#F2FCE4",
          image: "./src/assets/cabbage.png",
          Product: "Vegetables",
          quantity: "65 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "./src/assets/headphone.png",
          Product: "Headphone",
          quantity: "33 items"
        },
        {
          bgcolor: "#F2FCE4",
          image: "./src/assets/almondSnack.png",
          Product: "Cake & Milk",
          quantity: "54 items"
        }, {
          bgcolor: "#FFF3FF",
          image: "../src/assets/orange.png",
          Product: "Orange",
          quantity: "63 items"
        },
      ],

      // Button: [
      //   {
      //     btnbgcolor: "#3BB77E",
      //     btntext: "Shop now",
      //   },
      //   {
      //     btnbgcolor: "red",
      //     btntext: "click now"
      //   },
      // ],

      Promotion: [
        {
          colorBackground: "#F0E8D5",
          // productImages: "./src/assets/onoin.png",
          productImages: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",  
          description: "Everyday Fresh & Clean with Our Products",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#F3E8E8",
          // productImages: "./src/assets/juice.png",  
          productImages: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          description: "Make your Breakfast Healthy and Easy",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#E7EAF3",
          // productImages: "./src/assets/vegetable.png",
          productImages: "https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1701043200&Signature=gtg1cO~4v5ZqoHMzDxg9miPzD8lTJ4w~pPhQJLKxSSQbcrVjPGE10797E8i~ouDnBAohwcPzDxjFG~m6yczt0gW01h-gVKAE-MX1sI5CyuAgRLyc3JgPMlUDOEmpLLlAyc4U2rhgD~JyEfVRP63vqYetTlaacTN2U8qZPTnS52SnTsE2jZ1eqont~HETHTJBk0OmvB99bB2MoL0Ic8a4q283M2Gyva5IvU7cNbD3l5hYONbRv2SImo1iGsGERVGyNMpC5f83YFG67dlyZgzDHRjtwsVbrWvTYpjopHOmwGIdFxp04qdGDlKbtWd~tq3hi15~HqDfLhq7rWaheo1meg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",  
          description: "The best Organic Products Online",
          btnbgcolor: "#FDC040",
          btntext: "Shop now",
        },

      ]
    }
  },
}

</script>

<style scoped>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #242222; */
  padding: 2px;
  gap: 24px;
}
.promotion-container{
  display: flex;
  justify-content: center;
  /* background: rgb(147, 137, 137); */
  padding: 2px;
  gap: 24px;

}


</style>