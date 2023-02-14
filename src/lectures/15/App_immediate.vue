<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ reversMessage }}</p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup () {
        const message = ref('Hello Vue3');
        const reversMessage = ref('');

        watch(message, (newValue) => {
            console.log('즉시실행함!!!');
            reversMessage.value = newValue.split('').reverse().join('');
        },
        {
            immediate: true,
        });

        return {
            message,
            reversMessage,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>