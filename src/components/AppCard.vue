<template>
    <div class="card">
        <div class="card-header">
            <slot name="header">#Header</slot>
        </div>
        <div class="card-body">
            <slot>#body</slot>
        </div>
        <div class="card-footer text-muted">
            <slot name="footer">#footer</slot>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>