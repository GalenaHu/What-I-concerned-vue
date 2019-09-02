import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import bus from './assets/eventBus.js'
import router from './router/index';
import store from './store/index'
import VueClipboard from 'vue-clipboard2'
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";


Vue.use(VueClipboard);
Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.bus = bus;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
