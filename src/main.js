import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);

app.provide('app-message', 'app message 입니다.');
// vue2에서 global property로 사용 => provide 사용
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');


app.mount('#app');
import 'bootstrap/dist/css/bootstrap.min.css';
