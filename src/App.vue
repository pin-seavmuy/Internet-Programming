<template>
  <div class="wrapper">
    <Category v-for="i in Category" :key="i.Category"
   :bgcolor="i.bgcolor" 
            :image="i.image" 
            :Product="i.Product" 
            :quantity="i.quantity">

  </Category>
  </div>
  

</template>

<script>
import Category from "./components/Category.vue";

export default{
  name: "App",
  components:{
    Category,
  },

  data(){
    return{
      Category: [
        {
          bgcolor: "#F2FCE4",
          image: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1699833600&Signature=TQRrNFrsGB3Wl0DWirVW8C5sZqpXz-oM5D8vyvcnGdXMnkCj-mvjJW9iGpGlcYIWiZCjrGeCSjLGTjXB73l-WsNy6B4LR3gGyBckdaFv7DzWCc0LMbcDJpMUh0PwGOxymQEQrxNvah6qoDYYdPGhi3MCkCb-rZq5U1Nw6BvGrn58zCEcyPtqRljbLM~vztpm33OdUi6XBzUpscXCplwlwecgIT6-F5EK1W2Wyiit3JheygBbDFPe60mys~b3WwthjTU52fDJUssK-KT7Mnj6PqVe0JC3j7AoPnRWcaQC7di~~tfy8p8~8UHJ8o2g31Je0mDSqnbg9YHTHBGrLAFRuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "14 items"
        },
        {
          bgcolor: "#FFFCEB",
          image: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1699833600&Signature=ReB-ACp4ZHwx-KnKawaftMI0r-4wHOzgkuQNvDz4gKr3pbU1DOV9wPzqVzD5xoIQky3NmxOgpyvHqgOf30GqOVYVTGqZ-fCf-GpU3a~qX6WyKTMC~J203nZHFVOPIlOKLkMv4p5uvu8GDKuiykrSKXm1pvM9gpltD6Rqi2-cv5qr3lFjfEPv4jy~5N8YXifYLUysVejDLfchKgSV8XqmwM4kBy2dYX97IbiXpXLKFd0meAuo41mKtF2zlnclc2I8boDAHrCvYz6SjNSr4GQgaXUeJVGX52NaqJ-5a6fQYDj6jVc7hPmNaryj7S4cwYB-tl2zT41u6sThXxLx-AsS1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          Product: "Cake & Milk",
          quantity: "14 items"
        },

      ]
    }
  },
}

</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242222;
  padding: 2px;
  gap: 32px;
}
</style>