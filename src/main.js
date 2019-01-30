import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import store from './store/store'


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-project-a32e5.firebaseio.com/';

const router = new VueRouter({
  //mode:'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
