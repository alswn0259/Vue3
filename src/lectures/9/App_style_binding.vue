<template>
    <div :style="styleObject">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum voluptas expedita magni exercitationem ducimus repudiandae? Deleniti expedita, tempore quo eius nobis corporis! Quas, velit asperiores perferendis quod numquam voluptatem!</div>
        <button @click="fontSize--">-</button>
        <button @click="fontSize++">+</button>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
    setup () {
        // const styleObject = reactive({
        //     color: 'red',
        //     fontSize: '13px',
        // });
        const fontSize = ref(13);
        const styleObject = computed(() => {
            return {
                color: 'red',
                fontSize: fontSize.value + 'px',
            }
        })

        return {
            styleObject,
            fontSize
        }
    }
}
</script>

<style lang="scss" scoped>

</style>