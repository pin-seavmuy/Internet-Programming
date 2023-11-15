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
          image: "./src/assets/burger.png",
          Product: "Cake & Milk",
          quantity: "14 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "./src/assets/persimmon.png",
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
          image: "./src/assets/kiwi.png",
          Product: "Headphone",
          quantity: "33 items"
        },
        {
          bgcolor: "#F2FCE4",
          image: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1701043200&Signature=ku2-TlVzwdx8vQkO5evcQ9lYiZ7pa25hkkW~W8Q4dUamLcd79akJ3MAiaKJm1L1dBk9pRr5bHMkaL2QyDLuBam5P~ww2zQTjKYF9vb8m1c~ZKqxx2XzcO-ivWYaUNN2dy6qm1hTnErhQWVOpvXZ3Cb5IH3~zraXFob1Sa4IQH8Tpq7UJ4V462dFFdByy4rfa8~ws34AzoKn9QTGWKlaYZYOaUqyqI7n9z843StdY7QyjF4v382hFdccYx8WeIdKAanH9Ii~gj2E-pnmbPUzmSrwLQp4mhomR3lNM0mh-emOmuFjzrBHNOOAvdBs-gltESpCUi4stDgQucLmtwkwQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "54 items"
        }, {
          bgcolor: "#FFF3FF",
          image: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1701043200&Signature=JxcqdQZEapxcGc0zHoFUSJ2YOsHK6I1G2x54vW-7pk2K1FJWR27dJrRhoXt3Xt6fcpIXJsCVBX-kS-83PcZTJb-XNIIoZdxJzjml~HLHKcDtXpNrj2DQzfjFDaIQhrdOgSg~j7mYmiFgexGhJtc8jfFWCExCVN7ekRGMrVbr7zIcBDNuCx-WDyTfGOA8YxMJLwU4G~plPCReD2kyUiIuGfNu2EAIVdnz0rTqx175IbGJfEBJMVaCUSY-MJQpv1eqNfmGCkUKu8KWWuYdGUmjJW-azdxcUvIoiMjl~rO7328PmpATd4jsjZdUScn3XAsYbn6gWKHFIt1GA4LGcVkbBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          productImages: "./src/assets/onoin.png",
          // productImages: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",  
          description: "Everyday Fresh & Clean with Our Products",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#F3E8E8",
          productImages: "./src/assets/juice.png",  
          // productImages: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          description: "Make your Breakfast Healthy and Easy",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#E7EAF3",
          productImages: "./src/assets/vegetable.png",
          // productImages: "https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1701043200&Signature=gtg1cO~4v5ZqoHMzDxg9miPzD8lTJ4w~pPhQJLKxSSQbcrVjPGE10797E8i~ouDnBAohwcPzDxjFG~m6yczt0gW01h-gVKAE-MX1sI5CyuAgRLyc3JgPMlUDOEmpLLlAyc4U2rhgD~JyEfVRP63vqYetTlaacTN2U8qZPTnS52SnTsE2jZ1eqont~HETHTJBk0OmvB99bB2MoL0Ic8a4q283M2Gyva5IvU7cNbD3l5hYONbRv2SImo1iGsGERVGyNMpC5f83YFG67dlyZgzDHRjtwsVbrWvTYpjopHOmwGIdFxp04qdGDlKbtWd~tq3hi15~HqDfLhq7rWaheo1meg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",  
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