<template>
    <div class="banner">
        <p>{{ description }}</p>

    </div>
</template>

<script>
import myButton from "./Button.vue"
export default {
    name: "Promotion",
    components:{
        myButton,
    },
    props:{
        description: String,
    }
}
</script>

<style scoped>

</style>