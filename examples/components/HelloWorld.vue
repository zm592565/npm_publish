<template>
  <div class="hello">
    <div class="test_height"   v-renderTarget='test'></div>
    <div class="test_height" v-renderTarget='test1'></div>
    <div class="test_height" @click="aa">dsadas11111</div>
    <div class="test_height" v-renderTarget='test2'></div>
    <div class="test_height" v-renderTarget='test3'></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      hello:'hello',
      test:{
         id:null,
         data:[{
            year: '1991',
            value: 3
          }, {
            year: '1992',
            value: 4
          }, {
            year: '1993',
            value: 3.5
          }, {
            year: '1994',
            value: 5
          }, {
            year: '1995',
            value: 4.9
          }, {
            year: '1996',
            value: 6
          }, {
            year: '1997',
            value: 7
          }, {
            year: '1998',
            value: 9
          }, {
            year: '1999',
            value: 13
          }],
          options:{
            padding:[80,100,150,80],
            type:function(res){
                res.line().position('year*value');
                res.point().position('year*value').size(4).shape('circle').style({
                    stroke: '#fff',
                    lineWidth: 1
                  });
              },
            scale:{
              'value':{
                min: 0
              },
              'year':{
                range: [0, 1]
              }
            },
          }
       },
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

        test2:{
          data:[[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
          options:{
            padding: [20, 80, 120, 85],
            custom:(res,{View,DataSet})=>{
              var source = [];
              for (var i = 0; i < this.test2.data.length; i++) {
                var item = this.test2.data[i];
                var obj = {};
                obj.name = item[0];
                obj.day = item[1];
                obj.sales = item[2];
                source.push(obj);
              }
               res.source(source, {
                  name: {
                    type: 'cat',
                    values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
                  },
                  day: {
                    type: 'cat',
                    values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                  }
                });
                res.axis('name', {
                  tickLine: null,
                  grid: {
                    align: 'center',
                    lineStyle: {
                      lineWidth: 1,
                      lineDash: null,
                      stroke: '#f0f0f0'
                    }
                  }
                });
                res.axis('day', {
                  title: null,
                  grid: {
                    align: 'center',
                    lineStyle: {
                      lineWidth: 1,
                      lineDash: null,
                      stroke: '#f0f0f0'
                    },
                    showFirstLine: true
                  }
                });
                res.polygon().position('name*day').color('sales', '#BAE7FF-#1890FF-#0050B3').label('sales', {
                  offset: -2,
                  textStyle: {
                    fill: '#fff',
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)'
                  }
                }).style({
                  lineWidth: 1,
                  stroke: '#fff'
                });
            }
          }
        },


        test3:{
          data:[{
            year: '2001',
            population: 41.8
          }, {
            year: '2002',
            population: 38
          }, {
            year: '2003',
            population: 33.7
          }, {
            year: '2004',
            population: 30.7
          }, {
            year: '2005',
            population: 25.8
          }, {
            year: '2006',
            population: 31.7
          }, {
            year: '2007',
            population: 33
          }, {
            year: '2008',
            population: 46
          }, {
            year: '2009',
            population: 38.3
          }, {
            year: '2010',
            population: 28
          }, {
            year: '2011',
            population: 42.5
          }, {
            year: '2012',
            population: 30.3
          }],
          options:{
              coord:'polar',
              legend:{
                position: 'right',
                offsetY: -window.innerHeight / 2 + 180,
                offsetX: -140
              },
              type:function(res,{G2,View,DataSet}){
                res.axis(false);
                res.interval().position('year*population').color('year', G2.Global.colors_pie_16).style({
                  lineWidth: 1,
                  stroke: '#fff'
                });
              }
          }


        }



    }
  },
  props: {
    msg: String
  },
  mounted(){
    // console.info(this.active)
  },
  methods:{
    aa(){
      this.$set(this.test,'id','ccc');
      console.info(this.test)
    },
    changeTest(){
      this.hello='hello 123123132'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test_height{
  height: 400px;
  box-sizing: border-box;
}
</style>
