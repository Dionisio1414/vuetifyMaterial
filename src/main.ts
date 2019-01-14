import Vue from 'vue';
<<<<<<< HEAD
import axios from 'axios';
import VueAxios from 'vue-axios';
=======
import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> 3d418027217701907117a6841624c5cc98623c58
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './ml.js';

<<<<<<< HEAD
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
=======

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
>>>>>>> 3d418027217701907117a6841624c5cc98623c58
}).$mount('#app');
