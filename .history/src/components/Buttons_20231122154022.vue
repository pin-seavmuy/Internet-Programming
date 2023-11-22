<template>
  <button></button>
    <span>

    </span>
    <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="arrow" />
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default {
    name: "Buttons",
    props: [""]
    
}
</script>

<style>

</style>