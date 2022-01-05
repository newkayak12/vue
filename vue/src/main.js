import Vue from 'vue';
import app from './App.vue';
import router from "@/router";
import eventBus from '@/eventBus'
Vue.use(router)
Vue.use(eventBus)

new Vue(app).$mount('#root')

