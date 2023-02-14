<template>
    <div>
        <h2>{{ counter }}</h2>
        <h2>{{  message }}</h2>
        <button @click="increament">click!</button>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup () {
        const counter = ref(0);
        const message = ref('Hello Vue3');
        const increament = () => {
            counter.value++;
        }

        return {
            counter,
            message,
            increament,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>