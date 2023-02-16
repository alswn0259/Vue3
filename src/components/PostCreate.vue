<template>
    <div class="row g-3">
        <div class="col col-2">
            <select v-model="type" class="form-select" aria-label="Default select example">
                <option value="news" selected>뉴스</option>
                <option value="notice">공지사항</option>
            </select>
        </div>
        <div class="col col-8">
            <input type="text" class="form-control" v-model="title"/>
        </div>
        <div class="col col-2 d-grid">
            <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, '김길동')">button</button> -->
            <button class="btn btn-primary" @click="createPost">추가</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    // emits: ['createPost'],
    // 컴포넌트 작동 방식을 더 잘 문서화하기 위해 모든 이벤트를 정의하는 것이 좋다.
    emits: {
        createPost: newPost => {
            console.log('validator: ', newPost);
            if (!newPost) {
                return false;
            } else if (!newPost.title) {
                return false;
            }
            return true;
        }
    },
    setup (props, { emit }) {
        const title = ref('');
        const type = ref('news');
        const createPost = () => {
            const newPost = {
                type: type.value,
                title: title.value
            }
            // { emit } 대신 context 쓰고 context.emit() 해도됨.
            // 아래 방법은 구조 분해할당해서 사용한것
            emit('createPost', newPost);
            type.value = 'news';
            title.value = '';
        }

        return { createPost, title, type }
    }
}
</script>

<style lang="scss" scoped>

</style>