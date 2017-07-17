/*
 *二手房用到的交互
 *2016-6-20 yuyu
 */
"use strict";
String.prototype.trim = function () {
  return this .replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1' );
}
var priceChart = function(){};
priceChart.prototype = {
  // 详情页房价走势图
  echartprice:function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('prisChart'));
    var dateX = [],
        dateY1 = [],
        dateY2 = [],
        dateY3 = [],
        dateY4 = [],
        //半年数据
        dateXhalf = ["7月","8月","9月","10月","11月","12月"],
        dateY1half = ["6500", "7500","6101", "10800","1500","97000"],
        dateY2half = ["15023","9500","7900","12900","15900","21000"],
        dateY3half = ["3023", "9562","11111", "15602","25896","9641"],
        dateY4half = ["19000", "9562","2011", "82222","15896","9641"],
        //一年数据
        dateXone = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        dateY1one = ["6500", "7500","6101", "10800","1500","97000","6081", "8001","6142", "12020","15123","21785"],
        dateY2one = ["6501", "7512","6112", "10811","15023","9500","7900", "8900","6942", "12900","15900","21000"],
        dateY3one = ["8123", "9562","11111", "15602","25896","9641","8900", "9000","6142", "14000","19000","29085"],
        dateY4one = ["19000", "9562","11111", "12222","25896","9641","8900", "9000","6142", "14000","19000","29085"];
    // 指定图表的配置项和数据
    var setNewOption = function(dateX,dateY1,dateY2,dateY3,dateY4){
      var option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type : 'category',
          splitLine: {show:false},
          boundaryGap: false,
          data: dateX,
          axisLabel: {
            textStyle: {
                color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
                color: '#666'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#666'
            }
          }
        },
        yAxis :{
          name:"元/㎡",
          type : 'value',
          splitLine: {show:false},
          axisLabel: {
            textStyle: {
                color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
                color: '#666'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#666'
            }
          }
        },
        series: [
          {
            name: '保利中央花园',
            smooth:true,
            symbolSize:'10',
            areaStyle: {
              normal: {
                color : '#bde1ff'
              }
            },
            lineStyle: {
              normal: {
                color : '#bde1ff'
              }
            },
            itemStyle:{
              normal: {
                color : '#bde1ff'
              }
            },
            type: 'line',
            data: dateY1
          },
          {
            name: '南湖花园',
            symbol:'none',
            symbolSize:'10',
            areaStyle: {
              normal: {
                color : '#41a7fe'
              }
            },
            lineStyle: {
              normal: {
                color : '#41a7fe'
              }
            },
            itemStyle:{
              normal: {
                color : '#41a7fe'
              }
            },
            type: 'line',
            data: dateY2
          },
          {
            name: '武昌区',
            smooth:true,
            symbolSize:'10',
            areaStyle: {
              normal: {
                color : '#61c876'
              }
            },
            lineStyle: {
              normal: {
                color : '#61c876'
              }
            },
            itemStyle:{
              normal: {
                color : '#61c876'
              }
            },
            type: 'line',
            data: dateY3
          },
          {
            name: '武汉',
            smooth:true,
            symbolSize:'10',
            areaStyle: {
              normal: {
                color : '#eb855d'
              }
            },
            lineStyle: {
              normal: {
                color : '#eb855d'
              }
            },
            itemStyle:{
              normal: {
                color : '#eb855d'
              }
            },
            type: 'line',
            data: dateY4
          }
        ],
        tooltip: {
          trigger:'axis',
          borderColor:'#3bafda',
          backgroundColor:'#fff',
          borderWidth:'1',
          formatter: '<div class="pt-tit">{b}</div>'+
                     '<ul class="ptlist-ul">'+
                       '<li><span class="tag-dotted color1"></span><span class="name">{a0}</span><span class="f-r f14red">{c0}</span></li>'+
                       '<li><span class="tag-dotted color2"></span><span class="name">{a1}</span><span class="f-r f14red">{c1}</span></li>'+
                       '<li><span class="tag-dotted color3"></span><span class="name">{a2}</span><span class="f-r f14red">{c2}</span></li>'+
                       '<li><span class="tag-dotted color4"></span><span class="name">{a3}</span><span class="f-r f14red">{c3}</span></li>'+
                     '</ul>'
        }
      };
      return option;
    }
    var initAll = function(){
      dateX = dateXone;
      dateY1 = dateY1one;
      dateY2 = dateY2one;
      dateY3 = dateY3one;
      dateY4 = dateY4one;
      myChart.setOption(setNewOption(dateX,dateY1,dateY2,dateY3,dateY4));
    }
    var inithalf = function(){
      dateX = dateXhalf;
      dateY1 = dateY1half;
      dateY2 = dateY2half;
      dateY3 = dateY3half;
      dateY4 = dateY4half;
      myChart.setOption(setNewOption(dateX,dateY1,dateY2,dateY3,dateY4));
    }
    initAll();
    // 使用刚指定的配置项和数据显示图表
    $(".halfyear").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
      inithalf();
    })
    $(".oneyear").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
      initAll();
    })
    return this;
  },
  //小区详情页
  areadetailprice:function(xAxis,yAxis){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('areaDetail'));
    var dateX = [],
        dateY = [],
        dateXall = xAxis,
        dateYall = yAxis;
//      for(var i=priceJson.length-1;i!=-1;i--){
//        var dateStr = tool.getDate(priceJson[i].createTime,"yyyy-MM","0000-00");
//        dateXall.push(dateStr);
//        dateYall.push(priceJson[i].averagePrice);
//      }
        //一年数据
//        dateXone = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
//        dateYone = ["6500", "7500","6101", "10800","1500","97000","6081", "8001","6142", "12020","15123","21785"],
        //全年数据
//        dateXall = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","11月"],
//        dateYall = ["6500", "7500","6101", "10800","1500","97000","6081", "8001","6142", "12020","15123","21785", "8001"];
    // 指定图表的配置项和数据
    var setNewOption = function(dateX,dateY){
      var option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type : 'category',
          splitLine: {show:false},
          boundaryGap: false,
          data: dateX,
          axisLabel: {
            textStyle: {
                color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
                color: '#666'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#666'
            }
          }
        },
        yAxis :{
          name:"元/㎡",
          type : 'value',
          splitLine: {show:false},
          axisLabel: {
            textStyle: {
                color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
                color: '#666'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#666'
            }
          }
        },
        series: [
          {
            name: '均价',
            smooth:true,
            symbolSize:'10',
            areaStyle: {
              normal: {
                color : '#fff'
              }
            },
            lineStyle: {
              normal: {
                color : '#007dd4'
              }
            },
            itemStyle:{
              normal: {
                color : '#007dd4'
              }
            },
            type: 'line',
            data: dateY
          }
        ],
        tooltip : {
           trigger: 'axis'
        }
      };
      return option;
    }
    var initAll = function(){
      dateX = dateXall;
      dateY = dateYall;
      myChart.setOption(setNewOption(dateX,dateY));
    }
    initAll();
//    var initOne = function(){
//      dateX = dateXone;
//      dateY = dateYone;
//      myChart.setOption(setNewOption(dateX,dateY));
//    }
//    initOne();
    // 使用刚指定的配置项和数据显示图表
//    $(".allyear").click(function(){
//      $(this).addClass("cur").siblings().removeClass("cur");
//      initAll();
//    })
//    $(".oneyear").click(function(){
//      $(this).addClass("cur").siblings().removeClass("cur");
//      initOne();
//    })
    return this;
  }
}

var priceChartFc = new priceChart();

