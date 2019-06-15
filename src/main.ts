import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './registerServiceWorker';
import './css/base.css';
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);
import vueCookie from 'vue-cookie';
Vue.use(vueCookie);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
