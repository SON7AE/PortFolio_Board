// import Vue from "vue";
import { createApp } from 'vue';
import App from './App';
import router from './routes/index';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

createApp(App).use(router).use(ElementPlus).use(ElementPlusIconsVue).mount('#app');
