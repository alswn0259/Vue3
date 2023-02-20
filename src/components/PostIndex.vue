<template>
    <div>
        <main>
            <div class="container py-4">
                <PostCreate @create-post="createPost"></PostCreate>

                <hr class="my-4"/>
                
                <div class="row g-3">
                    <div v-for="post in posts" :key="post.id" class="col col-4">
                        <PostItem 
                            :title="post.title" 
                            :contents="post.contents" 
                            :type="post.type" 
                            :isLike="post.isLike"
                            @toggle-like="post.isLike = !post.isLike"></PostItem>
                        <!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
                    </div>
                </div>

                <hr class="my-4">
                <LabelInput 
                    v-model="userName"
                    label="이름"
                    class="parent-class"
                    style="color: red"
                    id="parent-id"></LabelInput>
            </div> 
        </main>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
import PostItem from './PostItem.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';

export default {
    components: {
        PostItem,
        PostCreate,
        LabelInput
    },
    setup () {
        const post = reactive({
            title: '제목2',
            contents: '내용2',
        });
        const posts = reactive([
            { id: 1, title: '제목1',  contents: '내용1', isLike: true, type: 'news' },
            { id: 2, title: '제목2',  contents: '내용2', isLike: true, type: 'news' },
            { id: 3, title: '제목3',  contents: '내용3', isLike: true, type: 'news' },
            { id: 4, title: '제목4',  contents: '내용4', isLike: true, type: 'news' },
            { id: 5, title: '제목5',  contents: '내용5', isLike: false, type: 'notice' },
            { id: 6, title: '제목6',  contents: '내용6', isLike: false, type: 'notice' },
        ]);
        const createPost = newPost => {
            console.log('newPost: ', newPost);
            posts.push(newPost);
        }

        const userName = ref('');
        const firstName = ref('');
        const lastName = ref('');
        return { post, posts, createPost, userName, firstName, lastName };
    }
}
</script>

<style lang="scss" scoped>

</style>