<template>
    <div class="banner">
        <p>{{ description }}</p>
        <my
    </div>
</template>

<script>
import myButton from "./Button.vue"
export default {
    name: "Promote",
    components:{
        myButton,
    },
    props:{
        description: String,
    }
}
</script>

<style scoped>
.banner{

}
</style>