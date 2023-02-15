<template>
    <div>
        <form type="text">
            <input v-model="title" type="text" placeholder="Title"/>
            <textarea v-model="contents" placeholder="Contents"></textarea>
        </form>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
    setup () {
        const title = ref('');
        const contents = ref('');

       
        // 콜백함수 안의 데이터 변경이 일어나면 실행됨
        watchEffect(() => {
            console.log('watchEffect');
            console.log(title.value);
            console.log(contents.value);
        });

        return { title, contents };
    }
}
</script>

<style lang="scss" scoped>

</style>