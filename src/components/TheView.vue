<template>
    <div class="container text-center">
        <div class="row">
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
            <div class="col col-4">
                <AppCard></AppCard>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>