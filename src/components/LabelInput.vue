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
    props: ['modelValue', 'label'],
    emits: ['update:modelValue'],
    setup (props, { emit }) {
        const value = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value );
            }
        });
        return { value }
    }
}
</script>

<style lang="scss" scoped>

</style>