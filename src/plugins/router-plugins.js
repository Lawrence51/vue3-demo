// https://blog.csdn.net/weixin_44135121/article/details/103998832
import Vue from 'vue';
export default class Routes {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  init() {}

  bindEvents(){
    document.addEventListener('load', this.onHashChange.bind(this))
    document.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  onHashChange() {
    this.app.current = window.location.hash.slice(1) || '/'; // 获取hash值，如果没有，则回到根路由
  }
}