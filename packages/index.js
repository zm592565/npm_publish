
/* 如果没有组件引入 直接这样 npm run lib   npm login  然后用户名密码 然后 npm publish即可推送到npm  每次推送的版本好都必须不一样  */

/* 如果有组件则http://www.rxshc.com/180.html则参考这个配置 */


import ChartG2 from './chart-g2'

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ChartG2);
}

export default ChartG2
