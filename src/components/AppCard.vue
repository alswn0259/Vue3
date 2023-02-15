<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title red">{{ title }}</h5>
                <p class="card-text" :class="classes.red">{{ contents }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, useCssModule } from 'vue'
export default {
    props: [
        'title',
        'contents'
    ],
    setup () {
        // const style = useCssModule();

        const color = ref('red');
        color.value = 'yellow';
        return { color };
    }
}
</script>

<style module="classes">
.red {
    color: v-bind(color) !important;
}
</style>

<!-- <style scoped>
.red {
    color: red;
}
</style> -->

