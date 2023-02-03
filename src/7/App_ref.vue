<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="addMessage">add click</button>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup () {
        const message = ref('hello Vue!');

        const addMessage = () => {
            message.value = message.value + '!';
            
        }
        console.log(message);
        console.log('message:', message.value);
        console.log('message typeof:', typeof message.value);
        return {
            message,
            addMessage
        }
    }
}
</script>

<style lang="scss" scoped>

</style>