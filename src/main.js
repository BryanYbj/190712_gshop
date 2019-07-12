//入口js

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//注册store
import store from './store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:h => h(App),
  router,//使用上vue - router
  store,//使用上vuex
  components: { App },
  template: '<App/>',

})
