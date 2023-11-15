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
          image: "./src/assets/persimmon.png",
          Product: "Oganic Kiwi",
          quantity: "21 items"
        },
        {
          bgcolor: "#FEEFEA",
          image: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1701043200&Signature=gDrZIVRru4Xf7EFvOaJVa4zMaK34T89ooaYiiy0jHrv964HOgcNHySwHRI5tkzWDuLzCxG6-br~aNpZQg~UmRpJXt5s9njR2-BigWxO5MsyxH9KYjg9LZijaX7ytULJYu2MvLT1IRJrsU5n1xRrPrYZKf-AGOTymzm9ktMqPTe0UwT6PtEYQkVQCo71QGuV2g6AT3kTa8EwuslwSsamcDLB-5e9xa85jGRMRVvgTVdT1i4uvnHvo4TBfrH3fj1QFayytVdc~tBwW3SBRN2ZmTRnxDD-c1v4~mnvDKYrvNr9r-zoytKQZ~3IBqxh0juQdNIPFL3Wfobh2P-T5Z~lh3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Red Apple",
          quantity: "68 items"
        },
        {
          bgcolor: "#FFF3EB",
          image: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1701043200&Signature=ZTDPY7B01efjpBqFLuHwk~Pg5VXX0cxe9J3pgleHiJrNskdw4l5vtQOUUS9f~BS39NhifrWsQBJSdRmJ4ffGs3OWQYwy91Wi6LymiGCq5P02FAtTNL65RQRZs4P2CbHqnMp8QMzWMIbWXsMVDgA-obIjY2ARIjp9OtRN1O6s3eL5uYVmwOzTFNx0S6LZBjeDTRntin7~LEYoDUeqhb3xGyXpxeGSgUSRR9twcPdtmctH3q1Z2fz7sYMrDZCrUI8aY4-LXkZFLunBQQFCArSRpyhtEVFarrTxDGIywWSjkeG9QsVPv56RBxrOEKfvIsqp9vkBOwjc-I09vMysym8qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Snack",
          quantity: "34 items"
        },
        {
          bgcolor: "#FFF3FF",
          image: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1701043200&Signature=S7xJJ2tNncqoFtfs0z49egQAhXp68WqXLqkKTd6iNqcX3dBe4VXW~0su0UwkKM5UuZzel51xlYQARTxfk6WGSm7Ny~CDaaMnClTd6oB917Wf~5-ALMdJjPQ2Xw~6cWxFZdtoEGMFGVSmK0CN~OeQviLSaiV2txUMPV7WaY9onC6M3NaAw1t7J231BGpJQoNeshOhAWuaOwm0X5TBmRHvMdthLe0UgdvjRS009zbvz-VKZ0k2ySDZ~4lu6qZt1KLpYm7blzbEFANdKwuzO5AiaEdoFz4CRQre0Dh46pzNcj18eiCeAbI8SDc6kR3qi7ocvE0bIGe4kQdRsiJgszQfQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Black plum",
          quantity: "25 items"
        },
        {
          bgcolor: "#F2FCE4",
          image: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1701043200&Signature=jU~KGSCuxDZGaLS4p~Vhsve5DzsdY4MRm-GTsUC3hEAfHAy1xS-k9MYt15epdPytx4i1LVIFYGe9Bwbb-05S~UozKrJXPGNLO5kvn6Ci2O76VuDsYGXlT~YIbykAhMo26jzKZL-Wjh1T1gW36~g1t~nAFzW0cCjjwS62SOdo7JqqfcoA3Wl~G839qkElsj1OI~tzTQ8jHk4mXwyZVtBvu4PugxCZhyqP1vbmgCIS8IBesU8ZcB-P10L1FH-ydo-QKfxFn02nAALdg9DUDQcqa5ivHktuspJfVCRaZFF911cSVYEUmH5RH9dIzdWRggtT1pn~sCYCEqlTMyiDprJVtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Vegetables",
          quantity: "65 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1701043200&Signature=hrxIqePlHrVgOqGbOzXbpuZgoQl5KndljWGx5jMYf4gLll7Q~jR3fuRxAkwSRtkcComhPSR1UHNMurnw8fXV93jBJckQfXGBluo0A-dX9YEHEkmjtU6GSy~fc4m99cyUr82uaX2xoBW1h~qHFqHLEfH~fr12p471~VE5VO~oadkM6NbcFgHAkwPkjY~xLGvhjmSTJ03deKpSiwDEmV17TCntJvGfJrjg3LCQivogaZ8-CQQfyvpP5wwGScvRkQeeKMgQZ49wS8uYxd0X9l9hDO6NQhwjOQmq8uxHw4shPKfscaMxCMpRQin8r1RPKj-jC0eu4ipWU3gAG2uE1x2bDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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