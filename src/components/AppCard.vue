<template>
    <div>
        <div class="card">
            <div class="card-body">
                {{ $props }}
                <!-- type : news, notice -->
                <h5><span class="badge bg-secondary">{{ typeName }}</span></h5>
                <h5 class="card-title red mt-2">{{ title }}</h5>
                <p class="card-text" :class="classes.red">{{ contents }}</p>
                <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, useCssModule } from 'vue'
export default {
    props: {
        type: {
            type: String,
            default: 'news',
            validator: (value) => {
                return ['news', 'notice'].includes(value);
            },
        },
        title: {
            type: String,
            required: true,
        },
        contents: {
            type: String,
            required: true,
        },
        isLike: {
            type: Boolean,
            default: false,
        },
        // 객체나 배열 default 설정할때 기본함수를 반환하는 팩토리 함수 선언해야함
        // 팩토리 함수 : 어떤 함수가 객체를 반환한다면 이 함수를 팩토리 함수라 부른다.
        obj: {
            type: Object,
            default: () => ({})
        } 
    },
    emits: [''],
    setup (props, context) {
        // const style = useCssModule();

        console.log('props.title: ', props.title);
        const typeName = computed(() => props.type === 'news' ? '뉴스' : '공지사항');
        const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');

        const toggleLike = () => {
            // 오류남 하위 -> 상위 변수 바꿀때
            // props.isLike = !props.isLike;

            // 하위 -> 상위 변수 바꾸는 방법
            context.emit('toggleLike');

        }

        const color = ref('red');
        color.value = 'yellow';
        return { color, typeName, isLikeClass, toggleLike };
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

