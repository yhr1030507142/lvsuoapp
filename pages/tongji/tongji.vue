
<template>
    <div>
        <div class="countHeader">
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">案件合计</p>
                </div>
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">已结案</p>
                </div>
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">客户</p>
                </div>
                <div class="child_count">
                    <div class="count_num">{{200000|formatMoney}}</div>
                    <p class="count_title">金额合计</p>
                </div>
        </div>

        <div class="countCase">
            <p class="countCase_title">案件</p>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
        </div>

          <div class="countCase">
            <p class="countCase_title">客户</p>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart1"></div>
        </div>

          <div class="countCase">
            <p class="countCase_title">客户</p>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart2"></div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    props: {
    className: {
      type: String,
      default: 'echartDiv'
    },
    id: {
      type: String,
      default: 'yourID'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '600upx'
    }
  },
    data(){
        
        return{
            chart: null,
            chart1: null,
            chart2: null,
        }
    },
    mounted(){
         this.initChart();
          this.initChart1();
            this.initChart2();
    },
     beforeDestroy() {
		   this.chart = null;
		   this.chart1 = null;
        
          
    },
    methods:{
          initChart() {
            this.chart = echarts.init(this.$refs.myEchart);
                                            this.chart.setOption({
                                                title : {
                                        text: '案件类型统计',
                                        subtext: '数量'
                                    },
                                    tooltip : {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data:['类型一','类型二']
                                    },
                                    toolbox: {
                                        show : true,
                                        feature : {
                                            mark : {show: true},
                                            dataView : {show: true, readOnly: false},
                                            magicType : {show: true, type: ['line', 'bar']},
                                            restore : {show: true},
                                            saveAsImage : {show: true}
                                        }
                                    },
                                    calculable : true,
                                    xAxis : [
                                        {
                                            type : 'category',
                                            boundaryGap : false,
                                            data : ['周一','周二','周三','周四','周五','周六','周日']
                                        }
                                    ],
                                    yAxis : [
                                        {
                                            type : 'value',
                                            axisLabel : {
                                                formatter: '{value}'
                                            }
                                        }
                                    ],
                                    series : [
                                        {
                                            name:'最高气温',
                                            type:'line',
                                            data:[11, 11, 15, 13, 12, 13, 10],
                                            markPoint : {
                                                data : [
                                                    {type : 'max', name: '最大值'},
                                                    {type : 'min', name: '最小值'}
                                                ]
                                            },
                                            markLine : {
                                                data : [
                                                    {type : 'average', name: '平均值'}
                                                ]
                                            }
                                        },
                                        {
                                            name:'最低气温',
                                            type:'line',
                                            data:[1, -2, 2, 5, 3, 2, 0],
                                            markPoint : {
                                                data : [
                                                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                                                ]
                                            },
                                            markLine : {
                                                data : [
                                                    {type : 'average', name : '平均值'}
                                                ]
                                            }
                                        }
                                    ]
                                })
          
        },

        initChart1(){
            this.chart1 = echarts.init(this.$refs.myEchart1);
            this.chart1.setOption({
                title : {
                    text: '客户',
                    subtext: '纯属虚构'
                   },
                   tooltip : {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['蒸发量','降水量']
                   },
                   toolbox: {
                       show : true,
                       feature : {
                           mark : {show: true},
                           dataView : {show: true, readOnly: false},
                           magicType : {show: true, type: ['line', 'bar']},
                           restore : {show: true},
                           saveAsImage : {show: true}
                       }
                   },
                   calculable : true,
                   xAxis : [
                       {
                           type : 'category',
                           data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                       }
                   ],
                   yAxis : [
                       {
                           type : 'value'
                       }
                   ],
                   series : [
                       {
                           name:'蒸发量',
                           type:'bar',
                           data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                           markPoint : {
                               data : [
                                   {type : 'max', name: '最大值'},
                                   {type : 'min', name: '最小值'}
                               ]
                           },
                           markLine : {
                               data : [
                                   {type : 'average', name: '平均值'}
                               ]
                           }
                       },
                       {
                           name:'降水量',
                           type:'bar',
                           data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                           markPoint : {
                               data : [
                                   {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                   {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                               ]
                           },
                           markLine : {
                               data : [
                                   {type : 'average', name : '平均值'}
                               ]
                           }
                       }
                      ]
                  })
            },
    initChart2(){
    this.chart2 = echarts.init(this.$refs.myEchart2);
    this.chart2.setOption({
            title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
                                            })
                                       }
    
    
    
    
    },
    filters:{
                formatMoney(s, type) {  
                    if (/[^0-9\.]/.test(s))  
                        return "0";  
                    if (s == null || s == "")  
                        return "0";  
                    s = s.toString().replace(/^(\d*)$/, "$1.");  
                    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
                    s = s.replace(".", ",");  
                    var re = /(\d)(\d{3},)/;  
                    while (re.test(s))  
                        s = s.replace(re, "$1,$2");  
                    s = s.replace(/,(\d\d)$/, ".$1");  
                    if (type == 0) {// 不带小数位(默认是有小数位)  
                        var a = s.split(".");  
                        if (a[1] == "00") {  
                            s = a[0];  
                        }  
                    }  
                    return s;  
                }  
            }
}
</script>
<style>
.countHeader{
    display: flex;
    flex-direction: row;
    height: 160upx;
    justify-content: space-between;
   
}
.child_count{
     margin-top: 40upx;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    justify-content: center;
    align-items: center;
    border-left: 2upx solid #999999;
    flex: 1;
    font-size: 36upx;
}
.child_count:first-child{
     border-left: none;
}
.count_num{
   font-weight: 600;
}
.count_title{
    margin-top: 10upx;
}
/*  */
.countCase{
    margin-top: 30upx;
}
.countCase_title{
    margin-left: 30upx;
}
.echartDiv{
    margin: 0 auto;
}

</style>


