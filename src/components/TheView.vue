<template>
    <div>
        <main>
            <div class="container py-4">
                <div class="row g-3">
                <div class="col col-4">
                    <AppCard title="제목1" contents="내용1"/>
                </div>
                <div class="col col-4">
                    <AppCard :title="post.title" :contents="post.contents"/>
                </div>
                <div class="col col-4">
                    <AppCard/>
                </div>
                <div class="col col-4">
                    <AppCard/>
                </div>
                <div class="col col-4">
                    <AppCard/>
                </div>
                <div class="col col-4">
                    <AppCard/>  
                </div>
            </div>
            </div>
        </main>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard
    },
    setup () {
        const post = reactive({
            title: '제목2',
            contents: '내용2'
        })
        
        return { post };
    }
}
</script>

<style lang="scss" scoped>

</style>