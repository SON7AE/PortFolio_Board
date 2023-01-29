// import Vue from "vue";
import { createApp } from 'vue';
import App from './App';
import router from './routes/index';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// Vue3 Markdown
import { VMarkdownEditor } from 'vue3-markdown';
import 'vue3-markdown/dist/style.css';

const APP = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    APP.component(key, component);
}
APP.use(router).use(ElementPlus).mount('#app');
