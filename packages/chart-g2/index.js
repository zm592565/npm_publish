import G2 from '@antv/g2';
import { View,DataSet } from '@antv/data-set';
const ChartG2={};

ChartG2.install = function (Vue) {
    /* 需要id,data,资源对象 */
    const G2BOX_ID=[];

    // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {}

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
      //  console.info(11111)
      }
    })

    /* 单表配置 */
    var G2_options={
      padding: [ 10, 20, 40, 40 ],
      custom:null,/* 这个属性支持完全自定义,传入的是一个function */
      animate:true,
      forceFit: true,
      type:null,/* 图标类型:[line,point,path,area,interval,polygon,schema,edge,heatmap] */
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
    }

    // 2. 添加全局资源,对象写法必须在bind中使用原始数据然后在inserted中使用更新数据进行操作 否则无法检测到数据变化
    Vue.directive('renderTarget', {
      bind(el, binding, vnode){
        Charmethods.insertBox(el,binding,vnode);
      },
      inserted(el,binding,vnode){
        /* 获取配置信息 */
        var renderData=Charmethods.getOptions(el,binding,vnode);
        Charmethods.renderG2_box({id:renderData.id,data:renderData.data,option:renderData.option})
      },
      update(el, binding, vnode){
        /* 首先查看是否存在资源对象  */
        var id=null;
        id=Charmethods.searchChartdom(el);
        var chart=Charmethods.searchChartforid(id);
        if(chart.info.chart){
          chart.info.chart.destroy();
          document.getElementById(id).remove();
        }
        Charmethods.insertBox(el,binding,vnode);
        var renderData=Charmethods.getOptions(el,binding,vnode);
        Charmethods.renderG2_box({id:renderData.id,data:renderData.data,option:renderData.option})
      },
      // componentUpdated(el, binding, vnode, oldVnode){},
      // unbind(){}
    })
  

    // 4. 添加实例方法
    // Vue.prototype.$G2 = function (e,methodOptions) {}


    var Charmethods={
        /**注入渲染dom,并对传入的id值进行赋值 */
        insertBox:(el,binding,vnode)=>{
          var id='',data=[];
          if(!binding.value||!binding.value.data){
            throw new Error('请绑定数据...');
          }
          id=binding.value.id?binding.value.id:Charmethods.getIdStr();
          var ishave=Charmethods.checkedId(id);
          if (!ishave){
            throw new Error('id命名冲突...');
          }
          if(binding.value.data){
            data=binding.value.data;
          }
          G2BOX_ID.push({id,data});
          vnode.context.$data.active=id;
          el.innerHTML+=`<div id='${id}' ref='${id}' data-type='${G2_options.signboard}' style='height:100%; box-sizing: border-box'></div>`;
        },

        /*  检测是否有相同id注入渲染id池 */
        checkedId(id){
          return G2BOX_ID.indexOf(id)<0?true:false;
        },
        /* 自动生成一个不重复的id */
        getIdStr:()=>{
          var id='G2_';
          var time=new Date().getTime()
          id+=time;
          id+=Charmethods.generateMixed(5);/* 防止id重复 */
          return id;
        },
        renderG2_box({id,data=[],option={}}) {
          var height=document.getElementById(id).clientHeight;
          var fixation_option={
            container:id,
            height,
          }
          var options=Object.assign({},fixation_option,option)
          var chart = new G2.Chart(options);
          chart=Charmethods.checkedChartType(data,options,chart);
          var index=Charmethods.searchChartforid(id).index;
          G2BOX_ID[index].chart=chart;
        },
        formatterData(data){
          var back=[];
          if(data[0]){
              for (let key in data[0]) {
                back.push(key);
              }
          }
          return back;
        },

        /* 根据渲染id找到指定图标资源对象*/
        searchChartforid(id){
          var charObj=null;
          for (let index = 0; index < G2BOX_ID.length; index++) {
            if(G2BOX_ID[index].id==id){
              charObj={index,info:G2BOX_ID[index]}
              break;
            }else{
              continue;
            }
          }
          return charObj;
        },

        /* 获取渲染id option以及传入的data */
        getOptions(el,binding){
          var id,option={},data=[];
          option= binding.value.options?Object.assign({},G2_options,binding.value.options):G2_options;
          if(binding.value.data){
            data=binding.value.data;
          }
          id=Charmethods.searchChartdom(el);
          return{
            id,
            option,
            data
          }
        },

        /* 检索当前对象里是否有渲染dom */
        searchChartdom(el){
          var id=null;
          var dom=el.getElementsByTagName('div');
          if(dom.length){
            for (let index = 0; index < dom.length; index++) {
              const element = dom[index].getAttribute('data-type');
              if(element==G2_options.signboard){
                id=dom[index].getAttribute('id');
                break;
              }else{
                continue;
              }
            }
          }
          return id;
        },

        /* 列定义 */
        defsfomatter(data,options,resource){
          if(options.defs){
            resource.source(data,options.defs);
          }else{
            resource.source(data);
          }
          return resource;
        },

        /* scale,是根据字段定义 */
        scalefomatter(options,resource){
          if(options.scale){
            for (let key in options.scale) {
                resource.scale(key,options.scale[key])
            }
          }
          return resource;
        },

        /* 定义tooltip */
        tooltipformatter(options,resource){
          if(options.tooltip){
            resource.tooltip(options.tooltip)
          }
          return resource;
        },
  
        /* 
        过滤几何标记
        @params: optionsType:options[type]-array
        */
       addGeomType(optionsType,resource){
          if(optionsType&&typeof(optionsType)=='function'){
            optionsType(resource,{G2,View,DataSet})
          }
          return resource;
       },

       /* 
        格式化coord
       */
      fomatterCoord(options,resource){
        if(options.coord){
          if(typeof(options.coord)=='string'){
            resource.coord(options.coord);
          }else if(typeof(options.coord)=='function'){
            options.coord(resource)
          }else if(typeof(options.coord)=='object'){
            // {type:'polar',config:{}}
            resource.coord(options.coord.type,options.coord.config);
          }
        }
        return resource;
      },

      /* 配置axis */
      formatterAxis(options,resource){
        if(options.axis&&typeof(options.axis)=='object'){
          for (let key in options.axis) {
            resource.axis(key,options.axis[key])
          }
        }else if(options.axis&&typeof(options.axis)=='boolean'||options.axis&&typeof(options.axis)=='string'){
          resource.axis(options.axis);
        }
        return resource;
      },

      /* 配置legend */
      addLegendops(options,resource){
        if(options.legend){
          resource.legend(options.legend)
        }
        return resource;
      },

      doCustomdefined(options,resource){
        if(options.custom&&typeof(options.custom)=='function'){
          options.custom(resource,{G2,View,DataSet})
        }
        return resource;
      },


      /* 输出对应的图标和坐标类型 */
      checkedChartType(data,options,resource){
          if(options.custom&&typeof(options.custom)=='function'){
            resource=Charmethods.doCustomdefined(options,resource);
          }else{
            resource=Charmethods.defsfomatter(data,options,resource);
            resource=Charmethods.scalefomatter(options,resource);
            resource=Charmethods.formatterAxis(options,resource);
            resource=Charmethods.tooltipformatter(options,resource);
            resource=Charmethods.fomatterCoord(options,resource);
            resource=Charmethods.addLegendops(options,resource);
            resource=Charmethods.addGeomType(options.type,resource);
          }
          resource.render();
        return resource;
      },

      /* 获取随机字符串 */
      generateMixed(n) {
          var res = "";
          var chars =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G'];
          for(var i = 0; i < n ; i ++) {
              var id = Math.ceil(Math.random()*17);
              res += chars[id];
          }
          return res;
      }

    }


  }
  export default ChartG2;