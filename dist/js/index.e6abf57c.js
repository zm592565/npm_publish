(function(e){function t(t){for(var r,i,s=t[0],l=t[1],d=t[2],c=0,f=[];c<s.length;c++)i=s[c],o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={index:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("c31f")},"42b1":function(e,t,a){"use strict";var r=a("8365"),o=a.n(r);o.a},"540d":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}",""])},"54b3":function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},"60ae":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"h3[data-v-c26d2db8]{margin:40px 0 0}ul[data-v-c26d2db8]{list-style-type:none;padding:0}li[data-v-c26d2db8]{display:inline-block;margin:0 10px}a[data-v-c26d2db8]{color:#42b983}.test_height[data-v-c26d2db8]{height:400px;-webkit-box-sizing:border-box;box-sizing:border-box}",""])},8365:function(e,t,a){var r=a("540d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("499e").default;o("aad61f46",r,!0,{sourceMap:!1,shadowMode:!1})},b368:function(e,t,a){"use strict";var r=a("e2dc"),o=a.n(r);o.a},c31f:function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:a("54b3")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("div",{directives:[{name:"renderTarget",rawName:"v-renderTarget",value:e.test,expression:"test"}],staticClass:"test_height"}),a("div",{directives:[{name:"renderTarget",rawName:"v-renderTarget",value:e.test1,expression:"test1"}],staticClass:"test_height"}),a("div",{staticClass:"test_height",on:{click:e.aa}},[e._v("dsadas11111")]),a("div",{directives:[{name:"renderTarget",rawName:"v-renderTarget",value:e.test2,expression:"test2"}],staticClass:"test_height"}),a("div",{directives:[{name:"renderTarget",rawName:"v-renderTarget",value:e.test3,expression:"test3"}],staticClass:"test_height"})])},s=[],l={name:"HelloWorld",data(){return{hello:"hello",test:{id:null,data:[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}],options:{padding:[80,100,150,80],type:function(e){e.line().position("year*value"),e.point().position("year*value").size(4).shape("circle").style({stroke:"#fff",lineWidth:1})},scale:{value:{min:0},year:{range:[0,1]}}}},test1:{data:[{year:"1951 年",sales:38},{year:"1952 年",sales:52},{year:"1956 年",sales:61},{year:"1957 年",sales:145},{year:"1958 年",sales:48},{year:"1959 年",sales:38},{year:"1960 年",sales:38},{year:"1962 年",sales:38}],options:{padding:[80,100,150,80],scale:{sales:{tickInterval:20}},type:function(e){e.interval().position("year*sales")}}},test2:{data:[[0,0,10],[0,1,19],[0,2,8],[0,3,24],[0,4,67],[1,0,92],[1,1,58],[1,2,78],[1,3,117],[1,4,48],[2,0,35],[2,1,15],[2,2,123],[2,3,64],[2,4,52],[3,0,72],[3,1,132],[3,2,114],[3,3,19],[3,4,16],[4,0,38],[4,1,5],[4,2,8],[4,3,117],[4,4,115],[5,0,88],[5,1,32],[5,2,12],[5,3,6],[5,4,120],[6,0,13],[6,1,44],[6,2,88],[6,3,98],[6,4,96],[7,0,31],[7,1,1],[7,2,82],[7,3,32],[7,4,30],[8,0,85],[8,1,97],[8,2,123],[8,3,64],[8,4,84],[9,0,47],[9,1,114],[9,2,31],[9,3,48],[9,4,91]],options:{padding:[20,80,120,85],custom:(e,{View:t,DataSet:a})=>{for(var r=[],o=0;o<this.test2.data.length;o++){var n=this.test2.data[o],i={};i.name=n[0],i.day=n[1],i.sales=n[2],r.push(i)}e.source(r,{name:{type:"cat",values:["Alexander","Marie","Maximilian","Sophia","Lukas","Maria","Leon","Anna","Tim","Laura"]},day:{type:"cat",values:["Monday","Tuesday","Wednesday","Thursday","Friday"]}}),e.axis("name",{tickLine:null,grid:{align:"center",lineStyle:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"}}}),e.axis("day",{title:null,grid:{align:"center",lineStyle:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"},showFirstLine:!0}}),e.polygon().position("name*day").color("sales","#BAE7FF-#1890FF-#0050B3").label("sales",{offset:-2,textStyle:{fill:"#fff",shadowBlur:2,shadowColor:"rgba(0, 0, 0, .45)"}}).style({lineWidth:1,stroke:"#fff"})}}},test3:{data:[{year:"2001",population:41.8},{year:"2002",population:38},{year:"2003",population:33.7},{year:"2004",population:30.7},{year:"2005",population:25.8},{year:"2006",population:31.7},{year:"2007",population:33},{year:"2008",population:46},{year:"2009",population:38.3},{year:"2010",population:28},{year:"2011",population:42.5},{year:"2012",population:30.3}],options:{coord:"polar",legend:{position:"right",offsetY:-window.innerHeight/2+180,offsetX:-140},type:function(e,{G2:t,View:a,DataSet:r}){e.axis(!1),e.interval().position("year*population").color("year",t.Global.colors_pie_16).style({lineWidth:1,stroke:"#fff"})}}}}},props:{msg:String},mounted(){},methods:{aa(){this.$set(this.test,"id","ccc"),console.info(this.test)},changeTest(){this.hello="hello 123123132"}}},d=l,u=(a("b368"),a("2877")),c=Object(u["a"])(d,i,s,!1,null,"c26d2db8",null),f=c.exports,p={name:"app",components:{HelloWorld:f}},v=p,h=(a("42b1"),Object(u["a"])(v,o,n,!1,null,null,null)),y=h.exports,g=(a("f751"),a("7618")),m=a("70a3"),b=a.n(m),x=a("b74e"),w={install:function(e){var t=[];e.mixin({created:function(){}});var a={padding:[10,20,40,40],custom:null,animate:!0,forceFit:!0,type:null,coord:null,background:{fill:"#fff",fillOpacity:1,stroke:"#000",strokeOpacity:1,opacity:1,lineWidth:0,radius:0},signboard:"G2",scale:null,defs:null,tooltip:null,axis:null,legend:null};e.directive("renderTarget",{bind:function(e,t,a){r.insertBox(e,t,a)},inserted:function(e,t,a){var o=r.getOptions(e,t,a);r.renderG2_box({id:o.id,data:o.data,option:o.option})},update:function(e,t,a){var o=null;o=r.searchChartdom(e);var n=r.searchChartforid(o);n.info.chart&&(n.info.chart.destroy(),document.getElementById(o).remove()),r.insertBox(e,t,a);var i=r.getOptions(e,t,a);r.renderG2_box({id:i.id,data:i.data,option:i.option})}});var r={insertBox:function(e,o,n){var i="",s=[];if(!o.value||!o.value.data)throw new Error("请绑定数据...");i=o.value.id?o.value.id:r.getIdStr();var l=r.checkedId(i);if(!l)throw new Error("id命名冲突...");o.value.data&&(s=o.value.data),t.push({id:i,data:s}),n.context.$data.active=i,e.innerHTML+="<div id='".concat(i,"' ref='").concat(i,"' data-type='").concat(a.signboard,"' style='height:100%; box-sizing: border-box'></div>")},checkedId:function(e){return t.indexOf(e)<0},getIdStr:function(){var e="G2_",t=(new Date).getTime();return e+=t,e+=r.generateMixed(5),e},renderG2_box:function(e){var a=e.id,o=e.data,n=void 0===o?[]:o,i=e.option,s=void 0===i?{}:i,l=document.getElementById(a).clientHeight,d={container:a,height:l},u=Object.assign({},d,s),c=new b.a.Chart(u);c=r.checkedChartType(n,u,c);var f=r.searchChartforid(a).index;t[f].chart=c},formatterData:function(e){var t=[];if(e[0])for(var a in e[0])t.push(a);return t},searchChartforid:function(e){for(var a=null,r=0;r<t.length;r++)if(t[r].id==e){a={index:r,info:t[r]};break}return a},getOptions:function(e,t){var o,n={},i=[];return n=t.value.options?Object.assign({},a,t.value.options):a,t.value.data&&(i=t.value.data),o=r.searchChartdom(e),{id:o,option:n,data:i}},searchChartdom:function(e){var t=null,r=e.getElementsByTagName("div");if(r.length)for(var o=0;o<r.length;o++){var n=r[o].getAttribute("data-type");if(n==a.signboard){t=r[o].getAttribute("id");break}}return t},defsfomatter:function(e,t,a){return t.defs?a.source(e,t.defs):a.source(e),a},scalefomatter:function(e,t){if(e.scale)for(var a in e.scale)t.scale(a,e.scale[a]);return t},tooltipformatter:function(e,t){return e.tooltip&&t.tooltip(e.tooltip),t},addGeomType:function(e,t){return e&&"function"==typeof e&&e(t,{G2:b.a,View:x["View"],DataSet:x["DataSet"]}),t},fomatterCoord:function(e,t){return e.coord&&("string"==typeof e.coord?t.coord(e.coord):"function"==typeof e.coord?e.coord(t):"object"==Object(g["a"])(e.coord)&&t.coord(e.coord.type,e.coord.config)),t},formatterAxis:function(e,t){if(e.axis&&"object"==Object(g["a"])(e.axis))for(var a in e.axis)t.axis(a,e.axis[a]);else(e.axis&&"boolean"==typeof e.axis||e.axis&&"string"==typeof e.axis)&&t.axis(e.axis);return t},addLegendops:function(e,t){return e.legend&&t.legend(e.legend),t},doCustomdefined:function(e,t){return e.custom&&"function"==typeof e.custom&&e.custom(t,{G2:b.a,View:x["View"],DataSet:x["DataSet"]}),t},checkedChartType:function(e,t,a){return t.custom&&"function"==typeof t.custom?a=r.doCustomdefined(t,a):(a=r.defsfomatter(e,t,a),a=r.scalefomatter(t,a),a=r.formatterAxis(t,a),a=r.tooltipformatter(t,a),a=r.fomatterCoord(t,a),a=r.addLegendops(t,a),a=r.addGeomType(t.type,a)),a.render(),a},generateMixed:function(e){for(var t="",a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G"],r=0;r<e;r++){var o=Math.ceil(17*Math.random());t+=a[o]}return t}}}},k=w;"undefined"!==typeof window&&window.Vue&&window.Vue.use(k);var T=k;r["a"].config.productionTip=!1,r["a"].use(T),new r["a"]({render:e=>e(y)}).$mount("#app")},e2dc:function(e,t,a){var r=a("60ae");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("499e").default;o("01ee428c",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=index.e6abf57c.js.map