<template>
    <div class="container py-4">
        <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
        <hr/>
        <component :is="currentComp"/>
        <p>{{ obj1 }}</p>
        <p>{{ obj2 }}</p>
    </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// ref 보다 shallowRef 쓰는것이 좋음
// shallowRef는 속성에 대해서는 반응하지 않고 값 자체가 바뀌었을 때만 반응함
const currentComp = shallowRef(DynamicApple);
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '김길동' });
const changeCurrentComp = comp => (currentComp.value = comp);

</script>

<style lang="scss" scoped>

</style>