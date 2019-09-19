<template>
	<div>
		<div class="countHeader">
			<div class="child_count">
				<div class="count_num">{{Case_Number}}</div>
				<p class="count_title">案件合计</p>
			</div>
			<div class="child_count">
				<div class="count_num">{{Closingcase_Number}}</div>
				<p class="count_title">已结案</p>
			</div>
			<div class="child_count">
				<div class="count_num">{{Customer_Number}}</div>
				<p class="count_title">客户</p>
			</div>
			<div class="child_count">
				<div class="count_num">{{Total_Amount|formatMoney}}</div>
				<p class="count_title">金额合计</p>
			</div>
		</div>
		<mx-date-picker :show="showPicker1" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'结束时间'"
		 :show-seconds="true" @confirm="onSelected1" @cancel="onSelected1" />
		<div class="countCase">
			<button class="date_btn" @click="onShowDatePicker1('range')">选择日期范围</button>
			<p class="countCase_title"></p>
			<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
		</div>

		<div class="countCase">
			<mx-date-picker :show="showPicker2" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'结束时间'"
			 :show-seconds="true" @confirm="onSelected2" @cancel="onSelected2" />
			<button class="date_btn" @click="onShowDatePicker2('range')">选择日期范围</button>
			<p class="countCase_title"></p>
			<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart1"></div>
		</div>

		<div class="countCase">
			<mx-date-picker :show="showPicker4" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'结束时间'"
			:show-seconds="true" @confirm="onSelected4" @cancel="onSelected4" />
			<p class="countCase_title"></p>
			<button class="date_btn" @click="onShowDatePicker4('range')">选择日期范围</button>
			<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart4"></div>
		</div>
		
		<div class="countCase">
			<mx-date-picker :show="showPicker3" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'结束时间'"
			:show-seconds="true" @confirm="onSelected3" @cancel="onSelected3" />
			<p class="countCase_title"></p>
			<button class="date_btn" @click="onShowDatePicker3('range')">选择日期范围</button>
			<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart3"></div>
		</div>
		
		<div class="countCase">
			<mx-date-picker :show="showPicker5" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'结束时间'"
			:show-seconds="true" @confirm="onSelected5" @cancel="onSelected5" />
			<p class="countCase_title"></p>
			<button class="date_btn" @click="onShowDatePicker5('range')">选择日期范围</button>
			<div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart5"></div>
		</div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
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
		data() {

			return {
				chart: null,
				chart1: null,
				chart2: null,
				chart3: null,
				chart4:null,
				chart5:null,
				arr: [],
				arr1: [],
				arr2: [],
				arr3: [],
				MinTime: '',
				MaxTime: '',
				MinTime1: '',
				MaxTime1: '',
				MinTime4: '',
				MaxTime4: '',
				MinTime3: '',
				MaxTime3: '',
				MinTime5: '',
				MaxTime5: '',
				showPicker1: false,
				showPicker2: false,
				showPicker3: false,
				showPicker4: false,
				showPicker5: false,
				date: '2019/01/01',
				time: '15:00:12',
				datetime: '2019/01/01 15:00:12',
				range: ['2019/01/01', '2019/01/06'],
				rangetime: ['2019/01/08 14:00', '2019/01/16 13:59'],
				type: 'rangetime',
				value: '',
				Total_Amount: '',
				Case_Number: '',
				Customer_Number: '',
				Closingcase_Number: '',
			}
		},
		mounted() {
			this.getInfo();
			// this.initChart();
			//this.initChart1();
			//this.initChart2();
			this.getMounthDate()
		},
		beforeDestroy() {
			this.chart = null;
			this.chart1 = null;
		},
		components: {
			MxDatePicker
		},
		methods: {
			getInfo() {
				var _self = this
				uni.request({
					url: _self.$api + 'Statistics/Amount_Number',
					data: {
						User_Id: uni.getStorageSync('userId')
					},
					success: function(res) {
						console.log(res)
						_self.Total_Amount = res.data.Total_Amount
						_self.Case_Number = res.data.Case_Number
						_self.Customer_Number = res.data.Customer_Number
						_self.Closingcase_Number = res.data.Closingcase_Number
					}
				})
			},
			onShowDatePicker1(type) { //显示
				this.type = type;
				this.showPicker1 = true;
				this.value = this[type];
			},
			onShowDatePicker2(type) { //显示
				this.type = type;
				this.showPicker2 = true;
				this.value = this[type];
			},
			onShowDatePicker3(type) { //显示
				this.type = type;
				this.showPicker3 = true;
				this.value = this[type];
			},
			onShowDatePicker4(type) { //显示
				this.type = type;
				this.showPicker4 = true;
				this.value = this[type];
			},
			onShowDatePicker5(type) { //显示
				this.type = type;
				this.showPicker5 = true;
				this.value = this[type];
			},
			onSelected1(e) { //选择
				console.log(e)
				this.showPicker1 = false;
				if (e) {
					this[this.type] = e.value;
					var arr = []
					arr = e.value.splice(',')
					console.log(arr)
					var reg = /\//g;
					this.MinTime = arr[0].replace(reg, '-')
					this.MaxTime = arr[1].replace(reg, '-')
					this.initChart()
					console.log(this.MinTime)
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);

				}
			},
			onSelected2(e) { //选择
				console.log(e)
				this.showPicker2 = false;
				if (e) {
					this[this.type] = e.value;
					var arr = []
					arr = e.value.splice(',')
					console.log(arr)
					var reg = /\//g;
					this.MinTime1 = arr[0].replace(reg, '-')
					this.MaxTime1 = arr[1].replace(reg, '-')
					this.initChart1()
					console.log(this.MinTime1)
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);

				}
			},
			onSelected3(e) { //选择
				console.log(e)
				this.showPicker3 = false;
				if (e) {
					this[this.type] = e.value;
					var arr = []
					arr = e.value.splice(',')
					console.log(arr)
					var reg = /\//g;
					this.MinTime3 = arr[0].replace(reg, '-')
					this.MaxTime3 = arr[1].replace(reg, '-')
					this.initChart3()
					console.log(this.MinTime1)
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
			
				}
			},
			onSelected4(e) { //选择
				console.log(e)
				this.showPicker4 = false;
				if (e) {
					this[this.type] = e.value;
					var arr = []
					arr = e.value.splice(',')
					console.log(arr)
					var reg = /\//g;
					this.MinTime4 = arr[0].replace(reg, '-')
					this.MaxTime4 = arr[1].replace(reg, '-')
					this.initChart4()
					console.log(this.MinTime4)
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
			
				}
			},
			onSelected5(e) { //选择
				console.log(e)
				this.showPicker5 = false;
				if (e) {
					this[this.type] = e.value;
					var arr = []
					arr = e.value.splice(',')
					console.log(arr)
					var reg = /\//g;
					this.MinTime5 = arr[0].replace(reg, '-')
					this.MaxTime5 = arr[1].replace(reg, '-')
					this.initChart5()
					console.log(this.MinTime5)
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
			
				}
			},
			//最近六个月
			getMounthDate() {
				//创建现在的时间
				var data = new Date();
				//获取年
				var year = data.getFullYear();
				//获取月
				var mon = data.getMonth() + 1;
				var arry = new Array();
				for (var i = 0; i < 6; i++) {
					mon = mon - 1;
					if (mon <= 0) {
						year = year - 1;
						mon = mon + 12;
					}
					if (mon < 10) {
						mon = "0" + mon;
					}
					arry[i] = year + "-" + mon;
				}
				var _self = this
				_self.MinTime = arry[5] + '-01'
				_self.MaxTime = arry[0] + '-30';
				_self.MinTime1 = arry[5] + '-01'
				_self.MaxTime1 = arry[0] + '-30';
				_self.MinTime4 = arry[5] + '-01'
				_self.MaxTime4 = arry[0] + '-30';
				_self.MinTime3 = arry[5] + '-01'
				_self.MaxTime3 = arry[0] + '-30';
				_self.MinTime5 = arry[5] + '-01'
				_self.MaxTime5 = arry[0] + '-30';
				console.log(_self.MinTime1)
				_self.initChart1();
				_self.initChart4();
				_self.initChart3();
				_self.initChart();
				_self.initChart5();

			},
			initChart() {
				var _self = this
				uni.request({
					url: _self.$api + 'Statistics/weekNumber',
					data: {
						MinTime: _self.MinTime,
						MaxTime: _self.MaxTime,
						User_Id: uni.getStorageSync('userId')
					},
					method: 'GET',
					success: function(res) {
						_self.arr = res.data
						console.log(res)
						for (var i = 0; i < _self.arr.length; i++) {
							_self.arr1[i] = _self.arr[i].name.replace(/\r\n/g, "")
							_self.arr2 = _self.arr[0].date
							_self.arr3[i] = _self.arr[i].data
						}
						_self.chart = echarts.init(_self.$refs.myEchart);
						_self.chart.setOption({
							title: {
								text: '案件类型统计',
								subtext: '数量'
							},
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								data: _self.arr1,
								type: 'scroll',
								bottom: 'bottom',
							},
							toolbox: {
								show: true,
								feature: {
									mark: {
										show: true
									},
									dataView: {
										show: true,
										readOnly: false
									},
									magicType: {
										show: true,
										type: ['line', 'bar']
									},
									restore: {
										show: true
									},
									saveAsImage: {
										show: true
									}
								}
							},
							calculable: true,
							xAxis: [{
								type: 'category',
								boundaryGap: false,
								data: _self.arr2
							}],
							yAxis: [{
								type: 'value',
								axisLabel: {
									formatter: '{value}'
								}
							}],
							series: _self.arr
						})

					},
				})
			},

			initChart1() {
				var _self = this
				console.log(_self.MaxTime1)
				uni.request({
					url: _self.$api + 'Statistics/Customer_Number',
					data: {
						MinTime: _self.MinTime1,
						MaxTime: _self.MaxTime1,
						User_Id: uni.getStorageSync('userId')
					},
					method: 'GET',
					success: function(res) {
						var arr = res.data
						var arr1 = []
						var arr2 = []
						var arr3 = []

						console.log(arr)
						for (var i = 0; i < arr.length; i++) {
							arr1[i] = arr[i].name
							arr2 = arr[0].date
						}
						console.log(arr1)
						console.log(arr2)
						_self.chart1 = echarts.init(_self.$refs.myEchart1);
						_self.chart1.setOption({
							title: {
								text: '新增客户数量',
								subtext: '数量'
							},
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								data: arr1,
								bottom: 'bottom',
								type: 'scroll',

							},
							toolbox: {
								show: true,
								feature: {
									mark: {
										show: true
									},
									dataView: {
										show: true,
										readOnly: false
									},
									magicType: {
										show: true,
										type: ['line', 'bar']
									},
									restore: {
										show: true
									},
									saveAsImage: {
										show: true
									}
								}
							},
							calculable: true,
							xAxis: [{
								type: 'category',
								data: arr2
							}],
							yAxis: [{
								type: 'value'
							}],
							series: arr
						})

					},
				})
			},
			initChart4() {
				var _self = this
				uni.request({
					url: _self.$api + 'Statistics/Sel_Cases_Pie',
					data: {
						MinTime: _self.MinTime4,
						MaxTime: _self.MaxTime4,
						User_Id: uni.getStorageSync('userId')
					},
					method: 'GET',
					success: function(res) {
						var arr = res.data
						var arr1 = []
						var arr2 = []
						var arr3 = []
						console.log(arr)
						for (var i = 0; i < arr.length; i++) {
							arr1[i] = arr[i].name.replace(/[\r\n]/g, "")
							arr2 = arr[i].value
						}
						console.log(arr1)
						console.log(arr2)
				_self.chart4 = echarts.init(_self.$refs.myEchart4);
					 _self.chart4.setOption({
					            title : {
					        text: '案件类型统计',
					        subtext: '数量',
					        x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} {b} : {c} ({d}%)"
					    },
					    legend: {
					        orient : 'vertical',
					        x : 'left',
					        data:arr1,
					        type: 'scroll',
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
					            name:'系统统计',
					            type:'pie',
					            radius : '55%',
					            center: ['50%', '60%'],
					            data:arr
					        }
					    ]
					  })
					},
				})

			},
			initChart3() {
				var _self = this
				uni.request({
					url: _self.$api + 'Statistics/Industry_Number',
					data: {
						MinTime: _self.MinTime3,
						MaxTime: _self.MaxTime3,
						User_Id: uni.getStorageSync('userId')
					},
					method: 'GET',
					success: function(res) {
						var arr = res.data
						var arr1 = []
						var arr2 = []
						var arr3 = []
						var arr4 =[]
						console.log(arr)
						for (var i = 0; i < arr.length; i++) {
							arr1[i] = arr[i].name.replace(/[\r\n]/g, "")
							arr2 = arr[0].date
							arr3=arr[i].data
							arr4.push({name:arr[i].name.replace(/[\r\n]/g,""),date:arr[i].date,data:arr[i].data,type:arr[i].type})
						}
						console.log(arr1)
						console.log(arr2)
				_self.chart3 = echarts.init(_self.$refs.myEchart3);
					  _self.chart3.setOption({
					                                        title : {
					                                        text: '客户行业类型统计',
					                                        subtext: '数量',
					                                     
					                                    },
					                                    tooltip : {
					                                        trigger: 'axis'
					                                    },
					                                    legend: {
					                                         
					                                           type: 'scroll',
					                                        bottom: 'bottom', 
					                                        data:arr1
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
					                                            data : arr2
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
					                                    series :arr4   
					                                })
					},
				})
			
			},
			initChart5() {
				var _self = this
				uni.request({
					url: _self.$api + 'Statistics/Sel_Industry_Type',
					data: {
						MinTime: _self.MinTime5,
						MaxTime: _self.MaxTime5,
						User_Id: uni.getStorageSync('userId')
					},
					method: 'GET',
					success: function(res) {
						var arr = res.data
						var arr1 = []
						var arr2 = []
						var arr3 = []
						var arr4 =[]
						console.log(arr)
						for (var i = 0; i < arr.length; i++) {
							arr1[i] = arr[i].name.replace(/[\r\n]/g, "")
							arr2 = arr[i].value
							arr3.push({name:arr[i].name.replace(/[\r\n]/g,""),value:arr[i].value})
						}
						console.log(arr1)
						console.log(arr2)
				_self.chart5 = echarts.init(_self.$refs.myEchart5);
					 _self.chart5.setOption({
					            title : {
					        text: '客户行业类型统计',
					        subtext: '数量'
					       // x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        //orient : 'vertical',
					         bottom: 'bottom', 
					        data:arr1,
					        type: 'scroll',
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
					            name:'系统统计',
					            type:'pie',
					            radius : '55%',
					            center: ['50%', '60%'],
					            data:arr3
					        }
					    ]
					            })
					},
				})
			
			}
			




		},
		filters: {
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
				if (type == 0) { // 不带小数位(默认是有小数位)  
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
	.countHeader {
		display: flex;
		flex-direction: row;
		height: 160upx;
		justify-content: space-between;

	}

	.child_count {
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

	.child_count:first-child {
		border-left: none;
	}

	.count_num {
		font-weight: 600;
	}

	.count_title {
		margin-top: 10upx;
	}

	/*  */
	.countCase {
		margin-top: 30upx;
	}

	.countCase_title {
		margin-left: 30upx;
	}

	.echartDiv {
		margin: 0 auto;
	}

	.date_btn {
		background: #7E2C2E;
		height: 80upx;
		width: 220upx;
		color: #ffffff;
		line-height: 80upx;
		text-align: center;
		border-radius: none;
		border: none;
	}
</style>
