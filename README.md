# npm_puish

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### info
这是一个依赖antv@g2封装的图表插件 只需要简单的配置数据就可以进行图标的展示


###use
import ChartG2 from 'vuechartg2'
Vue.use(ChartG2)

在组件页面绑定数据即可
v-renderTarget='test' 

###数据结构
```
    test1:{
        data: [{
        year: '1951 年',
        sales: 38
        }, {
        year: '1952 年',
        sales: 52
        }, {
        year: '1956 年',
        sales: 61
        }, {
        year: '1957 年',
        sales: 145
        }, {
        year: '1958 年',
        sales: 48
        }, {
        year: '1959 年',
        sales: 38
        }, {
        year: '1960 年',
        sales: 38
        }, {
        year: '1962 年',
        sales: 38
        }],

        /*配置信息*/
        options:{
        padding:[80,100,150,80],
        scale:{
            'sales':{
            tickInterval: 20
            }
        },
        type:function(res){
            res.interval().position('year*sales');
            },
        }
    },
```
###options
```
    /*配置项：*/
    padding: [ 10, 20, 40, 40 ],
    custom:null,/* 这个属性支持完全自定义,传入的是一个function */
    animate:true,
    forceFit: true,
    type:null,/* 图表类型:[line,point,path,area,interval,polygon,schema,edge,heatmap] ,传入一个函数*/
    coord:null,/* 坐标类型 [rect,polar,theta,helix]     可以输入坐标类型字符串 ，或者传入一个function  或者传入一个对象{type:'polar',config:{}}*/
    background: {
    fill: '#fff', // 图表背景色
    fillOpacity: 1, // 图表背景透明度
    stroke: '#000', // 图表边框颜色
    strokeOpacity: 1, // 图表边框透明度
    opacity: 1, // 图表整体透明度
    lineWidth: 0, // 图表边框粗度
    radius: 0 // 图表圆角大小
    },
    signboard:'G2',/* 渲染dom标识 */
    scale:null,/* 指定度量(或称 列定义） chart.scale*/
    defs:null,/* chart.source(data, defs);这种格式的列定义 */
    tooltip:null,/* tooltip定义 */
    axis:null,/* axis定义 ,*/
    legend:null,/*  legend 配置*/
```


###author
344822559@qq.com