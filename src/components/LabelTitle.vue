<template>
        <label>
            이름
            <!-- v-model="userName" -->
            <input 
                v-model="value"
                type="text"/>
        </label>
        <!-- :value="modelValue"
        @input="event => ($emit('update:modelValue',event.target.value))" -->
</template>

<script>
import { computed } from 'vue';
export default {
    props: ['title', 'label'],
    emits: ['update:title'],
    setup (props) {
        const value = computed({
            get() {
                return props.title;
            },
            set(value) {
                emit('update:title', title );
            }
        })
        return { value }
    }
}
</script>

<style lang="scss" scoped>

</style>