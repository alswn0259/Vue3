<template>
    <div>
        <button @click="printEventInfo('Hello Vue3', $event)">inline event handler</button>
    </div>
    <input type="text" @keyup="onKeyupHandler"/>
</template>

<script>
export default {
    setup () {
        const printEventInfo = (message, event) => {
            console.log('message: ', message);
            console.log('event.targt: ', event.target);
            console.log('event.target.tagName: ', event.target.tagName);
        };
        const onKeyupHandler = event => {
            console.log('event.key: ', event.key);
        };
        return { printEventInfo };
    }
}
</script>

<style lang="scss" scoped>

</style>