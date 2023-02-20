<template>
    <div class="p-3 bg-danger">
        <!-- v-bind="$attrs" -->
        <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>
        <!-- {{ $attrs }} -->
    </div>
</template>

<script>
export default {
    // 상속 비활성화(div 클릭해도 클릭 안됨)
    // inheritAttrs: false, 
    setup (props, { emit }) {
        // console.log('context.attrs: ', context.attrs);
        // console.log('class: ', context.attrs.class);
        // console.log('id: ', context.attrs.id);
        // console.log('onclick: ', context.attrs.onClick);
        const sayHello = () => {
            emit('sayHello');
        }
        return { sayHello };
    }
}
</script>

<style lang="scss" scoped>

</style>