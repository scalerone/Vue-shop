// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const autoRem = () => {
  //得到手机屏幕的宽度
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth > 750) {
    htmlWidth = 750
  }
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  //设置根元素字体大小
  htmlDom.style.fontSize = (htmlWidth / 20) + 'px'
  htmlDom.style.maxWidth = '750px'
  htmlDom.style.margin = '0 auto'
}
autoRem()
window.onresize = autoRem


import {Cell, CellGroup ,Tabbar,TabbarItem,PullRefresh,Stepper,Tab,Tabs,Button, Row, Col, Swipe, SwipeItem , Lazyload ,List ,Field, NavBar } from 'vant'

Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
