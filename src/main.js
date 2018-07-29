import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
import goodsinfo from "./components/goodsinfo.vue"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入模块 moment
import moment from 'moment';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 懒加载
// import VueLazyload from 'vue-lazyload'
//  import path from 'path'

// 导入axios 模块让所有的组件度可以使用
import axios from "axios";
// 挂载到vue 的原型->vue实例化出来的对象 共用
Vue.prototype.axios=axios;
axios.defaults.baseURL="http://47.106.148.205:8899";



Vue.use(iView);
Vue.use(ElementUI);
// 使用路由中间件
Vue.use(VueRouter);
// 使用中间件
// Vue.use(VueLazyload,{
//   loading:path.join(__dirname,'./assets/statics/img/01.gif')
// });

// 注册路由规则 
const router = new VueRouter({
  routes:[
    // 访问的是 / 打到(重定向)
    { path: '/', redirect: '/index' },
    // index 都显示 index这个组件
    {
      path:'/index',
      component:index
    },
    {
      path:'/goodsinfo/:id',
      component:goodsinfo
    }
  ]
})
// 注册全局过滤器
Vue.filter('cutTime',function(value){
  return moment(value).format("YYYY年MM月DD日")
})

// 引入css
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
})
