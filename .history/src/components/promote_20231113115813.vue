<template>
    <div>
        <p>{{ description }}</p>

    </div>
</template>

<script>
import myButton from "./Button.vue"
export default {
    name: "Promotion",
    components:{
        myButton,
    }
    props:{
        description
    }
}
</script>

<style scoped>

</style>