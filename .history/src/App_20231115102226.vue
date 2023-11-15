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
          image: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "14 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1701043200&Signature=pJmjSAv83QimcuIG72nCNXlteOQAfTnga3FBqQAYSrQaYVGmTBOf6MZnPztVC6~7TSEazb1mNECezHkYjit02Y5mszQ5Gv6lfzgSiMmrllSqyhiZ6C9wx7P1DTJiltNv1lKqYD~z6jcnAQvcL7OxiLnLwKPozj1sSjXdEY8NV5nqy4nu03ZaOUh1DIZCXotAjC6Un0qr4mY8sQ5N1GnwUuZWipeHZ9mTWzXFYfWw2T3dG5RIjoE6uXREuWA4KYdDsMxYMANvr3fjNQp8yVQsllcJS47Det69Yw31CfmZ7TYCtVAOUTSx~A3VG9FM~Qdux4DUzPQwGv8d4wEEgYD4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Peach",
          quantity: "17 items"
        },
        {
          bgcolor: "#ECFFEC",
          image: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1701043200&Signature=qByOdc2Q1X2NFdyrUeztm6EPT9VGoOX6aob66DaYigWyiPcDvDxDOD7qrj7~xlrj-69C8A1xlBY4F8B3FLi6UE~4COX72Nd3IotG3-cjazvOZkOK0yjv32bc4eN-2ravsCdu8avOdTqzciVATjspi57zfpVc-1BHUKxa9UsJOzzLwFwuv~C7sgwDMqhtaXLFCzKJLXsJ3s2pzqOTlU~VfnDkKIiUJDbG7dApsLWYxmf1V7Ajxh6x24ZDvDF6p-4MAVVgPWMC1XW93Y8sh9AfiltKhUdUw4USN3ImgDtWEsf0Qs54kbllOkGsTaHEfshWGoiwa2RRnlWe1jWu~ECA8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          image: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1699833600&Signature=J5bhwwHy-8EhZxf~pW2L9qcDo4RLXcvYDPCdDmOyBY~C3BUWWIc5Wn4KUAtXk2biIeJaZj~Dt0epPcSGz4Rgwcg2AkDQ65CYDztMsj9NKscS40nQVqoIQwIhYSufQdv8zkHFQYJ5htdr3ceMLGwdDyH~qe83FC40J~TtkcPJxjPfAQE8XnbrUox5ER0gS5ndWF02rxHBhdgKz~~HKAxzqmL-oRc1iDDD6VZj3ZFTnamSfk5PdeuhnAFCPRy6uvzZr2xiRSRyGjYsxbqv9gJS0UoUhfgfp3HCZ~smR-dQhoA2Ide4gpWwkzKAJdyb8gUg3ER7yj0joHqU7sklQzrWUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Vegetables",
          quantity: "65 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1699833600&Signature=JpBVjKtSL-91DazsiQO3MgkyvztdmXjSbYG51BReJcHZnW4KQ-BvsNH0KbpvM2K5KrpTPStIe~tLSVmAsmTKQqceGy4tMDiI8~tdkYHulh5vJmOgLLa3IAq~YB-ZffrX-0Wc2cI1twiQzjVGVhik5Hz1EYRuE4xAbzUdW5CFeiK9qN3NtJ9xpuAmJXOsUmUjgTtFYWcorjfpCKmVUkI-g7fwheaQZf8egCO8eaedzshVmprQw2D9KZWpvikTvkOeKg8zZezcDsCxbQ~K~AICT-Xp9dtb8-sTXzkHV0ckb~fEvd6QxbhYBYoVqU9Zs9aO-vdpwiG0QpmZZZLCkpAtDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Headphone",
          quantity: "33 items"
        },
        {
          bgcolor: "#F2FCE4",
          image: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1699833600&Signature=pg4YVVgnJVPU82pFrb5TZqIW86nanB5A2pL2q9iEpqZ8b99ZlW7MxslUGQ0DlGXb-7zRkzEbXgCj-~d-tTYqx5-QqQmg3iXAwjEv5ckj25lnw~mpt2k3X7eFwGUQo42XHSWKNeE1X3hCZOXH0BZAoxIz-Ks8lAJeZ7cLBZEH6xyVYxfQBxoR88F2A8c0BBLPjFgDzZxV0Rsbl4GMm8MYReGby0Z6MJFTHZqNhI4Y0o8cC0fUvN8RuWpvxdPr~mPMufJwPb4U9MeQusBPxo7tiExuix-HvpMNP7fzIAqtJzMIFKqF32trLoWTXFW99G0k-TuVIdRJdJehZIb9ISBbtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "54 items"
        }, {
          bgcolor: "#FFF3FF",
          image: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1699833600&Signature=UdhxWsqWNaFPVYRQR2BywbacMhq8bf1IKHxb9JMgBGKERxpzcPVzDRfozFq2CHgeR62jUwhPApqUiNlRxTrK-p9xFYxLUJEnCBUK~KZefSygBebL~AU-~BJ7njpLqN4UAmwIN~sCH5ugWqUUfP2HRdENjAEFzCqdG9XfWyGCwinAoSs4Nlky8wPdWo2YFTgw~H0jKvF4axGlNJvj2awW4-7t2F6OMUaoo3bNdmnlJvOmNVChiXOPrx1x7W~46GwXlUGsrsHYdW4JWrpLRuwKOC1gFW72hPaj~yITFMn5k3GGsDRBEpo5Uc9KKRwm2IilvuJ-Eo-uok4WmwouNwxPuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          description: "Everyday Fresh & Clean with Our Products",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#F3E8E8",
          productImages: "./src/assets/juice.png",  
          description: "Make your Breakfast Healthy and Easy",
          btnbgcolor: "#3BB77E",
          btntext: "Shop now",
        },
        {
          colorBackground: "#E7EAF3",
          productImages: "./src/assets/vegetable.png",  
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