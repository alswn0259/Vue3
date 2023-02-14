<template>
    <div>

    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
    setup () {
        const x = ref(0);
        const y = ref(0);

        const obj = ref({
            count: 0,
        });

        // watch(
        //     () => x.value + y.value, 
        //     (sum, oldValue) => {
        //         console.log('sum: ', sum);
        //         console.log('oldValue: ', oldValue);
        //     },
        // );

        // watch([x, y], ([newX, newY]) => {
        //     console.log(newX, newY);
        // });

        watch(obj, (newValue, oldValue) => {
            console.log('newValue: ', newValue);
            console.log('oldValue: ', oldValue);
            // newValue, oldValue 같은 값 나옴
            // Why? 같은 주소를 참조하고 있기 때문
        });

        // 특정 오브젝트의 속성 검사 할 때
        // watch(() => obj.count, (newValue, oldValue) => {
        //     console.log('newValue: ', newValue);
        // });

        const person = reactive({
            name: '홍길동',
            age: 30,
            hobby: '운동',
            obj: {
                count: 0,
            },
        });

        watch(person, newValue => {
            console.log('newValue: ', newValue);
        }); // deep 감지다함

        watch(() => person.obj, newValue => {
            console.log('newValue: ', newValue); 
            // count 변경해도 감지 안됨
            // obj 자체가 바뀌었을때 감지됨
            // getter 함수는 받아온 그 값이 바꼈는지 아닌지 검사하는 것
        });

        return { x, y, obj, person };

        
    }
}
</script>

<style lang="scss" scoped>

</style>