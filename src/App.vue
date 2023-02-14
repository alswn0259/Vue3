<template>
    <div>
        <TheNavbar/>
        <TheView/>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheView from './components/TheView.vue'

export default {
    components: {
        TheNavbar,
        TheView
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>