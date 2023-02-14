<template>
    <div>
        <div id="modifiers">
            <div @click="clickDiv">
                DIV 영역
                <p @click.self="clickP">
                    P 영역
                    <!-- <span @click.stop="clickSpan"> SPAN 영역 </span> -->
                    <span @click="clickSpan"> SPAN 영역 </span>
                    <a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
                </p>
            </div>
            <!-- <a href="https://naver.com" @click.prevent="clickA">a 영역</a> -->
        </div>
        <button @click.once="clickDiv">once</button>
    </div>
</template>

<script>
export default {
    setup () {
        const clickDiv = () => {
            console.log('clickDiv');
            // location.href = 'htttps://naver.com';
        };
        const clickP = () => {
            console.log('clickP');
        };
        const clickSpan = (e) => {
            console.log('clickSpan');
            // e.stopPropagation(); // 이거 지원한는게 stop modify
            // alert('좋아요');
        };
        const clickA = (e) => {
            // e.preventDefault(); // 이벤트 막는 기능
            alert('click A');
        }

        return {
            clickDiv,
            clickP,
            clickSpan,
            clickA
        }
    }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
    padding: 40px;
}
#modifiers div {
    background-color: lightslategrey;
}
#modifiers p {
    background-color: grey;
}
#modifiers span {
    display: block;
    background-color: darkgrey;
}
</style>